import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import validation from '../utils/validation';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      password: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validation.email(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    } else if (!validation.password(formData.password)) {
      newErrors.password = "Include upper/lowercase, number & symbol";
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
      toast.success("Account created successfully!");
      // Reset form after successful submission
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
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
        className="w-full max-w-4xl bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-zinc-200 dark:border-neutral-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Visual */}
          <div className="hidden md:block bg-gradient-to-br from-orange-500 to-amber-600 p-8 text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-full flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="mb-6">Connect with like-minded people and share your thoughts.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <span>Create your profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span>Personalized experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Lock size={20} />
                  </div>
                  <span>Secure & private</span>
                </div>
              </div>
            </motion.div>
          </div>

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
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Create Account</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Join our community today
                </p>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-700 dark:text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
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
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-700 dark:text-white`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.password ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-700 dark:text-white pr-10`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password ? (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                ) : (
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Must be 6+ characters with uppercase, lowercase, number & symbol
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                  isSubmitting ? 'bg-orange-400' : 'bg-orange-500 hover:bg-orange-600'
                } transition-colors flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </motion.button>

              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <a href="#" className="text-orange-500 hover:underline font-medium">
                  Sign in
                </a>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;