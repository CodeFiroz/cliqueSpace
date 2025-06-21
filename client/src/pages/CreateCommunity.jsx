import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Image,
    Lock,
    Globe,
    Users,
    MessageSquare,
    Tag,
    List,
    X,
    Plus,
    ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast"
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

const CreateCommunity = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        description: '',
        chatRoomName: '',
        isPublic: true,
        rules: ['Be respectful', 'No spam'],
        flairs: ['Discussion', 'Question']
    });
    const [profilePic, setProfilePic] = useState(null);
    const [bannerPic, setBannerPic] = useState(null);
    const [newRule, setNewRule] = useState('');
    const [newFlair, setNewFlair] = useState('');
    const [errors, setErrors] = useState({});
    const profileInputRef = useRef(null);
    const bannerInputRef = useRef(null);

    // Generate slug from community name
    const generateSlug = (name) => {
        return name.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData(prev => {
            const newData = {
                ...prev,
                [name]: val
            };

            // Auto-generate slug when name changes
            if (name === 'name') {
                newData.slug = generateSlug(value);
            }

            return newData;
        });

        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleImageUpload = (e, setImage) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate image
        if (!file.type.match('image.*')) {
            toast.error('Please upload an image file');
            return;
        }
        if (file.size > 2 * 1024 * 1024) { // 2MB
            toast.error('Image must be less than 2MB');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    const addRule = () => {
        if (newRule.trim() && formData.rules.length < 10) {
            setFormData(prev => ({
                ...prev,
                rules: [...prev.rules, newRule.trim()]
            }));
            setNewRule('');
        }
    };

    const removeRule = (index) => {
        setFormData(prev => ({
            ...prev,
            rules: prev.rules.filter((_, i) => i !== index)
        }));
    };

    const addFlair = () => {
        if (newFlair.trim() && formData.flairs.length < 10) {
            setFormData(prev => ({
                ...prev,
                flairs: [...prev.flairs, newFlair.trim()]
            }));
            setNewFlair('');
        }
    };

    const removeFlair = (index) => {
        setFormData(prev => ({
            ...prev,
            flairs: prev.flairs.filter((_, i) => i !== index)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Community name is required';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        } else if (formData.name.length > 21) {
            newErrors.name = 'Name must be less than 21 characters';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        } else if (formData.description.length > 500) {
            newErrors.description = 'Description too long (max 500 chars)';
        }

        if (!profilePic) {
            newErrors.profilePic = 'Community picture is required';
        }

        if (!formData.chatRoomName.trim()) {
            newErrors.chatRoomName = 'Chat room name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // Submit logic here (API call)
        console.log('Submitting:', {
            ...formData,
            profilePic,
            bannerPic
        });

        // Redirect after creation
        navigate(`/c/${formData.slug}`);
        toast.success('Community created successfully!');
    };

    return (
        <>
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">

                <div>
                    <Sidebar />
                </div>

                <div className="p-10 dark:bg-neutral-900 min-h-screen">
                    <h1 className="text-2xl font-bold dark:text-white mb-6">Create a Community</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Community Name */}
                        <div>
                            <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                Community Name <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 dark:text-gray-400">c/</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    maxLength={21}
                                    className={`flex-1 px-3 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-neutral-700'
                                        } focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-800 dark:text-white`}
                                    placeholder="DelhiHutiyapa"
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                {formData.name ? `Your community will be: c/${formData.slug}` : '3-21 characters, no spaces'}
                            </p>
                        </div>

                        {/* Community Pictures */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Profile Picture */}
                            <div>
                                <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                    Community Picture <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-neutral-700 overflow-hidden flex items-center justify-center">
                                            {profilePic ? (
                                                <img src={profilePic} alt="Profile preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <Image size={24} className="text-gray-400" />
                                            )}
                                        </div>
                                        {profilePic && (
                                            <button
                                                type="button"
                                                onClick={() => setProfilePic(null)}
                                                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"
                                            >
                                                <X size={14} />
                                            </button>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="file"
                                            ref={profileInputRef}
                                            onChange={(e) => handleImageUpload(e, setProfilePic)}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => profileInputRef.current.click()}
                                            className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium"
                                        >
                                            {profilePic ? 'Change' : 'Upload'}
                                        </motion.button>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Square image, 2MB max</p>
                                    </div>
                                </div>
                                {errors.profilePic && (
                                    <p className="mt-1 text-sm text-red-500">{errors.profilePic}</p>
                                )}
                            </div>

                            {/* Banner Picture */}
                            <div>
                                <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                    Banner Image (Optional)
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-32 h-20 rounded-lg bg-gray-200 dark:bg-neutral-700 overflow-hidden flex items-center justify-center">
                                            {bannerPic ? (
                                                <img src={bannerPic} alt="Banner preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <Image size={24} className="text-gray-400" />
                                            )}
                                        </div>
                                        {bannerPic && (
                                            <button
                                                type="button"
                                                onClick={() => setBannerPic(null)}
                                                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"
                                            >
                                                <X size={14} />
                                            </button>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="file"
                                            ref={bannerInputRef}
                                            onChange={(e) => handleImageUpload(e, setBannerPic)}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => bannerInputRef.current.click()}
                                            className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium"
                                        >
                                            {bannerPic ? 'Change' : 'Upload'}
                                        </motion.button>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Landscape image, 4MB max</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Community Type */}
                        <div>
                            <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                Community Type <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="isPublic"
                                        checked={formData.isPublic}
                                        onChange={() => setFormData(prev => ({ ...prev, isPublic: true }))}
                                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-neutral-600"
                                    />
                                    <div className="flex items-center gap-1">
                                        <Globe size={16} className="text-blue-500" />
                                        <span className="dark:text-gray-300">Public</span>
                                    </div>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="isPublic"
                                        checked={!formData.isPublic}
                                        onChange={() => setFormData(prev => ({ ...prev, isPublic: false }))}
                                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-neutral-600"
                                    />
                                    <div className="flex items-center gap-1">
                                        <Lock size={16} className="text-orange-500" />
                                        <span className="dark:text-gray-300">Private</span>
                                    </div>
                                </label>
                            </div>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                {formData.isPublic ? 'Anyone can view and join this community' : 'Only approved users can view and join'}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                maxLength={500}
                                rows={4}
                                className={`w-full px-3 py-2 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300 dark:border-neutral-700'
                                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-800 dark:text-white`}
                                placeholder="What's this community about?"
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                {formData.description.length}/500 characters
                            </p>
                        </div>

                        {/* Chat Room */}
                        <div>
                            <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                Chat Room Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="chatRoomName"
                                value={formData.chatRoomName}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 rounded-lg border ${errors.chatRoomName ? 'border-red-500' : 'border-gray-300 dark:border-neutral-700'
                                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-800 dark:text-white`}
                                placeholder="e.g. Delhi Chit-Chat"
                            />
                            {errors.chatRoomName && (
                                <p className="mt-1 text-sm text-red-500">{errors.chatRoomName}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Members will see this name when joining the chat
                            </p>
                        </div>

                        {/* Flairs */}
                        <div>
                            <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                Post Flairs
                            </label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {formData.flairs.map((flair, index) => (
                                    <div key={index} className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                                        <Tag size={14} className="text-orange-500" />
                                        <span className="text-sm dark:text-white">{flair}</span>
                                        <button
                                            type="button"
                                            onClick={() => removeFlair(index)}
                                            className="text-gray-500 hover:text-red-500"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {formData.flairs.length < 10 && (
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newFlair}
                                        onChange={(e) => setNewFlair(e.target.value)}
                                        className="flex-1 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-800 dark:text-white text-sm"
                                        placeholder="Add new flair"
                                        maxLength={20}
                                    />
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={addFlair}
                                        disabled={!newFlair.trim()}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${!newFlair.trim() ? 'bg-gray-200 dark:bg-neutral-700 text-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'
                                            }`}
                                    >
                                        Add
                                    </motion.button>
                                </div>
                            )}
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Flairs help categorize posts (max 10)
                            </p>
                        </div>

                        {/* Rules */}
                        <div>
                            <label className="block text-sm font-medium dark:text-gray-300 mb-1">
                                Community Rules
                            </label>
                            <ul className="space-y-2 mb-3">
                                {formData.rules.map((rule, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-0.5">•</span>
                                        <span className="flex-1 dark:text-gray-300">{rule}</span>
                                        <button
                                            type="button"
                                            onClick={() => removeRule(index)}
                                            className="text-gray-500 hover:text-red-500"
                                        >
                                            <X size={16} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {formData.rules.length < 10 && (
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newRule}
                                        onChange={(e) => setNewRule(e.target.value)}
                                        className="flex-1 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-neutral-800 dark:text-white text-sm"
                                        placeholder="Add new rule"
                                        maxLength={100}
                                    />
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={addRule}
                                        disabled={!newRule.trim()}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${!newRule.trim() ? 'bg-gray-200 dark:bg-neutral-700 text-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'
                                            }`}
                                    >
                                        Add
                                    </motion.button>
                                </div>
                            )}
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Set guidelines for your community (max 10)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md"
                            >
                                Create Community
                            </motion.button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    );
};

export default CreateCommunity;