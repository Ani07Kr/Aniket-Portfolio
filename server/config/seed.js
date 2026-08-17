const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const { connectDB, disconnectDB } = require('./db');
const User = require('../models/User');
const Profile = require('../models/Profile');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Achievement = require('../models/Achievement');
const BlogPost = require('../models/BlogPost');
const Message = require('../models/Message');
const seedData = require('./seedData');

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting Database Seeding Process for Aniket Kumar Portfolio...');
    if (mongoose.connection.readyState === 0) {
      await connectDB();
    }

    // Clear existing data
    console.log('🧹 Clearing previous collections...');
    await Promise.all([
      User.deleteMany({}),
      Profile.deleteMany({}),
      Project.deleteMany({}),
      Skill.deleteMany({}),
      Experience.deleteMany({}),
      Education.deleteMany({}),
      Achievement.deleteMany({}),
      BlogPost.deleteMany({}),
      Message.deleteMany({}),
    ]);

    // Create Admin User
    const adminEmail = process.env.ADMIN_EMAIL || 'aniket07kr2000@gmail.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin@aniket2026';

    const adminUser = await User.create({
      name: 'Aniket Kumar',
      email: adminEmail,
      password: adminPassword,
      role: 'admin',
    });
    console.log(`👤 Admin User Created: ${adminUser.email}`);

    // Seed Profile
    const profile = await Profile.create(seedData.profile);
    console.log(`✨ Profile Created: ${profile.name} (${profile.usn})`);

    // Seed Projects
    const projects = await Project.insertMany(seedData.projects);
    console.log(`🚀 ${projects.length} Verified Projects Seeded.`);

    // Seed Skills
    const skills = await Skill.insertMany(seedData.skills);
    console.log(`⚡ ${skills.length} Technical Skills Seeded.`);

    // Seed Experiences
    const experiences = await Experience.insertMany(seedData.experiences);
    console.log(`💼 ${experiences.length} Experience & Internship Records Seeded.`);

    // Seed Education
    const educations = await Education.insertMany(seedData.educations);
    console.log(`🎓 ${educations.length} Education Credentials Seeded.`);

    // Seed Achievements
    const achievements = await Achievement.insertMany(seedData.achievements);
    console.log(`🏆 ${achievements.length} Patents & Conference Records Seeded.`);

    // Seed Blog Posts
    const blogs = await BlogPost.insertMany(seedData.blogPosts);
    console.log(`📝 ${blogs.length} Technical Blog Articles Seeded.`);

    // Seed Sample Welcome Message in Contact Inbox
    await Message.create({
      name: 'TechCiti Consulting Talent Team',
      email: 'recruiting@techciti.in',
      subject: 'Exceptional Performance on Bhagavad Gita AI Project',
      message:
        'Hi Aniket, we were thoroughly impressed by your technical leadership on the AI Holistic Wellness project and the resulting Indian Patent publication. Keep up the high standard of engineering!',
      senderType: 'Recruiter',
      isRead: false,
      replyStatus: 'Pending',
    });
    console.log('📬 Initial sample recruiter message seeded.');

    console.log('\n🎉 ALL COLLECTIONS SUCCESSFULLY SEEDED WITH 100% AUTHENTIC DATA!');
    return true;
  } catch (error) {
    console.error('❌ Error Seeding Database:', error);
    throw error;
  }
};

// If run directly via CLI
if (require.main === module) {
  seedDatabase()
    .then(async () => {
      await disconnectDB();
      process.exit(0);
    })
    .catch(async () => {
      await disconnectDB();
      process.exit(1);
    });
}

module.exports = seedDatabase;
