'use client';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8 max-w-md mx-auto text-center space-y-6">
    <div className="text-6xl">⚠️</div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Something went wrong!</h2>
    <p className="text-gray-600 dark:text-gray-400">
      {error?.message || 'An unexpected error occurred'}
    </p>
    <button
      onClick={reset}
      className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
    >
      Try again
    </button>
  </div>
);

export default Error;
