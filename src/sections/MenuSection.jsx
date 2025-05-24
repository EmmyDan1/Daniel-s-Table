import React, { useState } from "react";
import menuData from "../data/MenuData"; 
import MenuCategory from "../components/MenuCategory";
import SearchResults from "../components/SearchResults"; 
const allMenuItems = Object.values(menuData).flat();


const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("main");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = allMenuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <section id="menu" className=" py-20 bg-gray-50">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of culinary delights,
            prepared with the finest ingredients and expert techniques.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu items..."
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-amber-600">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {isSearching ? (
          <SearchResults results={searchResults} />
        ) : (
          <>
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium ${
                    activeCategory === category
                      ? "bg-amber-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <MenuCategory
              category={activeCategory}
              items={menuData[activeCategory]}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default MenuSection;