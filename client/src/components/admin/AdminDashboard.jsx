import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { api } from '../../services/api';
import {
  ShieldCheck,
  Mail,
  FolderGit2,
  Cpu,
  BarChart3,
  User,
  Plus,
  Trash2,
  Check,
  Eye,
  Lock,
  LogOut,
  Sparkles,
} from 'lucide-react';

export const AdminDashboard = () => {
  const { isAdminLoggedIn, logoutAdmin, refreshData } = usePortfolio();
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      const [msgRes, analRes] = await Promise.allSettled([
        api.getMessages(),
        api.getDashboardAnalytics(),
      ]);

      if (msgRes.status === 'fulfilled' && msgRes.value.data) {
        setMessages(msgRes.value.data);
      }
      if (analRes.status === 'fulfilled' && analRes.value.data) {
        setAnalytics(analRes.value.data);
      }
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      fetchAdminData();
    }
  }, [isAdminLoggedIn]);

  if (!isAdminLoggedIn) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-brand-500/40 my-10">
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-brand-500/30 space-y-6 shadow-2xl">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-brand-600 text-white shadow-lg shadow-indigo-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  CMS Administration Panel
                </h2>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                  Authenticated
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Logged in as Aniket Kumar (aniket07kr2000@gmail.com)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAdminData}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              Refresh Data
            </button>
            <button
              onClick={logoutAdmin}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-bold border border-rose-200 dark:border-rose-900/60"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: 'messages', label: `Recruiter Inbox (${messages.length})`, icon: Mail },
            { id: 'analytics', label: 'Interaction Analytics', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Messages Inbox */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500">
                No recruiter messages received yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {messages.map((msg) => (
                  <div key={msg._id} className="py-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-slate-800 text-brand-600 dark:text-cyan-400 border border-brand-200 dark:border-slate-700">
                          {msg.senderType}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                          {msg.name} ({msg.email})
                        </h4>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                          Subject: {msg.subject}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Analytics Overview */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-black text-brand-600 dark:text-cyan-400">
                  {analytics?.totalProjects || 7}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Live Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  {analytics?.totalMessages || messages.length}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Total Messages</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {analytics?.eventCounts?.page_view || 1}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Page Views</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
                  {analytics?.eventCounts?.ai_chat_message || 0}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">AI Queries</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
