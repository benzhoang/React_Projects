import { useState } from "react";
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header onToggleCart={toggleCart} />
      <ProductGrid />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
