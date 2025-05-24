import MenuItemCard from "./MenuItemCard";
const MenuCategory = ({ category, items }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 capitalize">
        {category}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
