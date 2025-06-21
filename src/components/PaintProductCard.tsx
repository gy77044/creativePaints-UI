import React, { useRef } from 'react';
import blackbalti from '../../public/assests/blackbalti.png';
import orangebalti from '../../public/assests/orangebalti.png';
import pinkbalti from '../../public/assests/pinkbalti.png';
import smallbalti from '../../public/assests/smallbalti.png';
import tank from '../../public/assests/tank.png';
import greenbalti from '../../public/assests/greenbalti.png';
import acrylicbalti from '../../public/assests/acrylicbalti.png';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: 'Platinum Luxury Emulsion',
    subtitle: 'High Gloss Finish for a Premium Look',
    features: [
      'Ultra-smooth luxury finish',
      'Long-lasting and durable formula',
      'Ideal for interior walls',
      'Easy-to-clean surface',
    ],
    image: smallbalti,
  },
  {
    title: 'Platinum Luxury Emulsion',
    subtitle: 'High Gloss Finish for a Premium Look',
    features: [
      'Ultra-smooth luxury finish',
      'Long-lasting and durable formula',
      'Ideal for interior walls',
      'Easy-to-clean surface',
    ],
    image: blackbalti,
  },
  {
    title: 'Acrylic Distemper',
    subtitle: 'Economical Matt Finish for Interior Walls',
    features: [
      'Smooth matt finish for interior walls',
      'Available in a variety of shades',
      'Best suited for dry interiors',
      'Improved indoor air quality',
    ],
    image: orangebalti,
  },
  {
    title: 'Fenomastic My Home Smooth Silk',
    subtitle: 'For beautiful homes',
    features: [
      'Smooth silky finish',
      'Good Washability',
      'Gives a good colour experience',
      'Accurate Colours',
    ],
    image: acrylicbalti,
  },
  {
    title: 'Fenomastic My Home Rich Matt',
    subtitle: 'For beautiful homes you love.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: greenbalti,
  },
  {
    title: 'Fenomastic My Home Rich Matt',
    subtitle: 'For beautiful homes you love.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: pinkbalti,
  },
  {
    title: 'Fenomastic My Home Rich Matt',
    subtitle: 'For beautiful homes you love.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: tank,
  },
];

const ProductCard: React.FC<{
  title: string;
  subtitle: string;
  features: string[];
  image: string;
}> = ({ title, subtitle, features, image }) => {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate("/product")
  }
  return(
    <div onClick={handleNavigate} className="min-w-[280px] sm:min-w-[300px] max-w-[300px] flex-shrink-0 bg-white hover:shadow-xl transition-all shadow-md px-6 py-10 flex flex-col h-full text-center">
    <img src={image} alt={title} className="h-60 object-contain mb-4 mx-auto hover:scale-110 transition-all delay-200" />
    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
      {title}
    </h3>
    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{subtitle}</p>
  </div>
  )
};

const PaintProductCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Buttons */}
          {/* <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 shadow-md p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            ◀
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 shadow-md p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            ▶
          </button> */}

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth"
          >
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintProductCards;
