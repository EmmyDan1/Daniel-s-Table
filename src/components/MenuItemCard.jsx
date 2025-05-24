import { useCart } from "../context/CartContext";

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <span className="text-amber-600 font-bold">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0">
          <button
            onClick={() => addToCart(item)}
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Add to Cart
          </button>
        </div>
        <button
          onClick={() => addToCart(item)}
          className="md:hidden w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-full transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
