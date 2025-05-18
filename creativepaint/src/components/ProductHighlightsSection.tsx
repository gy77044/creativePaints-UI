import React, { useState } from "react";

const products = [
  {
    name: "Vogue Effectiq",
    tagline: "Designed to delight your space",
    image: "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/Vogue_Effectiq_x.webp",
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Vogue Stain Block",
    tagline: "Superior stain resistance",
    image: "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/Vogue_Effectiq_x.webp",
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Halo LuxGlo",
    tagline: "Rich high-gloss finish",
    image: "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/Vogue_Effectiq_x.webp",
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Aurus Regal",
    tagline: "Luxury for your walls",
    image: "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/Vogue_Effectiq_x.webp",
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Halo Satin",
    tagline: "Elegant satin finish",
    image: "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/Vogue_Effectiq_x.webp",
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Joie Classic",
    tagline: "Timeless matte look",
    image: "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/Vogue_Effectiq_x.webp",
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
];

const featureSvgs = {
  "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
  "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
  "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
  "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
};

export default function ProductHighlightsSection() {
  const [centerIdx, setCenterIdx] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const maxIdx = products.length - 1;

  const scrollLeft = () => setCenterIdx((idx) => (idx > 0 ? idx - 1 : idx));
  const scrollRight = () => setCenterIdx((idx) => (idx < maxIdx ? idx + 1 : idx));

  const getVisibleProducts = () => {
    let start = Math.max(centerIdx - 2, 0);
    let end = Math.min(centerIdx + 2, maxIdx);
    if (centerIdx < 2) end = Math.min(4, maxIdx);
    if (centerIdx > maxIdx - 2) start = Math.max(maxIdx - 4, 0);
    const visible = products.slice(start, end + 1);
    return visible.map((prod, i) => ({ ...prod, pos: i + start - centerIdx }));
  };
  const visible = getVisibleProducts();

  return (
    <section className="relative bg-white products-section pt-6">
      {/* Section header */}
      <div className="max-w-6xl mx-auto prod_wrapper mb-6 lg:mb-12 text-left pt-10">
        <div className="section_subtitle text-primary text-4xl font-semibold mb-1">Paints for Home</div>
        <div className="section_title text-gray-700 text-lg md:text-3xl font-bold leading-tight">
          Our water-based paints suited for your family and the environment!
        </div>
      </div>
      {/* Filter button and overlay */}
      <div className="max-w-6xl mx-auto flex justify-end mb-6">
        <button
          className="btn_style_1 px-6 py-2 font-medium bg-gradient-to-b from-[#4760b8] to-[#273261] text-white rounded-lg shadow hover:from-[#273261] hover:to-[#4760b8] transition border border-transparent"
          onClick={() => setShowFilters(true)}
        >
          Filter Products By <span>+</span>
        </button>
      </div>
      {/* Filter Drawer UI */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-8 rounded-lg w-[90vw] max-w-3xl relative animate-in fade-in zoom-in">
            <div className="titlebar text-xl font-bold mb-3">Filter By</div>
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-[#ab4b62] text-2xl"
              onClick={() => setShowFilters(false)}
            >
              ×
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Application */}
              <div>
                <div className="text-[#273261] font-semibold mb-2">Application</div>
                {["All", "Interior", "Exterior", "Wood", "Metal"].map((v) => (
                  <label className="flex gap-2 items-center cursor-pointer mb-2" key={v}>
                    <input type="radio" name="application" defaultChecked={v === "All"} /> <span>{v}</span>
                  </label>
                ))}
              </div>
              {/* Price */}
              <div>
                <div className="text-[#273261] font-semibold mb-2">Price</div>
                {["All", "Premium", "Luxury", "Economy"].map((v) => (
                  <label className="flex gap-2 items-center cursor-pointer mb-2" key={v}>
                    <input type="radio" name="price" defaultChecked={v === "All"} /> <span>{v}</span>
                  </label>
                ))}
              </div>
              {/* Sheen */}
              <div>
                <div className="text-[#273261] font-semibold mb-2">Sheen</div>
                {["All", "Gloss", "Satin", "Shine", "Silk", "Matte"].map((v) => (
                  <label className="flex gap-2 items-center cursor-pointer mb-2" key={v}>
                    <input type="radio" name="sheen" defaultChecked={v === "All"} /> <span>{v}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end items-center mt-6 gap-4">
              <button
                className="btn_style_1 px-6 py-2 border rounded-lg text-[#273261] font-semibold bg-white border-[#273261] shadow hover:bg-[#f6f7f8]"
                onClick={() => setShowFilters(false)}
              >
                Cancel
              </button>
              <button
                className="btn_style_1 px-6 py-2 border rounded-lg text-white font-semibold bg-gradient-to-b from-[#4760b8] to-[#273261] shadow hover:from-[#273261] hover:to-[#4760b8] border-[#273261]"
                onClick={() => setShowFilters(false)}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel on SVG background, and central product card overlay */}
      <div className="relative mt-12 w-full h-[60vh] overflow-hidden">
        {/* SVG BG curve */}
        {/* <svg
          width="100%"
          height="20"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute w-full left-0 top-0 select-none pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <path
            d="M1440 120C1440 155 1062.26 320 720 320C377.736 320 0 155 0 120C0 85 377.736 240 720 240C1062.26 240 1440 85 1440 120Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="80" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#391546" />
              <stop offset="1" stopColor="#632C85" />
            </linearGradient>
          </defs>
        </svg> */}
        <svg width="6852" height="1800" viewBox="0 0 7852 2265" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translate(-3926px, 0%)", opacity: 1 }}>
          <path d="M8778.5 307.87C8778.5 1050.69 9117.5 3089.87 3926 3089.87C-2318.5 2696 -971.5 1050.69 -971.5 307.87C-971.5 -434.953 1832.84 399.87 3926 399.87C6019.16 399.87 8778.5 -434.953 8778.5 307.87Z" fill="url(#paint0_linear_2179_201)"></path>
          <defs>
            <linearGradient id="paint0_linear_2179_201" x1="3926" y1="399.871" x2="3926" y2="1217.72" gradientUnits="userSpaceOnUse">
              <stop className="stop1" stop-color="#391546"></stop>
              <stop className="stop2" offset="1" stop-color="#632C85"></stop> </linearGradient>
          </defs>
        </svg>
        {/* Carousel */}
        <div className="absolute top-0 z-10 w-full flex flex-col items-center justify-center h-[190px]">
          <div className="relative flex items-end justify-center gap-3 sm:gap-6 w-full max-w-5xl select-none h-[230px]">
            {/* Left Arrow */}
            {/* <button
              onClick={scrollLeft}
              disabled={centerIdx === 0}
              className="text-white opacity-70 hover:opacity-100 rounded-full text-2xl w-11 h-11 flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-b from-[#4760b8] to-[#273261] shadow-xl border border-white/40"
              aria-label="Scroll Left"
              style={{ pointerEvents: centerIdx === 0 ? "none" : undefined }}
            >
              &#8592;
            </button> */}
            {/* Images (perspective/scale) */}
            <div className="flex items-end justify-center mx-auto w-full">
              {visible.map((prod) => {
                // scaling and opacity per position
                let scale = 1, z = 10 - Math.abs(prod.pos); let style = {};
                if (prod.pos === 0) {
                  scale = 1.2;
                  // style = { filter: "drop-shadow(0 8px 36px #0009)" };
                } else if (Math.abs(prod.pos) === 1) {
                  scale = 1.0;
                  // style = { filter: "drop-shadow(0 4px 20px #0006)" };
                } else {
                  scale = 0.8;
                  style = { opacity: 0.4 };
                }
                return (
                  <div
                    key={prod.name}
                    style={{ transform: `scale(${scale})`, zIndex: z, ...style, transition: "all 0.3s" }}
                    className="mx-2 lg:mx-4 cursor-pointer duration-300"
                    onClick={() => setCenterIdx(centerIdx + prod.pos)}
                    aria-current={prod.pos === 0 ? "true" : undefined}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      // className="object-contain h-24 sm:h-32 md:h-44 lg:h-52 drop-shadow-xl select-none rounded-2xl border border-[#ede9f7] bg-white p-2"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
            {/* Right Arrow */}
            {/* <button
              onClick={scrollRight}
              disabled={centerIdx === maxIdx}
              className="text-white opacity-70 hover:opacity-100 rounded-full text-2xl w-11 h-11 flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-b from-[#4760b8] to-[#273261] shadow-xl border border-white/40"
              aria-label="Scroll Right"
              style={{ pointerEvents: centerIdx === maxIdx ? "none" : undefined }}
            >
              &#8594;
            </button> */}
          </div>
        </div>
        {/* Central Product Highlight Card */}
        <div className="prod_content absolute left-1/2 -bottom-12 -translate-x-1/2 -translate-y-1/4 w-full max-w-lg px-4 py-4 flex flex-col items-center text-center bgshape z-20 pointer-events-none">
          <div className="prod_title text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg mb-1">
            {products[centerIdx].name}
          </div>
          <div className="prod_desc text-lg md:text-xl text-gray-100 mb-4 mt-1 drop-shadow">
            {products[centerIdx].tagline}
          </div>
          <div className="prod_features flex flex-wrap justify-center gap-6 mb-6">
            {products[centerIdx].features.map((f) => (
              <div key={f.label} className="prod_feature flex flex-col items-center">
                <img
                  src={featureSvgs[f.icon] || featureSvgs[Object.keys(featureSvgs)[0]]}
                  alt={f.label}
                  className="h-12 w-12 object-contain mb-1"
                />
                <span className="text-white text-xs font-semibold drop-shadow opacity-90 mt-1">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href={products[centerIdx].link}
            className="btn_style_1 gtm_home_astoniq px-6 py-2 bg-white/90 text-[#632C85] rounded-lg font-bold shadow-lg hover:bg-[#632C85] hover:text-white border-2 border-transparent hover:border-white transition pointer-events-auto"
          >
            Discover
          </a>
        </div>
      </div>
    </section>
  );
}
