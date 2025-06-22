import { useNavigate } from "react-router-dom";
import NaturalGreen from "../../public/assests/allimg/NaturalGreen.jpeg";
import skyblueIndoor from "../../public/assests/allimg/skyblueIndoor.jpeg";
import yelloIndor from "../../public/assests/allimg/yelloIndor.jpeg";
import imgOutdoor from "../../public/assests/outdoor.jpeg";
import imgIndoor from "../../public/assests/WhiteGreenRoom.jpeg";
import AboutCompany from "./AboutCompany";
import Banner from "./Banner/Banner";
import ProductHighlight from "./Banner/ProductHighlight";
import Footer from "./Footer";
import GetInTouchForm from "./GetInTouchForm";
import Header from "./Header/Header";
import ImageCard from "./ImageCard";
import PaintProductCards from "./PaintProductCard";
import PaintShades from './PaintShades';
// import Hero from './StickSlider';

const imageData = [
  {
    title: "the style",
    src: NaturalGreen,
  },
  {
    title: "the water",
    src: skyblueIndoor
  },
  {
    title: "the water",
    src: yelloIndor
  },
]; 
const HomeScreen = () => {
  const navigate = useNavigate();
  return (
  <>
  <div className="bg-white">
    <Header/>
    <Banner/>
  </div>
  <ProductHighlight/>
  <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2 font-Georgia gap-8 bg-white p-12">
    <ImageCard  imageSrc={imgIndoor} altText={"Indoors"} title={"Indoors"} description="Get inspiration to find the colours and combinations that reflect and embrace who you are - your own personal identity." buttonText="Explore Now" onClick={()=>{navigate('/indoor')}}/>
    <ImageCard  imageSrc={imgOutdoor}altText={"Outdoors"}title={"Outdoors"}description="Get inspiration and advice on how to find the best colours and long-lasting paint products for your house."buttonText="Explore Now"onClick={()=>{navigate('/outdoor')}}/>
  </section>
  <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">Our Premium Products</h2>
      <PaintProductCards/>
      </div>
  </div>
   <h2 className="text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">Gallery</h2>
  {/* <Hero imageData={imageData} /> */}
   
 {/* Color Palette */}
      <section id="colors" className="px-6 md:px-20 py-16  text-[#161e32] bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">Choose Your Color</h2>
        <PaintShades />
      </section>
<AboutCompany/>
 <GetInTouchForm />
<Footer/>

 {/* Brochure and Social Media Icons */}
<div className="fixed -right-[83px] hover:-right-[35px] top-1/3 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50 transition-all delay-700">
  {/* Brochure Button */}
  <a
    href="/CreationPaints.pdf" // Replace with your actual brochure file path
    download
    className="bg-[#111926] text-white px-6 py-6  rounded-tr-sm rounded-tl-sm shadow hover:bg-[#111926]/90 transition -rotate-90 mb-8"
  >
    e-Brochure
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919999999999" // Replace with your number
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 p-1 rounded-full shadow hover:bg-green-600 transition-all duration-300 transform hover:scale-125"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-4 h-4"
    />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-500 p-1 rounded-full shadow hover:bg-pink-600 transition-all duration-300 transform hover:scale-125"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
      alt="Instagram"
      className="w-4 h-4"
    />
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 p-1 rounded-full shadow hover:bg-blue-800 transition-all duration-300 transform hover:scale-125"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      alt="Facebook"
      className="w-4 h-4"
    />
  </a>

  {/* YouTube */}
  <a
  href="https://youtube.com/yourchannel"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 p-1 rounded-full shadow transition-all duration-300 transform hover:scale-125 hover:bg-red-700"
>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
      alt="YouTube"
      className="w-4 h-4"
    />
  </a>
</div>
</>
  )
}

export default HomeScreen