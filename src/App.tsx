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
import Header from "./components/Header";
import InteractiveCard from "./components/InteractiveCard";
function App() {

  const handleOrderPopup = () => {
    // setOrderPopup(!orderPopup);
  };
  const [scrolledDown, setScrolledDown] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] ">
      {/* Header */}
      <Header/>
      <main className="pt-[80px] sm:pt-[80px] md:pt-[120px] lg:pt-[130px]">
        <Hero handleOrderPopup={handleOrderPopup} />
        <InteractiveCard/>
      </main>
      <div className={`max-w-7xl h-full mx-auto lg:p-32 sm:p-0 md:p-0 bg-[url(${bgimg})`}>
        <ColorHighlight code="Since 2021" title="CREATION PAINTS" />
      </div>
      <PaintShades />
      <h1 className="text-4xl font-serif font-medium tracking-wide text-center mt-20">PRODUCTS</h1>
      <PaintProductCards />
      <Parallex />
      {/* <PaintDetailSection id="#MetallicEmulsion" PaintTitle="MetallicEmulsion" PaintDetail="MetallicEmulsion" paintImg="../public/assests/logo.png" /> */}
      {/* <PaintDetailSection id="#LuxurySilkEmulsion" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png" /> */}
      {/* <PaintDetailSection id="#InteriorExteriorEmulsion" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png" /> */}
      {/* <PaintDetailSection id="#InteriorExteriorPrimer" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png" /> */}
      {/* <PaintDetailSection id="#WallFurniturePutty" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png" /> */}
      {/* <PaintDetailSection id="#AcrylicSyntheticDistemper" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png" /> */}
      {/* <PaintDetailSection id="#HiPowerPigmentPaster" PaintTitle="PaintDetailPaintDetailPaintDetail" PaintDetail="PaintDsdfsdfsadadsasddddddddvgsgdjhhkhkjgyfailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetailPaintDetail" paintImg="../public/assests/logo.png" /> */}

      <main className="flex-1 w-full max-w-full mx-auto">
        <ProductHighlightsSection />
        <div className="max-w-[1700px] m-auto">
          <QuickHelpSection />
          <Products />
          <RoomInspirationSection />
          <ColourInspirationSection />
          <WhyChoose />
          <BlogSection />
          <GetInTouchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
