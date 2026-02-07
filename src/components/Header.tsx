'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { SEARCH_ICON, SETTINGS_ICON } from '@/constants';

import SettingsPanel from '@/components/SettingsPanel';
import SharePopover from '@/components/SharePopover';

const Header = () => {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            WeatherNow
          </Link>

          <div className="flex items-center gap-2">
            {/* Search Icon */}
            <Link
              href="/search"
              className={`p-2 rounded-lg transition-colors ${
                pathname === '/search'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
              title="Search Weather"
            >
              <Image
                className="dark:invert"
                width={24}
                height={24}
                data-testid="search-btn"
                aria-label="Search Weather"
                alt="Search Weather"
                src={SEARCH_ICON}
              />
            </Link>

            {/* Share */}
            <Suspense fallback={<div className="w-10 h-10" />}>
              <SharePopover />
            </Suspense>

            {/* Settings Button */}
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
              aria-label="Open settings"
              title="Settings"
            >
              <Image
                className="dark:invert"
                width={24}
                height={24}
                data-testid="settings-btn"
                aria-label="Open settings"
                alt="Open settings"
                src={SETTINGS_ICON}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Settings Panel */}
      {isSettingsOpen && <SettingsPanel onClose={() => setIsSettingsOpen(false)} />}
    </>
  );
};

export default Header;
