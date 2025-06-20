import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';

const AuthModel = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const modalRef = useRef();

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle successful login here
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        
        <motion.div
          ref={modalRef}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          className="relative w-full max-w-md bg-white dark:bg-neutral-800 rounded-lg shadow-xl overflow-hidden"
        >
      

          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-6">
              <motion.h3 
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold text-gray-800 dark:text-gray-200"
              >
                Welcome back
              </motion.h3>
              <motion.p
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Login to your account. Explore the communities that adore you.
              </motion.p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="show"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="h-4 w-4 accent-orange-500 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="show" className="ml-2 text-xs text-gray-600 dark:text-gray-400">
                    Show Password
                  </label>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-md font-medium hover:shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={18} className="animate-spin" />
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4"
            >
              Don't have an account?{' '}
              <a
                href="#"
                className="text-orange-500 dark:text-orange-400 font-medium hover:underline focus:outline-none focus:underline"
              >
                Register here
              </a>
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(AuthModel);