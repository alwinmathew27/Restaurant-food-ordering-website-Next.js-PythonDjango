const Shimmer = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <div className="h-10 w-72 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap mb-8">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-10 w-28 bg-gray-200 rounded animate-pulse"
          ></div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <div className="h-40 bg-gray-200 rounded animate-pulse"></div>

            <div className="h-5 w-16 bg-gray-200 rounded mt-4 animate-pulse"></div>

            <div className="h-6 w-40 bg-gray-200 rounded mt-3 animate-pulse"></div>

            <div className="h-4 w-full bg-gray-200 rounded mt-3 animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mt-2 animate-pulse"></div>

            <div className="h-4 w-24 bg-gray-200 rounded mt-3 animate-pulse"></div>

            <div className="flex justify-between items-center mt-5">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
