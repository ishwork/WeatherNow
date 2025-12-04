const Loading = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
  </div>
);

export default Loading;
