'use client';

import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import { MOON_ICON, SUN_ICON, CLOSE_ICON, TICK_ICON } from '@/constants';
import { toggleTheme } from '@/store/slices/themeSlice';
import type { RootState } from '@/store';

type SettingsPanelProps = {
  onClose: () => void;
};

const SettingsPanel = ({ onClose }: SettingsPanelProps) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />

      {/* Panel */}
      <div className="fixed top-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Settings</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Image
              className="dark:invert"
              width={24}
              height={24}
              data-testid="close-settings-btn"
              aria-label="Close settings"
              alt="Close settings"
              src={CLOSE_ICON}
            />
          </button>
        </div>

        <div className="space-y-4">
          {/* Theme Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Theme
            </label>
            <div className="space-y-2">
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                  theme === 'light'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    width={24}
                    height={24}
                    data-testid="light-mode-icon"
                    aria-label="Light mode icon"
                    alt="Light Mode"
                    src={SUN_ICON}
                  />
                  <span className="text-gray-900 dark:text-white font-medium">Light Mode</span>
                </div>
                {theme === 'light' && (
                  <Image
                    width={24}
                    height={24}
                    data-testid="tick-icon-light"
                    aria-label="Selected"
                    alt="Selected"
                    src={TICK_ICON}
                  />
                )}
              </button>

              <button
                onClick={() => dispatch(toggleTheme())}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                  theme === 'dark'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    className="dark:invert"
                    width={24}
                    height={24}
                    data-testid="dark-mode-icon"
                    aria-label="Dark mode icon"
                    alt="Dark Mode"
                    src={MOON_ICON}
                  />
                  <span className="text-gray-900 dark:text-white font-medium">Dark Mode</span>
                </div>
                {theme === 'dark' && (
                  <Image
                    width={24}
                    height={24}
                    data-testid="tick-icon-dark"
                    aria-label="Selected"
                    alt="Selected"
                    src={TICK_ICON}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Theme preference is managed by Redux and shared across all components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;
