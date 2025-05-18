import BlogSection from "./components/BlogSection";
import ColourInspirationSection from "./components/ColourInspirationSection";
import Footer from "./components/Footer";
import GetInTouchForm from "./components/GetInTouchForm";
import ProductHighlightsSection from "./components/ProductHighlightsSection";
import Products from "./components/Products";
import QuickHelpSection from "./components/QuickHelpSection";
import RoomInspirationSection from "./components/RoomInspirationSection";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8]">
      {/* Header */}
      <header className="w-full shadow bg-white sticky top-0 z-30 m-auto">
        <div className="max-w-full mx-auto flex items-center h-20 px-4 justify-center">
          {/* Logo */}
          {/* <img
            src="https://ext.same-assets.com/305100765/1513652078.svg"
            alt="Creative Paint Logo"
            className="h-12 w-auto mr-8"
          /> */}
          {/* Navigation */}
          <nav className="flex gap-6 text-[#273261] font-medium text-sm">
            <a href="#" className="hover:text-[#ab4b62]">Paints for Home</a>
            <a href="#" className="hover:text-[#ab4b62]">Waterproofing</a>
            <a href="#" className="hover:text-[#ab4b62]">Find your Colour</a>
            <a href="#" className="hover:text-[#ab4b62]">Inspiration</a>
            <a href="#" className="hover:text-[#ab4b62]">Projects</a>
            <a href="#" className="hover:text-[#ab4b62]">Contact Us</a>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-full mx-auto">
        <ProductHighlightsSection />
        <div className="max-w-[1700px] m-auto">
        <QuickHelpSection />
        <Products/>
        <RoomInspirationSection />
        <ColourInspirationSection/>
        <WhyChoose />
        <BlogSection />
        <GetInTouchForm />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
