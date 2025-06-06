import React from 'react';
import blackbalti from "../../public/assests/blackbalti.png"
const products = [
  {
    title: 'Fenomastic Wonderwall Lux',
    subtitle: 'Real beauty lasts',
    features: [
      'Smooth Matt finish',
      'Advanced easy clean technology',
      'No Smell',
      'Improved indoor air quality'
    ],
    image: blackbalti,
  },
  {
    title: 'Fenomastic Wonderwall Life',
    subtitle: 'Beauty that’s good for you',
    features: [
      'Luxurious Silky Finish',
      'Superior Washability',
      'No Smell',
      'Improved indoor air quality'
    ],
    image: blackbalti
  },
  {
    title: 'Fenomastic My Home Smooth Silk',
    subtitle: 'For beautiful homes',
    features: [
      'Smooth silky finish',
      'Good Washability',
      'Gives a good colour experience',
      'Accurate Colours'
    ],
    image: blackbalti
  },
  {
    title: 'Fenomastic My Home Rich Matt',
    subtitle: 'For beautiful homes you love.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability'
    ],
    image: blackbalti
  }
];

const ProductCard: React.FC<{
  title: string;
  subtitle: string;
  features: string[];
  image: string;
}> = ({ title, subtitle, features, image }) => (
  <div className="bg-white rounded shadow p-6 flex flex-col items-start text-start">
    <img src={image} alt={title} className="h-64 object-contain mb-4" />
    <div className="text-sm text-gray-500 font-medium mb-2">TOPCOAT</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-3 text-start ">{subtitle}</p>
    <ul className="text-sm text-left text-gray-700 list-disc list-inside space-y-1">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const PaintProductCards: React.FC = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PaintProductCards;
