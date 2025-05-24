const HeroSection = () => {
  return (
    <section
      id="home"
      className=" hero-section min-h-screen flex items-center justify-center text-white pt-20"
    >
      <div className=" px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Daniel's Table
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          An exquisite dining experience crafted with passion and perfection
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("menu")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            View Menu
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-full transition duration-300">
            Make Reservation
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;