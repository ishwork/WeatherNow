type ComponentLoadingFallbackProps = {
  message?: string;
};

const ComponentLoadingFallback = ({ message = 'Loading...' }: ComponentLoadingFallbackProps) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center text-gray-600 dark:text-gray-400">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
      <p>{message}</p>
    </div>
  </div>
);

export default ComponentLoadingFallback;
