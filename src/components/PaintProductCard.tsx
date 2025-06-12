import React from 'react';
import blackbalti from '../../public/assests/blackbalti.png';

const products = [
  {
    title: 'Fenomastic Wonderwall Lux',
    subtitle: 'Real beauty lasts',
    features: [
      'Smooth Matt finish',
      'Advanced easy clean technology',
      'No Smell',
      'Improved indoor air quality',
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
      'Improved indoor air quality',
    ],
    image: blackbalti,
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
    image: blackbalti,
  },
  {
    title: 'Fenomastic My Home Rich Matt',
    subtitle: 'For beautiful homes you love.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: blackbalti,
  },
];

const ProductCard: React.FC<{
  title: string;
  subtitle: string;
  features: string[];
  image: string;
}> = ({ title, subtitle, features, image }) => (
  <div className="bg-white dark:bg-neutral-900 hover:shadow-xl dark:hover:shadow-lg transition-all rounded-2xl shadow-md p-6 flex flex-col items-start text-start h-full">
    <img src={image} alt={title} className="h-48 object-contain mb-4 mx-auto" />
    <div className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-2">
      Topcoat
    </div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{subtitle}</p>
    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const PaintProductCards: React.FC = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Our Premium Paint Collection
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintProductCards;
