import React, { useState } from 'react';
import { Moon, Menu, X, Search } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';
import MobileNavItems from './MobileNavItems';
import MobileSearchBar from './MobileSearchBar';
import UserProfileButton from './UserProfileButton';
import DesktopSearchBar from './DesktopSearchBar';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    return (
        <header className="w-full sticky top-0 left-0 bg-zinc-50 dark:bg-neutral-800 border-b border-zinc-200 dark:border-zinc-700 z-50">
            {/* Desktop Header */}
            <div className="hidden md:grid md:grid-cols-3 gap-5 items-center px-6 py-3 lg:px-10">
                <a
                    href="#"
                    className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                    CliqueSpace
                </a>

                <div className="flex justify-center">
                    <DesktopSearchBar />
                </div>

                <div className="flex justify-end gap-3">
                    <UserProfileButton />
                    <ThemeToggleButton />
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 dark:text-gray-300"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <a
                        href="#"
                        className="text-xl font-bold text-gray-800 dark:text-gray-300"
                    >
                        CliqueSpace
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowMobileSearch(!showMobileSearch)}
                        className="text-gray-700 dark:text-gray-300"
                        aria-label="Toggle search"
                    >
                        <Search size={22} />
                    </button>
                    <UserProfileButton mobile />
                </div>
            </div>

            {/* Mobile Search Bar */}
            {showMobileSearch && (
                <div className="md:hidden px-4 pb-3">
                    <MobileSearchBar />
                </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-zinc-100 dark:bg-neutral-900 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="px-4 py-3">
                        <MobileNavItems />
                    </div>
                    <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-700">
                        <ThemeToggleButton mobile />
                    </div>
                </div>
            )}
        </header>
    );
};


export default React.memo(Header);