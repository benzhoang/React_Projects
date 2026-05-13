import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeesSlice";
import toast from "react-hot-toast";

const emptyValues = {
  name: "",
  email: "",
  phone: "",
  position: "",
};

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

const EmployeeModal = ({ isOpen, onClose, currentEmployee }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: emptyValues });

  useEffect(() => {
    if (!isOpen) return;
    reset(
      currentEmployee
        ? {
            name: currentEmployee.name,
            email: currentEmployee.email,
            phone: currentEmployee.phone,
            position: currentEmployee.position,
          }
        : emptyValues,
    );
  }, [isOpen, currentEmployee, reset]);

  const onSubmit = (data) => {
    if (currentEmployee) {
      dispatch(
        updateEmployee({ id: currentEmployee.id, data: data }),
      );
      toast.success("Employee updated successfully!");
    } else {
      dispatch(addEmployee(data));
      toast.success("Employee added successfully!");
    }
    onClose();
  };

  const onInvalid = (submitErrors) => {
    const err = Object.values(submitErrors)[0];
    toast.error(
      typeof err?.message === "string"
        ? err.message
        : "Name and email are required",
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Register New Employee
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="contents"
        >
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Name *
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className={inputClass}
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", {
                  required: "Name is required",
                  validate: (v) =>
                    (v && v.trim().length > 0) || "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className={inputClass}
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: "Email is required",
                  validate: (v) =>
                    (v && v.trim().length > 0) || "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className={inputClass}
                {...register("phone")}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Position *
              </label>
              <input
                type="text"
                placeholder="Enter position"
                className={inputClass}
                {...register("position")}
              />
            </div>
          </div>

          <div className="flex gap-3 p-3 border-t border-gray-200">
            <button
              type="button"
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 border bg-blue-600 text-white border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all font-medium"
            >
              {currentEmployee ? "Update" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
