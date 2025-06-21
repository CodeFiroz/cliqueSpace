import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
;

  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
    };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }


    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Logged in successfully!");
      // Redirect or handle successful login here
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full min-h-screen bg-zinc-100 dark:bg-neutral-900 flex justify-center items-center p-4'>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-xl bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-zinc-200 dark:border-neutral-700"
      >
        <div className="grid grid-cols-1">
          {/* Left Side - Visual */}
       
          {/* Right Side - Form */}
          <div className="p-8 md:p-10">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  Forgot Password
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  forgot your password no worries. reset you password
                </p>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

          

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                  isSubmitting ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Email...
                  </>
                ) : (
                  'Forgot password'
                )}
              </motion.button>

              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Remembred password {' '}
                <Link to="/sign-in" className="text-blue-500 hover:underline font-medium">
                  Sign in here
                </Link>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;