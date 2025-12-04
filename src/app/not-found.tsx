import Link from 'next/link';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center p-8">
    <div className="max-w-md mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Sorry, couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Go Home
        </Link>
        <Link
          href="/search"
          className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Search Weather
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
