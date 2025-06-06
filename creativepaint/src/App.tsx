import BlogSection from "./components/BlogSection";
import ColourInspirationSection from "./components/ColourInspirationSection";
import Footer from "./components/Footer";
import GetInTouchForm from "./components/GetInTouchForm";
import MainScreen from "./components/MainScreen";
import Marquee from "./components/Marqee";
import ProductHighlightsSection from "./components/ProductHighlightsSection";
import Products from "./components/Products";
import QuickHelpSection from "./components/QuickHelpSection";
import RoomInspirationSection from "./components/RoomInspirationSection";
import WhyChoose from "./components/WhyChoose";
import bgcard from "../public/assests/bgimg.jpg"
import logo from "../public/assests/logo.png"
import ImgSlider from "./components/imgSlider/Slider";
import PaintShades from "./components/PaintShades";
import immg from "../public/assests/allimg/artistic-texture-paint-brush-stroke.jpg"
import PaintProductCards from "./components/PaintProductCard";
import MainPage from "./components/ColorHighlight";
import ColorHighlight from "./components/ColorHighlight";
import bgimg from "../public/assests/allimg/artistic-texture-paint-brush-stroke.jpg"
import Parallex from "./components/Parallex";
import Hero from "./components/StickSlider";
import { useEffect, useState } from "react";
import PaintDetailSection from "./components/PaintDetailSection";
function App() {

    const handleOrderPopup = () => {
    // setOrderPopup(!orderPopup);
  };
 const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] ">
      {/* Header */}
      <header
  className={`w-full text-[#202020] z-30 transition-all duration-300 ${
    scrolledDown
      ? "fixed top-0 bg-red-600 shadow-lg rounded"
      : "sticky top-0 bg-transparent"
  }`}
>
  <div className={`w-full box-border ${scrolledDown ? "p-4 md:p-6" : "p-0"} transition-all duration-300`}>
    {/* Top Nav */}
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <nav className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm font-light">
        <span className="w-28 text-center text-[#202020]">Connect with us :</span>
        <a href="https://www.facebook.com/people/Creation-Paints/61575989485753/#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="mailto:creationpaints1106@gmail.com" className="fa fa-google"></a>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-youtube"></a>
        <a href="#" className="fa fa-instagram"></a>
      </nav>
    </div>

    {/* Marquee */}
    <Marquee text="Creation Paints Pvt. Ltd.  Address: New RTO Road, Near Tejaji Chowk, Palda, Indore, MP  Email: creationpaints1106@gmail.com  Contact No: 9753074776" />

    {/* Bottom Nav */}
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center sm:justify-start gap-3 text-sm font-medium text-[#273261] mt-2">
      <a href="#" className="text-yellow-700 font-semibold hover:text-[#ab4b62]">Our Signature Products::</a>
      <a href="#MetallicEmulsion" className="hover:text-[#ab4b62]">Metallic Emulsion</a>
      <a href="#LuxurySilkEmulsion" className="hover:text-[#ab4b62]">Luxury Silk Emulsion</a>
      <a href="#InteriorExteriorEmulsion" className="hover:text-[#ab4b62]">Interior-Exterior Emulsion</a>
      <a href="#InteriorExteriorPrimer" className="hover:text-[#ab4b62]">Interior-Exterior Primer</a>
      <a href="#WallFurniturePutty" className="hover:text-[#ab4b62]">Wall-Furniture Putty</a>
      <a href="#AcrylicSyntheticDistemper" className="hover:text-[#ab4b62]">Acrylic/Synthetic Distemper</a>
      <a href="#HiPowerPigmentPaster" className="hover:text-[#ab4b62]">Hi-Power Pigment Paster</a>
    </div>
  </div>
</header>

      <Hero  handleOrderPopup={handleOrderPopup} />
      <ImgSlider/>
      {/* Main Content */}
      <div className="relative max-w-full mx-auto flex items-center px-4 justify-center border-t-0 shadow-[0_0_10px_5px_#0003] h-full m-5 p-5">
          <img src={bgcard} alt="card" className="bg-no-repeat bg-contain"/>
    
            <span className="absolute left-28 top-28 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
             <span className="w-4 h-4 border-2 border-white rounded-full"></span>
            </span>
            <span className="absolute left-80 top-72 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
  <span className="w-4 h-4 border-2 border-white rounded-full"></span>
</span>
            <span className="absolute left-28 bottom-72 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
  <span className="w-4 h-4 border-2 border-white rounded-full"></span>
</span>
            <span className="absolute left-80 bottom-28 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
  <span className="w-4 h-4 border-2 border-white rounded-full"></span>
</span>
            <span className="absolute right-80 bottom-36 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
  <span className="w-4 h-4 border-2 border-white rounded-full"></span>
</span>
            <span className="absolute right-56 bottom-36 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
  <span className="w-4 h-4 border-2 border-white rounded-full"></span>
</span>
            <span className="absolute right-28 bottom-36 w-8 h-8 bg-white/70 border-[2px] border-white rounded-full flex items-center justify-center animate-pulse-scale">
  <span className="w-4 h-4 border-2 border-white rounded-full"></span>
</span>
            


      </div>
      <div className={`max-w-7xl h-full mx-auto p-32 bg-[url(${bgimg})`}>
      <ColorHighlight code="Since 2021" title="CREATION PAINTS" />
      </div>
      <PaintShades/>
      <h1 className="text-4xl font-serif font-medium tracking-wide text-center mt-20">PRODUCTS</h1>
      <PaintProductCards/>
      <Parallex/>
      <PaintDetailSection id="#MetallicEmulsion" PaintTitle="MetallicEmulsion" PaintDetail="MetallicEmulsion" paintImg="../public/assests/logo.png"/>
      <PaintDetailSection id="#LuxurySilkEmulsion" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png"/>
      <PaintDetailSection id="#InteriorExteriorEmulsion" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png"/>
      <PaintDetailSection id="#InteriorExteriorPrimer" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png"/>
      <PaintDetailSection id="#WallFurniturePutty" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png"/>
      <PaintDetailSection id="#AcrylicSyntheticDistemper" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png"/>
      <PaintDetailSection id="#HiPowerPigmentPaster" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png"/>
      
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
