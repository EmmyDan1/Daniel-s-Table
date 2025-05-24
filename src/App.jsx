import "./App.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import CartSidebar from "./components/CartSideBar";
import HeroSection from "./sections/HeroSection";
import MenuSection from "./sections/MenuSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <CartProvider>
      <div className="font-sans text-gray-800 ">
        <div className="w-full mx-auto px-4">
          <Header />
          <CartSidebar />
          <main>
            <HeroSection />
            <MenuSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
