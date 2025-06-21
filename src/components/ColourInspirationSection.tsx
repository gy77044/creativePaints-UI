import React, { useState } from "react";
import assortment from "../../public/assests/allimg/assortment.jpg";
import watercolor from "../../public/assests/allimg/bg-watercolor.jpg";
import mencreation from "../../public/assests/allimg/manwithcreation.png";
import redwall from "../../public/assests/allimg/painting-red-wall.jpg";
import rollon from "../../public/assests/allimg/rollon.jpg";
import roughpaint from "../../public/assests/allimg/roughpaint.jpg";
import bgtheme from "../../public/assests/bg-theme.png";
import blueBrush from "../../public/assests/blue_brush.png";
import whiteImg from "../../public/assests/whiteimag.png";
// Provided images array
const imageUrls = [
  mencreation,roughpaint,blueBrush,whiteImg,bgtheme,rollon,redwall,watercolor,assortment
];

// Color palettes from screenshot
const paletteGroups = [
  {
    title: "Zodiac",
    palettes: [
      {
        name: "Scorpio",
        colors: ["#BCCFC8", "#C6D9DE", "#516661"],
      },
      {
        name: "Aquarius",
        colors: ["#7BCACE", "#DEE1E7", "#CCA9C0"],
      },
      {
        name: "Leo",
        colors: ["#E8873C", "#BC496A", "#A3495A"],
      },
    ],
  },
  {
    title: "Gems",
    palettes: [
      {
        name: "Amethyst",
        colors: ["#43486C", "#9B6499", "#837F99"],
      },
      {
        name: "Citrine",
        colors: ["#C19029", "#E2A94B", "#F3E0A1"],
      },
      {
        name: "Sapphire",
        colors: ["#184887", "#44A9E0", "#B2CCDF"],
      },
    ],
  },
  {
    title: "Nature Inspired",
    palettes: [
      {
        name: "Forest",
        colors: ["#9DB7B5", "#B3957B", "#734D41"],
      },
      {
        name: "Beach",
        colors: ["#F1EEE5", "#BFC9DF", "#A6C7E5"],
      },
      {
        name: "Mountain",
        colors: ["#C2A050", "#6F9179", "#A36B53"],
      },
    ],
  },
  {
    title: "Nature Inspired",
    palettes: [
      {
        name: "Forest",
        colors: ["#9DB7B5", "#B3957B", "#734D41"],
      },
      {
        name: "Beach",
        colors: ["#F1EEE5", "#BFC9DF", "#A6C7E5"],
      },
      {
        name: "Mountain",
        colors: ["#C2A050", "#6F9179", "#A36B53"],
      },
    ],
  },
  
];

const ColourInspirationSection: React.FC = () => {
  const [mainIdx, setMainIdx] = useState(0);

  return (
    <section className="w-full min-h-full py-6 px-2 md:px-8 max-w-[100%] m-auto">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row justify-between gap-8 items-stretch">
        {/* Left: Header, Main Image, Thumbnails */}
        <div className="w-full lg:w-[100%] flex flex-col">
          {/* <div className="flex flex-row justify-between items-start mb-4 md:mb-6">
            <div>
              <h2 className="text-4xl font-light md:mb-1">Colour Inspiration</h2>
              <p className="text-gray-500 text-lg leading-6">Inspire creativity with these captivating visuals.</p>
            </div>
          </div> */}
          <div className=" bg-white shadow-md p-1 flex-1 relative overflow-hidden">
            <img
              key={mainIdx}
              src={imageUrls[mainIdx]}
              alt="Colour Inspiration Large"
              className="w-full max-h-[500px] h-[36vw] object-cover transition-all duration-300"
              draggable={false}
            />
     
            {/* Thumbnails */}
            <div className="absolute left-0 bottom-0 w-full flex gap-2 p-4 bg-black/10  backdrop-blur-xl">
              {imageUrls.map((img, i) => (
                <button
                  key={img}
                  className={`overflow-hidden border-2 transition-shadow ${mainIdx===i ? "border-white shadow-lg" : "border-transparent"}`}
                  style={{ width: "70px", height: "48px" }}
                  onClick={() => setMainIdx(i)}
                  aria-label={`Show inspiration image ${i+1}`}
                >
                  <img src={img} alt={`Thumb ${i+1}`} className="object-cover w-full h-full" draggable={false}/>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColourInspirationSection;