import { X } from "lucide-react";

const EmployeeModal = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Register New Employee
          </h2>
          <button className="text-gray-400 hover:text-gray-600 transition-all">
            <X size={24} />
          </button>
        </div>
        {/* Form Fields */}
        <div className="p-6 space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Position */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Position *
            </label>
            <input
              type="text"
              placeholder="Enter position"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3 p-3 border-t border-gray-200">
          <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium">
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 border bg-blue-600 text-white border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all font-medium">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
