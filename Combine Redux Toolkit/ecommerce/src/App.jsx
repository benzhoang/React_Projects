import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";

const App = () => {
  return (
    <div>
      <Header />
      <ProductGrid />
      <CartSidebar />
    </div>
  );
};

export default App;
