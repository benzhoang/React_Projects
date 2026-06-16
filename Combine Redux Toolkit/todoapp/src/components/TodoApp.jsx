const TodoApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo Flow</h1>
          <p>Organize your life, one task at a time</p>
        </div>

        {/* Stats Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-300 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Progress Overview
            </h2>
            <div className="text-2xl font-bold text-green-600">
              {/* Stats Completed Logics */}
            </div>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-3 mb-4">
            {/* Progress Bar */}
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full 
            transition-all duration-500 ease-out"
            ></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {/* Stats Total Logic */}
              </div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {/* Stats Active Logic */}
              </div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {/* Stats Completed Logic */}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </div>

        {/* Main Todo Container */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default TodoApp;
