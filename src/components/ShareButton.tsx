'use client';

import Image from 'next/image';

import { SHARE_ICON } from '@/constants';

type ShareButtonProps = {
  isOpen: boolean;
  disabled: boolean;
  onClick: () => void;
};

const ShareButton = ({ isOpen, disabled, onClick }: ShareButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      aria-label="Share weather"
      title="Share"
      aria-expanded={isOpen}
    >
      <Image
        src={SHARE_ICON}
        alt="Share"
        width={20}
        height={20}
        data-testid="share-icon"
        className="dark:invert"
      />
    </button>
  );
};

export default ShareButton;
