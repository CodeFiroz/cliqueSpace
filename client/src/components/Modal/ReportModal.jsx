import { X, AlertTriangle, Flag, ShieldAlert, MessageSquareWarning } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReportModel = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef();

  const reportOptions = [
    {
      id: 'bully',
      label: 'Bullying & Harassment',
      description: 'Targeted attacks, threats, or intentional humiliation',
      icon: <AlertTriangle size={16} />
    },
    {
      id: 'hate',
      label: 'Hate Speech',
      description: 'Content promoting violence or hatred against groups',
      icon: <MessageSquareWarning size={16} />
    },
    {
      id: 'rule',
      label: 'Rule Violation',
      description: 'Content that breaks community guidelines',
      icon: <ShieldAlert size={16} />
    },
    {
      id: 'other',
      label: 'Other Issue',
      description: 'Something else that needs attention',
      icon: <Flag size={16} />
    }
  ];

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
    if (!selectedOption) return;
    
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      // Here you would typically show a success message
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 400 }}
          className="relative w-full max-w-md bg-white dark:bg-neutral-800 rounded-lg shadow-xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Close report modal"
          >
            <X size={20} className="text-zinc-500 dark:text-zinc-400" />
          </button>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <Flag size={20} className="text-red-500" />
                Submit a Report
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Help us keep the community safe by reporting inappropriate content
              </p>
            </div>

            <div className="space-y-3 mb-5">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                What's the issue? <span className="text-red-500">*</span>
              </h4>
              
              {reportOptions.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedOption === option.id
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                      : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-neutral-700'
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 ${
                      selectedOption === option.id 
                        ? 'text-orange-500' 
                        : 'text-zinc-500 dark:text-zinc-400'
                    }`}>
                      {option.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="report"
                          id={option.id}
                          checked={selectedOption === option.id}
                          onChange={() => setSelectedOption(option.id)}
                          className="h-4 w-4 accent-orange-500"
                        />
                        <label 
                          htmlFor={option.id} 
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {option.label}
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-5">
              <label 
                htmlFor="details" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Additional details
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                  (Optional but helpful)
                </span>
              </label>
              <textarea
                id="details"
                name="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all"
                placeholder="Please provide more context about this report..."
                rows={4}
              />
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              <p>Your report will be reviewed by our moderation team.</p>
              <p>False reports may result in account restrictions.</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!selectedOption || isSubmitting}
              className={`w-full ${
                selectedOption 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white py-3 px-4 rounded-md font-medium transition-all`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Report"
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(ReportModel);