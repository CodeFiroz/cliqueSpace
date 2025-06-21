import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Menu, X } from 'lucide-react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { CakeIcon, Calendar, Globe, Plus, Users } from 'lucide-react';
import PostCard from '../components/Ui/PostCard';
import CommunityInfo from '../components/Sidebar/CommunityInfo';

const Community = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header />

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-30 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <Info size={24} />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_350px] dark:bg-neutral-900 min-h-screen">
        {/* Sidebar - Offcanvas on mobile */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 z-40 bg-black lg:hidden"
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 z-50 h-screen w-72 bg-white dark:bg-neutral-800 shadow-xl lg:hidden"
              >
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-neutral-700 text-zinc-500 dark:text-zinc-400"
                >
                  <X size={20} />

                </button>
                <div className="p-4 mt-4 h-full overflow-y-auto">
                  <CommunityInfo />
                </div>
                <Sidebar />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar (always visible on lg+) */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="pt-5 px-5 pr-5 pb-20 lg:pb-5">
          {/* Community Banner */}
          <div className="w-full h-40 md:h-30 rounded-2xl bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/twcomponents/header.webp')] bg-cover bg-center" />

          {/* Community Header */}
          <div className="flex flex-col md:flex-row justify-between items-start px-5 md:px-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -translate-y-10">
              <img
                src="https://i.pinimg.com/736x/7a/13/40/7a13407cd778b9da0a443eff81077688.jpg"
                className="size-20 md:size-28 rounded-full object-cover border-4 md:border-[6px] border-white dark:border-neutral-700 shadow-md"
                alt="Community avatar"
              />
              <div className="md:mb-2">
                <h2 className='text-xl md:text-2xl font-bold dark:text-gray-200'>
                  C/DelhiHutiyapa
                </h2>
                <p className='text-xs md:text-sm mt-1 text-zinc-600 dark:text-zinc-300 max-w-md'>
                  Delhi is the place dedicated to Delhi NCR and all that engulfs it
                </p>
              </div>
            </div>

            {/* Community Stats - Mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-3 w-full mt-3 md:mt-0 md:w-auto mb-5">
              <div className="flex items-center gap-2 bg-zinc-100 dark:bg-neutral-800 p-2 rounded-lg">
                <Users size={16} className="text-orange-500" />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Members</p>
                  <p className="font-medium dark:text-white">12.5k</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-zinc-100 dark:bg-neutral-800 p-2 rounded-lg">
                <CakeIcon size={16} className="text-orange-500" />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Created</p>
                  <p className="font-medium dark:text-white">Jan 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-5">
            <PostCard
              title="can i pause my degree"
              content="I've completed 1 year of BBA, but now I'm considering taking a gap year to prepare for the NEET entrance exam again..."
            />
            <PostCard
              title="Why people are racist towards delhi people"
              content="So last month I visited haridwar and was at har ki pauri and there was a guy who was talking to me very nicely first but after that he asked me where r u from..."
            />
            <PostCard
              title="Bata Bhai 😂"
              image="https://preview.redd.it/wzctfbed827f1.jpeg?width=320&crop=smart&auto=webp&s=6a2df69df933c589f7daf557a56cc1a8e5cc1d4f"
              content="that he asked me where r u from I told him I'm from Delhi and then after that his tone changed and he becomes rude for no reason..."
            />
            <PostCard
              title="Caught my elder sister cheating"
              content="So last month I visited haridwar and was at har ki pauri and there was a guy who was talking to me very nicely first but after that he asked me where r u from..."
            />
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile */}
        <div className='hidden lg:block pr-5'>
          <CommunityInfo />
        </div>
      </div>
    </>
  )
}

export default Community;