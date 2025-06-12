import React from "react";
import Image1 from "../../public/assests/blackbalti.png";
import Image2 from "../../public/assests/blackbalti.png";
import Image3 from "../../public/assests/blackbalti.png";
import SliderBase from "react-slick";

// Cast safely to React component
const Slider = SliderBase as unknown as React.ComponentType<any>;

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% Off On All Paint Ranges",
    description: "Give your walls a new life. Smooth, vibrant, long-lasting finishes.",
  },
  {
    id: 2,
    img: Image2,
    title: "Introducing Luxury Silk Emulsion",
    description: "Experience the elegance of premium texture and a silky finish.",
  },
  {
    id: 3,
    img: Image3,
    title: "Save More with Power Pigment Paster",
    description: "High pigment strength for better coverage and durability.",
  },
];

interface HeroProps {
  handleOrderPopup: () => void;
}

const Hero: React.FC<HeroProps> = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center justify-center bg-[#111926] text-white">
      {/* abstract background shape */}
      <div className="absolute top-[-25%] right-[-15%] w-[700px] h-[700px] bg-primary/30 rounded-full z-0 blur-3xl rotate-45" />

      {/* content container */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
                {/* text block */}
                <div className="text-center sm:text-left space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-300">
                    {data.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:scale-105 transition-transform duration-200 text-white font-medium py-2 px-6 rounded-full shadow-lg"
                  >
                    Paint Your World
                  </button>
                </div>

                {/* image block */}
                <div className="flex justify-center sm:justify-end">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] object-contain scale-110 drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
