import { useCart } from '../context/CartContext';
import CartItem from "./CartItem";
const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${
        isCartOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  Your Order
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="mt-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <i className="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6">
                          <CartItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-full transition duration-300">
                  Checkout
                </button>
                <div className="mt-4 flex justify-center text-sm text-gray-500">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-amber-600 hover:text-amber-500 font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartSidebar;