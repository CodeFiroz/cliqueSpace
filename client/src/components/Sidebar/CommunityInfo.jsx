import { Cake, Lock, MessageCircle, Users, Shield, ChevronDown, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommunityInfo = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [showModerators, setShowModerators] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const communityStats = [
    { icon: <Users size={16} />, label: "Members", value: "35" },
    { icon: <Lock size={16} />, label: "Private Community" },
    { icon: <Cake size={16} />, label: "Created", value: "Mar 20, 2006" }
  ];

  const moderators = [
    { name: "u/TheSuperBat", initial: "T", color: "bg-teal-600" },
    { name: "u/Dictatorya", initial: "D", color: "bg-rose-600" },
    { name: "u/Atomika", initial: "A", color: "bg-amber-500" }
  ];

  const chatRooms = [
    { name: "Velle Delhi wale", description: "Kone wali gali ka adda" },
    { name: "Foodies Unite", description: "Best street food spots" }
  ];

  return (
    <div className="my-4 space-y-4">
      {/* Community Card */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-zinc-200 dark:border-neutral-700 overflow-hidden"
      >
        {/* Community Header */}
        <div className="p-4 pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                D
              </div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
                c/delhite
              </h3>
            </div>

           
          </div>

          {/* Description with expand/collapse */}
          <div className="mt-3">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsJoined(!isJoined)}
              className={`px-4 w-full py-1.5 text-sm rounded-full font-medium mb-4 ${
                isJoined
                  ? 'bg-zinc-100 dark:bg-neutral-700 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-neutral-600'
                  : 'bg-orange-400 hover:bg-orange-600 text-white'
              } transition-colors`}
            >
              {isJoined ? 'Joined' : 'Join'}
            </motion.button>

            <div 
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowDescription(!showDescription)}
            >
              <motion.div
                animate={{ rotate: showDescription ? 0 : -90 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} className="text-zinc-500 dark:text-zinc-400" />
              </motion.div>
              
              <span className="text-xs text-zinc-500 dark:text-zinc-400">About Community</span>
            </div>

            <AnimatePresence>
              {showDescription && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 pl-5"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, ratione. 
                  This community is for all Delhiites to share their experiences and connect.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Community Stats */}
        <div className="border-t border-zinc-200 dark:border-neutral-700 px-4 py-3">
          {communityStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 py-1 text-sm">
              <div className="text-zinc-500 dark:text-zinc-400">
                {stat.icon}
              </div>
              <span className="text-zinc-700 dark:text-zinc-300">
                {stat.label} {stat.value && <span className="font-medium">{stat.value}</span>}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Chat Rooms */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-zinc-200 dark:border-neutral-700 overflow-hidden"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
              <MessageCircle size={16} className="text-orange-500" />
              Community Chats
            </h4>
            <button className="text-xs text-orange-500 hover:text-orange-600 flex items-center gap-1">
              <Plus size={14} /> New
            </button>
          </div>

          <div className="space-y-2">
            {chatRooms.map((room, index) => (
              <motion.button
                key={index}
                whileHover={{ x: 2 }}
                className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <div className="size-10 bg-zinc-200 dark:bg-neutral-700 rounded-full flex items-center justify-center text-orange-500">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{room.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{room.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Moderators */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-zinc-200 dark:border-neutral-700 overflow-hidden"
      >
        <div className="p-4">
          <button 
            onClick={() => setShowModerators(!showModerators)}
            className="w-full flex items-center justify-between mb-1"
          >
            <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
              <Shield size={16} className="text-orange-500" />
              Moderators
            </h4>
            <motion.div
              animate={{ rotate: showModerators ? 0 : -90 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} className="text-zinc-500 dark:text-zinc-400" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showModerators && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 mt-2"
              >
                {moderators.map((mod, index) => (
                  <div key={index} className="flex items-center gap-3 p-1.5">
                    <div className={`size-8 rounded-full flex items-center justify-center text-white font-medium ${mod.color}`}>
                      {mod.initial}
                    </div>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{mod.name}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Community Rules (would be dynamic in a real app) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-zinc-200 dark:border-neutral-700 overflow-hidden"
      >
        <div className="p-4">
          <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
            Community Rules
          </h4>
          <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 pl-4 list-disc">
            <li>Be respectful to all members</li>
            <li>No hate speech or discrimination</li>
            <li>Keep discussions relevant to Delhi</li>
            <li>No spam or self-promotion</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(CommunityInfo);