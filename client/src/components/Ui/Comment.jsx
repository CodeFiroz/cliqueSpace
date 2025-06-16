import {
  ArrowDown,
  ArrowUp,
  Flag,
  Image,
  Reply,
  Smile,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import CommentBox from "./CommentBox";

const Comment = ({
  avatar = "U",
  author = "Unknown",
  time = "Just now",
  content = "",
  score = 0,
  onUpvote = () => {},
  onDownvote = () => {},
  onReport = () => {},
  children,
  isTopLevel = false,       // NEW: mark this as a top-level comment
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [addReply, setReply] = useState(false);

  // Only show toggle if this is top-level AND has children
  const hasReplies = React.Children.count(children) > 0;
  
  return (
    <div className="flex gap-3 my-5 items-start">
      {/* Avatar */}
      <div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-sm font-bold text-white">
        {avatar}
      </div>

      {/* Main body */}
      <div className="flex-1">
        {/* Meta */}
        <p className="text-xs text-zinc-600">
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">{author}</span> •{" "}
          {time}
        </p>

        {/* Content */}
        <p className="mt-1 mb-3 text-sm text-zinc-700 dark:text-gray-400">{content}</p>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-zinc-100 pt-2">
          {/* Votes */}
          <div className="flex items-center gap-2">
            <button
              onClick={onUpvote}
              className="w-6 h-6 rounded-full flex items-center justify-center text-orange-600 bg-zinc-100 hover:bg-orange-600 hover:text-white transition"
            >
              <ArrowUp size={16} />
            </button>
            <span className="text-sm text-zinc-600 dark:text-zinc-200">{score}</span>
            <button
              onClick={onDownvote}
              className="w-6 h-6 rounded-full flex items-center justify-center text-indigo-500 bg-zinc-100 hover:bg-indigo-500 hover:text-white transition"
            >
              <ArrowDown size={16} />
            </button>

            <button onClick={()=> setReply(!addReply)} className="flex items-center gap-2 px-3 py-2 text-xs bg-zinc-100 rounded-2xl hover:bg-gray-300 cursor-pointer">
              <Reply size={16} />
              Reply
            </button>
          </div>

          {/* Report */}
          <button
            onClick={onReport}
            className="flex items-center gap-1 rounded-full border border-zinc-300 bg-zinc-200 px-3 py-1 text-xs text-zinc-800 hover:bg-red-100 transition"
          >
            <Flag size={12} />
            Report
          </button>
        </div>

        {
          addReply ? <CommentBox /> : ''
        }

        {/* Toggle show/hide replies (top-level only) */}
        {isTopLevel && hasReplies && (
          <h3
            onClick={() => setShowReplies(prev => !prev)}
            className="my-3 text-sm text-center font-semibold font-host text-gray-500 cursor-pointer select-none"
          >
            {showReplies ? "Hide replies" : "Show replies"}
          </h3>
        )}

        {/* Nested replies */}
        {hasReplies && showReplies && (
          <div className="mt-4 pl-8 border-l border-zinc-200">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
