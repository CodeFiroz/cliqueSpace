import { Cake, Edit3, Shield, Mail, Calendar, MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfileHead = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userStats = [
    { value: '1.2k', label: 'Karma' },
    { value: '5.7k', label: 'Followers' },
    { value: '142', label: 'Following' }
  ];

  return (
    <div className="relative">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        {/* Avatar with animation */}
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="size-20 text-4xl bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full flex justify-center items-center shadow-lg"
        >
          S
        </motion.div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                Your Savior Bitch 🎀
                <span className="text-xs px-2 py-0.5 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 rounded-full">
                  PRO
                </span>
              </h1>
              <p className="text-zinc-600 text-xs dark:text-zinc-400">
                u/sarcastic.firoz
              </p>
            </div>

            {/* Menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mt-3">
            {userStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-medium text-gray-800 dark:text-gray-200">{stat.value}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <motion.p 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex deserunt nihil hic quam voluptatum libero nulla placeat quidem veritatis.
      </motion.p>

      {/* Meta Info */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <Cake size={16} className="text-orange-500" />
          <span>Cake Day - March 20, 2006</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <Calendar size={16} className="text-blue-500" />
          <span>Joined September 2020</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsFollowing(!isFollowing)}
          className={`px-4 py-2 rounded-full font-medium ${
            isFollowing
              ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700'
              : 'bg-orange-500 hover:bg-orange-600 text-white'
          }`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium flex items-center gap-2"
        >
          <Mail size={16} />
          Message
        </motion.button>

        <button className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
          <Edit3 size={16} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 top-12 z-10 w-48 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden"
        >
          <button className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            <Edit3 size={16} /> Edit Profile
          </button>
          <button className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            <Shield size={16} /> Privacy Settings
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileHead; 