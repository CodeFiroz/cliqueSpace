import React, { useState, useId, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Image, Lock, Trash, Users, X, Loader2 } from 'lucide-react';
import Main from '../components/Layout/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import CommunityInfo from '../components/Sidebar/CommunityInfo';
import Header from '../components/Header/Header';

const WritePost = () => {
  const [picture, setPicture] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState({
    name: 'c/delhite',
    avatar: 'D',
    members: '35',
    isPrivate: true,
    created: 'Mar 20, 2006',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, ratione.'
  });
  const uniqueId = useId();
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const imgFile = e.target.files[0];
    if (!imgFile) return;
    
    // Validate image size (max 5MB)
    if (imgFile.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    const ImageURL = URL.createObjectURL(imgFile);
    setPicture(ImageURL);
    setImageFile(imgFile);
  };

  const handleRemoveImage = () => {
    URL.revokeObjectURL(picture); // Clean up memory
    setPicture(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title.trim() === '' && content.trim() === '' && !imageFile) || isSubmitting) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Post submitted:', { title, content, imageFile, community: selectedCommunity });
      setIsSubmitting(false);
      // Reset form after submission
      setTitle('');
      setContent('');
      handleRemoveImage();
    }, 1500);
  };

  return (
    <div className="dark:bg-neutral-950 min-h-screen">
        <Header />
      <div className='grid grid-cols-1 lg:grid-cols-[300px_1fr_400px]'>
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="p-4 lg:p-10 lg:px-20 overflow-y-auto w-full mx-auto">
          {/* Post Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="size-10 bg-gradient-to-br from-rose-600 to-pink-600 text-white flex justify-center items-center rounded-full font-bold shadow-md">
              {selectedCommunity.avatar}
            </div>
            <div className='text-zinc-700 text-sm dark:text-zinc-300'>
              <p className="font-medium">{selectedCommunity.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Posting as u/BiryaniElaichi</p>
            </div>
          </motion.div>

          {/* Post Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 p-4 bg-white dark:bg-neutral-900 border border-zinc-300 dark:border-neutral-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Title"
                required
              />
            </motion.div>

            {/* Content Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full text-sm text-gray-700 dark:text-gray-300 font-normal p-4 bg-white dark:bg-neutral-900 border border-zinc-300 dark:border-neutral-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all min-h-[200px]"
                placeholder="What are your thoughts?"
              />
            </motion.div>

            {/* Image Upload */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <input
                ref={fileInputRef}
                onChange={handleUpload}
                accept="image/*"
                type="file"
                name="picture"
                id={`picture-upload-${uniqueId}`}
                hidden
              />
              
              <AnimatePresence>
                {picture ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative bg-zinc-100 dark:bg-neutral-800 rounded-xl overflow-hidden"
                  >
                    <div className="p-2">
                      <img 
                        src={picture} 
                        alt="Upload preview" 
                        className="max-h-96 w-auto mx-auto rounded-lg object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/600x400?text=Image+not+available';
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-3 right-3 w-8 h-8 bg-red-500/90 hover:bg-red-600 flex justify-center items-center rounded-full text-white cursor-pointer transition-colors"
                      aria-label="Remove image"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    htmlFor={`picture-upload-${uniqueId}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-neutral-800 hover:bg-zinc-200 dark:hover:bg-neutral-700 text-zinc-700 dark:text-zinc-300 rounded-full cursor-pointer transition-colors"
                  >
                    <Image size={18} />
                    <span>Add Image</span>
                  </motion.label>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting || (title.trim() === '' && content.trim() === '' && !imageFile)}
                className={`px-6 py-2.5 rounded-full font-medium ${
                  isSubmitting || (title.trim() === '' && content.trim() === '' && !imageFile)
                    ? 'bg-orange-400/70 dark:bg-orange-600/70 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600'
                } text-white transition-colors flex items-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Posting...
                  </>
                ) : (
                  'Post'
                )}
              </motion.button>
            </motion.div>
          </form>
        </div>

        {/* Right Sidebar - Community Info */}
        <div className="hidden xl:block p-4 sticky top-0 h-screen overflow-y-auto">
          <CommunityInfo />
        </div>
      </div>
    </div>
  );
};

export default WritePost;