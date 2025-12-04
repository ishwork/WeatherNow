import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import StoreProvider from '@/components/StoreProvider';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Weather App',
  description: 'Search for weather information by city name',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors flex flex-col min-h-screen">
        <StoreProvider>
          <ThemeProvider>
            <Header />
            <main className="pt-16 flex-grow">{children}</main>
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
