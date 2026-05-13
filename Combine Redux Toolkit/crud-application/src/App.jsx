import { Provider } from "react-redux";
import EmployeeTable from "./components/EmployeeTable";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <EmployeeTable />
    </Provider>
  );
};

export default App;
