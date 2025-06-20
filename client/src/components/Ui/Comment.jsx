import {
  ArrowDown,
  ArrowUp,
  Flag,
  Image,
  Reply,
  Smile,
  Trash,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Heart
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommentBox from "./CommentBox";

const Comment = ({
  avatar = "U",
  author = "Unknown",
  time = "Just now",
  content = "",
  score = 0,
  onUpvote = () => { },
  onDownvote = () => { },
  onReport = () => { },
  onDelete = () => { },
  children,
  isTopLevel = false,
  isOwner = false,
  isLiked = false,
  isDisliked = false,
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [addReply, setReply] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const hasReplies = React.Children.count(children) > 0;
  const [voteScore, setVoteScore] = useState(score);

  // Handle outside clicks for menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUpvote = () => {
    const newScore = isLiked ? voteScore - 1 : isDisliked ? voteScore + 2 : voteScore + 1;
    setVoteScore(newScore);
    onUpvote();
  };

  const handleDownvote = () => {
    const newScore = isDisliked ? voteScore + 1 : isLiked ? voteScore - 2 : voteScore - 1;
    setVoteScore(newScore);
    onDownvote();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-3 my-5 items-start ${isTopLevel ? 'border-b border-zinc-100 dark:border-zinc-800 pb-4' : ''}`}
    >
      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
      >
        {avatar}
      </motion.div>

      {/* Main body */}
      <div className="flex-1">
        {/* Meta */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">{author}</span> •{" "}
              <span className="text-zinc-500 dark:text-zinc-400">{time}</span>
              {isOwner && (
                <span className="ml-2 text-xs px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded">
                  OP
                </span>
              )}
            </p>
          </div>

          {/* Menu button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              <MoreHorizontal size={16} />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-6 z-10 w-40 bg-white dark:bg-zinc-800 rounded-md shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden"
                >
                  {isOwner ? (
                    <button
                      onClick={() => {
                        onDelete();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm flex items-center gap-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash size={14} /> Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onReport();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm flex items-center gap-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Flag size={14} /> Report
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Content */}
        <p className="mt-1 mb-3 text-sm text-zinc-700 dark:text-gray-300 leading-relaxed">{content}</p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* Votes */}
          <div className="flex items-center gap-1">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleUpvote}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${isLiked
                  ? 'text-white bg-orange-500'
                  : 'text-zinc-500 hover:text-orange-500 hover:bg-orange-100 dark:hover:bg-orange-900/20'
                }`}
            >
              <ArrowUp size={16} />
            </motion.button>

            <span className={`text-sm min-w-[20px] text-center ${voteScore > 0 ? 'text-orange-500' :
                voteScore < 0 ? 'text-blue-500' :
                  'text-zinc-500 dark:text-zinc-400'
              }`}>
              {voteScore}
            </span>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleDownvote}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${isDisliked
                  ? 'text-white bg-blue-500'
                  : 'text-zinc-500 hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/20'
                }`}
            >
              <ArrowDown size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setReply(!addReply)}
              className="ml-2 flex items-center gap-1 px-3 py-1.5 text-xs rounded-full text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Reply size={14} />
              <span>Reply</span>
            </motion.button>
          </div>


        </div>

        {/* Reply box */}
        <AnimatePresence>
          {addReply && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3"
            >
              <CommentBox onCancel={() => setReply(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Replies section */}
        {isTopLevel && hasReplies && (
          <div className="mt-3">
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              {showReplies ? (
                <>
                  <ChevronUp size={14} /> Hide replies
                </>
              ) : (
                <>
                  <ChevronDown size={14} /> Show {React.Children.count(children)} replies
                </>
              )}
            </button>

            <AnimatePresence>
              {showReplies && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 pl-6 border-l-2 border-zinc-200 dark:border-zinc-700"
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default React.memo(Comment);