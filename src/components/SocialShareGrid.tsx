'use client';

import { memo } from 'react';
import Image from 'next/image';

import { FACEBOOK_ICON, INSTAGRAM_ICON, TIKTOK_ICON, WHATSAPP_ICON } from '@/constants';

type SocialShareGridProps = {
  shareUrl: string;
  shareText: string;
  onShare: (url: string) => void;
};

const SocialShareGrid = ({ shareUrl, shareText, onShare }: SocialShareGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <button
        onClick={() =>
          onShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
        }
        className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Share on Facebook"
        title="Facebook"
      >
        <Image src={FACEBOOK_ICON} alt="Facebook" width={20} height={20} />
      </button>
      <button
        onClick={() =>
          onShare(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`)
        }
        className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Share on WhatsApp"
        title="WhatsApp"
      >
        <Image src={WHATSAPP_ICON} alt="WhatsApp" width={20} height={20} />
      </button>
      <button
        onClick={() => onShare('https://www.instagram.com/')}
        className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Share on Instagram"
        title="Instagram"
      >
        <Image src={INSTAGRAM_ICON} alt="Instagram" width={20} height={20} />
      </button>
      <button
        onClick={() => onShare('https://www.tiktok.com/')}
        className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Share on TikTok"
        title="TikTok"
      >
        <Image src={TIKTOK_ICON} alt="TikTok" width={20} height={20} className="dark:invert" />
      </button>
    </div>
  );
};

export default memo(SocialShareGrid);
