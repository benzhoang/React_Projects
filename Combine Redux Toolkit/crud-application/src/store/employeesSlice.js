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
  return Math.max(...employees.map((e) => e.id)) + 1;
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
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
