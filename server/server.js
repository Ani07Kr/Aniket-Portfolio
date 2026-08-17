const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// Load env vars
dotenv.config();

const { connectDB } = require('./config/db');
const seedDatabase = require('./config/seed');
const errorHandler = require('./middleware/errorHandler');
const { generalLimiter } = require('./middleware/rateLimiter');

// Import routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const educationRoutes = require('./routes/educationRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

// Check if database needs initial seeding
const User = require('./models/User');

const app = express();

// Security Middlewares
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:', 'blob:', 'http:'],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
        fontSrc: ["'self'", 'https:', 'data:'],
        connectSrc: ["'self'", 'https:', 'wss:', 'http:'],
      },
    },
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Apply general rate limiter
app.use('/api', generalLimiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Aniket Kumar Portfolio REST API is operational 🚀',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/analytics', analyticsRoutes);

// Serve static frontend in production
if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDist));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

let server;

const startServer = async () => {
  try {
    await connectDB();

    // Auto-seed if database has no admin
    const adminCount = await User.countDocuments();
    if (adminCount === 0) {
      console.log('🔄 Fresh database detected. Auto-seeding initial authentic portfolio data...');
      await seedDatabase();
    }

    server = app.listen(PORT, () => {
      console.log(`\n=================================================`);
      console.log(`🚀 ANIKET KUMAR PORTFOLIO BACKEND RUNNING`);
      console.log(`📡 URL: http://localhost:${PORT}`);
      console.log(`🛡️ Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`=================================================\n`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
});

module.exports = app;
