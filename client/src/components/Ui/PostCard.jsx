import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreVertical, Flag, Bookmark, Share2, Link, EyeOff } from 'lucide-react';

const PostCard = ({ title, content, image, community = "strangers-with-vcandy", time = "09 min ago" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { icon: <Bookmark size={16} />, label: 'Save', action: () => alert('Post saved!') },
    { icon: <Share2 size={16} />, label: 'Share', action: () => alert('Share dialog opened') },
    { icon: <Link size={16} />, label: 'Copy Link', action: () => navigator.clipboard.writeText(window.location.href) },
    { icon: <EyeOff size={16} />, label: 'Hide', action: () => alert('Post hidden') },
    { icon: <Flag size={16} />, label: 'Report', action: () => alert('Report dialog opened'), isReport: true }
  ];

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className='relative rounded-2xl hover:bg-gray-200/80 dark:hover:bg-neutral-950/80 dark:bg-neutral-900 p-5 border mb-4 dark:border-zinc-800 border-zinc-200 transition-colors duration-200'
    >
      {/* Header with community info and menu */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-600 text-xs">
          <div className="size-6 bg-teal-500 text-white flex justify-center items-center rounded-full font-medium">
            {community.charAt(0).toUpperCase()}
          </div>
          <span className='text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors'>
            c/{community}
          </span>
          <span className='text-zinc-400'>●</span>
          <span className='text-zinc-500 dark:text-zinc-400'>{time}</span>
        </div>

        {/* Menu toggle button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 p-1 rounded-full hover:bg-zinc-300/30 dark:hover:bg-zinc-700/30 transition-colors"
          aria-label="Post options"
        >
          <MoreVertical size={18} />
        </button>

        {/* Dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-3 top-10 z-10 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ backgroundColor: item.isReport ? 'rgba(239, 68, 68, 0.1)' : 'rgba(0, 0, 0, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 ${
                    item.isReport 
                      ? 'text-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10' 
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-neutral-700'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Post content */}
      <h3 className='font-bold text-zinc-800 dark:text-zinc-200 text-lg mb-2 line-clamp-2'>
        {title}
      </h3>

      {image ? (
        <div className="flex justify-center items-center bg-slate-100 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-2">
          <img 
            className='w-full h-auto max-h-96 object-contain' 
            src={image} 
            alt={title} 
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/600x400?text=Image+not+available';
            }}
          />
        </div>
      ) : (
        <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-4 mb-2'>
          {content}
        </p>
      )}

      {/* Engagement metrics would go here */}
    </motion.div>
  );
};

export default React.memo(PostCard);