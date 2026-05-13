import { Edit2, Plus, Search, Trash2 } from "lucide-react";
import EmployeeModal from "./EmployeeModal";
import {
  deleteEmployee,
  setSearchTerm,
  selectAllEmployees,
  selectSearchTerm,
  selectFilteredEmployees,
} from "../store/employeesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const filteredEmployees = useSelector(selectFilteredEmployees);
  const allEmployees = useSelector(selectAllEmployees);
  const searchTerm = useSelector(selectSearchTerm);

  const storedEmployees = [...filteredEmployees].sort((a, b) => b.id - a.id);

  const [showModal, setShowModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const openCreateModal = () => {
    setShowModal(true);
    setCurrentEmployee(null);
  };

  const openEditModal = (employee) => {
    setShowModal(true);
    setCurrentEmployee(employee);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentEmployee(null);
  };

  const handleDelete = (employee) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <span>Are you sure you want to delete {employee.name}?</span>
          <div className="flex justify-end gap-2">
            <button
              className="bg-gray-300 text-white px-3 py-1 rounded hover:bg-gray-400 text-sm"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
              onClick={() => {
                dispatch(deleteEmployee(employee.id));
                toast.dismiss(t.id);
                toast.success(`Employee deleted successfully!`);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity },
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Employee Management
          </h1>
          <p className="text-gray-600">
            {" "}
            Manage employee with Redux Toolkit (RTK)
          </p>
        </div>
        {/* Search and Add Button */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                placeholder="Search by name, email or position"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
              onClick={openCreateModal}
            >
              <Plus size={20} />
              Add New Employee
            </button>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Position
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {/* Conditional Rendering */}
                {storedEmployees.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No Employee Found
                    </td>
                  </tr>
                ) : (
                  storedEmployees.map((employee) => {
                    return (
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {employee.id}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {employee.name}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {employee.email}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {employee.phone}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {employee.position}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium"
                              onClick={() => openEditModal(employee)}
                            >
                              <Edit2 size={16} />
                              Edit
                            </button>
                            <button
                              className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 transition-all text-sm font-medium"
                              onClick={() => handleDelete(employee)}
                            >
                              <Trash2 size={16} />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {storedEmployees.length} of {allEmployees.length} Records
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
      <EmployeeModal
        isOpen={showModal}
        onClose={closeModal}
        currentEmployee={currentEmployee}
      />
    </div>
  );
};

export default EmployeeTable;
