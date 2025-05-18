import React, { useState } from "react";

// Provided images array
const imageUrls = [
  "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-09/colorinspiration1-min%20%281%29%20%281%29.jpg",
  "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-09/sumesh9499_Design_a_background._Bold_Colors_and_Patterns_Mix_br_3c941d66-6912-4b39-a210-e7171ae62f33.png?format=webp&width=1920&quality=75",
  "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-09/ColourInspirationTwo%20%283%29%20%281%29_0.jpg?format=webp&width=1920&quality=75",
  "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-09/ColourInspirationTen_1.png?format=webp&width=1920&quality=75",
  "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-09/ColourInspirationSeven_1.png?format=webp&width=1920&quality=75",
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
    <section className="w-full min-h-[80vh] bg-[#f8f9f8] py-6 px-2 md:px-8 max-w-[80%] m-auto">
      <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between gap-8 items-stretch">
        {/* Left: Header, Main Image, Thumbnails */}
        <div className="w-full lg:w-[65%] flex flex-col">
          <div className="flex flex-row justify-between items-start mb-4 md:mb-6">
            <div>
              <h2 className="text-4xl font-light md:mb-1">Colour Inspiration</h2>
              <p className="text-gray-500 text-lg leading-6">Inspire creativity with these captivating visuals.</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-md p-1 flex-1 relative overflow-hidden">
            <img
              key={mainIdx}
              src={imageUrls[mainIdx]}
              alt="Colour Inspiration Large"
              className="w-full max-h-[500px] h-[36vw] object-cover rounded-3xl transition-all duration-300"
              draggable={false}
            />
            {/* Overlay for markers (purely decorative circles as in image, can be expanded if functional) */}
            <span className="absolute left-24 bottom-10 w-8 h-8 bg-white/70 border-[3px] border-white rounded-full flex items-center justify-center">
              <span className="w-4 h-4 border-2 border-white rounded-full"></span>
            </span>
            <span className="absolute left-[70%] top-[60%] w-8 h-8 bg-white/70 border-[3px] border-white rounded-full flex items-center justify-center">
              <span className="w-4 h-4 border-2 border-white rounded-full"></span>
            </span>
            <span className="absolute left-[48%] bottom-16 w-8 h-8 bg-white/70 border-[3px] border-white rounded-full flex items-center justify-center">
              <span className="w-4 h-4 border-2 border-white rounded-full"></span>
            </span>
            {/* Thumbnails */}
            <div className="absolute left-0 bottom-0 w-full flex gap-2 p-4 bg-black/10 rounded-b-3xl backdrop-blur-xl">
              {imageUrls.map((img, i) => (
                <button
                  key={img}
                  className={`rounded-lg overflow-hidden border-2 transition-shadow ${mainIdx===i ? "border-white shadow-lg" : "border-transparent"}`}
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

        {/* Right: Palette explore */}
        <div className="w-full lg:w-[35%] flex flex-col gap-2">
          <div className="flex flex-row justify-between items-start mb-4 md:mb-6">
            <div>
              <h2 className="text-4xl font-light md:mb-1">Explore Palettes</h2>
              <p className="text-gray-500 text-lg leading-6">
                Endless colours, limitless creativity!
              </p>
            </div>
          </div>
          <div className="bg-[#87A2A3] rounded-2xl py-8 px-8 shadow-inner">
            {paletteGroups.map((group) => (
              <div key={group.title} className="mb-7 last:mb-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white text-lg">{group.title}</span>
                  <button className="border border-white rounded bg-transparent px-3 py-1 text-white text-sm hover:bg-white/10 transition">Explore All</button>
                </div>
                <div className="flex flex-wrap gap-4">
                  {group.palettes.map((set) => (
                    <div key={set.name} className="flex flex-col items-start">
                      <div className="flex flex-row gap-0.5 mb-1">
                        {set.colors.map((col, i) => (
                          <span
                            key={i}
                            className="rounded-sm"
                            style={{ background: col, width: 36, height: 18 }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-white/90">{set.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColourInspirationSection;