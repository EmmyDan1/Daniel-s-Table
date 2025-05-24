import MenuItemCard from "./MenuItemCard";
const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
        <p className="text-gray-600">No items found matching your search</p>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
        Search Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default SearchResults;