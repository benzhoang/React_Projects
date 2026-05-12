import { Provider } from "react-redux";
import EmployeeTable from "./components/EmployeeTable";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <EmployeeTable />
    </Provider>
  );
};

export default App;
