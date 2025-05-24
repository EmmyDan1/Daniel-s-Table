const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className=" mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Our Restaurant"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-amber-600 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Founded in 2008, Daniel's Table began as a small bistro with a
              passion for creating exceptional dining experiences. Our journey
              has been guided by a commitment to quality, innovation, and the
              celebration of culinary artistry.
            </p>
            <p className="text-gray-600 mb-8">
              Today, we continue to honor our roots while embracing modern
              techniques and global influences. Each dish tells a story, crafted
              with locally-sourced ingredients and served with genuine
              hospitality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-utensils text-amber-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Seasonal Menus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fresh ingredients curated for each season
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-award text-amber-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Award Winning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Recognized for culinary excellence
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-leaf text-amber-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Sustainable
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ethically sourced and environmentally conscious
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-wine-glass-alt text-amber-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Sommelier Selection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expertly paired wines for every dish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;