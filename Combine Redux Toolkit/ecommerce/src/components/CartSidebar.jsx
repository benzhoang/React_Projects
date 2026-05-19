import { ShoppingBag, X } from "lucide-react";

const CartSidebar = () => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300`}
      >
        {/* Sidebar */}
        <div
          className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6" />
              <span>Shopping Cart</span>
            </h2>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-2">Your Cart is empty</p>
              <p className="text-gray-400 text-sm">
                Add some products to get started
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50"></div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
