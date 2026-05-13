import { createSlice } from "@reduxjs/toolkit";

const demoEmployees = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    position: "Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    position: "Designer",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "555-123-4567",
    position: "Manager",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "777-888-9999",
    position: "Tester",
  },
];

//Load employees from localStorage or use demo data
const loadEmployeesFromStorage = () => {
  try {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : demoEmployees;
  } catch (error) {
    console.error("Error loading employees from localStorage:", error);
  }
};

// Calculate nextId based on existing employees
const calculateNextId = (employees) => {
  if (!employees || employees.length === 0) return 1;
  return Math.max(...employees.map((employee) => employee.id)) + 1;
};

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    items: loadEmployeesFromStorage(),
    searchTerm: "",
    nextId: calculateNextId(loadEmployeesFromStorage()),
  },
  reducers: {
    //Add a new employee
    addEmployee: (state, action) => {
      const nextEmployee = { id: state.nextId, ...action.payload };
      state.items.push(nextEmployee);
      localStorage.setItem("employees", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },

    //Update an employee
    updateEmployee: (state, action) => {
      const { id, data } = action.payload;
      const index = state.items.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...data };
        localStorage.setItem("employees", JSON.stringify(state.items));
      }
    },

    //Delete an employee
    deleteEmployee: (state, action) => {
      state.items = state.items.filter(
        (employee) => employee.id !== action.payload,
      );
      localStorage.setItem("employees", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },

    // Search for an employee
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    resetAll: (state) => {
      state.items = demoEmployees;
      state.nextId = calculateNextId(demoEmployees);
      localStorage.setItem("employees", JSON.stringify(demoEmployees));
    },
  },
});

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setSearchTerm,
  resetAll,
} = employeesSlice.actions;

// Selectors
export const selectAllEmployees = (state) => state.employees.items;
export const selectSearchTerm = (state) => state.employees.searchTerm;

export const selectFilteredEmployees = (state) => {
  const term = state.employees.searchTerm.toLowerCase();
  return state.employees.items.filter(
    (employee) =>
      employee.name.toLowerCase().includes(term) ||
      employee.email.toLowerCase().includes(term) ||
      employee.position.toLowerCase().includes(term),
  );
};

export default employeesSlice.reducer;
