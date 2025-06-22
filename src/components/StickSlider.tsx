import React from "react";
<<<<<<< HEAD:src/components/StickSlider.tsx
import Image1 from "../../public/assests/acrylicbalti.png";
import Image2 from "../../public/assests/blackbalti.png";
import Image3 from "../../public/assests/acrylicbalti.png";
import Image4 from "../../public/assests/pinkbalti.png";
import Image5 from "../../public/assests/pinkbalti.png";
import Image6 from "../../public/assests/tank.png";
import SliderBase from "react-slick";


export type ImageDataItem = {
  title: string;
  src: string;
};

type HeroProps = {
  imageData: ImageDataItem[];
};

const Hero: React.FC<HeroProps> = ({ imageData }) => {

  const settings = {
    dots: true,
=======
import Image1 from "../../public/assests/blackbalti.png";
import Image2 from "../../public/assests/blackbalti.png";
import Image3 from "../../public/assests/blackbalti.png";
import bgImage3 from "../../public/assests/allimg/painting-red-wall.jpg";
import SliderBase from "react-slick";

// ✅ Safe cast to React component
const Slider = SliderBase as unknown as React.ComponentType<any>;

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "His Life will forever be Changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

interface HeroProps {
  handleOrderPopup: () => void;
}

const Hero: React.FC<HeroProps> = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/StickSlider.tsx
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
<<<<<<< HEAD:src/components/StickSlider.tsx
    autoplaySpeed: 5000,
=======
    autoplaySpeed: 4000,
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/StickSlider.tsx
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
<<<<<<< HEAD:src/components/StickSlider.tsx
    <div className="w-[90dvw] h-[80dvh] mx-auto border-4 border-white bg-white transition-all duration-700 ease-in-out hover:shadow-[6px_6px_10px_5px_gray] overflow-hidden flex">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="group relative h-full flex-shrink-0 transition-all duration-500 ease-in-out hover:w-[50%] w-[33.4%] border-l-2 border-white overflow-hidden"
        >
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 w-full bg-[rgba(89,89,89,0.4)] transition-all duration-500 ease-in">
            <a
              href="#"
              className="block text-white capitalize no-underline text-[110%] p-5"
            >
              {item.title}
            </a>
          </div>
        </div>
      ))}
=======
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 bg-[#111926]">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-[-8]"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Paint Your World
                  </button>
                </div>

                {/* image */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-[1.2] object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/StickSlider.tsx
    </div>
  );
};

export default Hero;
