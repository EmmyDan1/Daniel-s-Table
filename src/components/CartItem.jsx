import { useCart } from "../context/CartContext";
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 overflow-hidden rounded-md mr-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <i className="fas fa-minus text-xs"></i>
        </button>
        <span className="mx-2 w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <i className="fas fa-plus text-xs"></i>
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-gray-500 hover:text-red-500"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default CartItem;
