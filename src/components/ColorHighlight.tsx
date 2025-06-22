import React from 'react';
<<<<<<< HEAD:src/components/ColorHighlight.tsx
import img from "../../public/assests/BlueRoom.jpeg"
=======
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/ColorHighlight.tsx
interface ColorHighlightProps {
  code: string;
  title: string;
}

const ColorHighlight: React.FC<ColorHighlightProps> = ({ code, title }) => {
  return (
<<<<<<< HEAD:src/components/ColorHighlight.tsx
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:px-6 lg:px-8 bg-[url(../../public/assests/themewithlogo.png)] dark:bg-neutral-900 h-[100dvh] bg-no-repeat bg-cover">
      <div className="text-sm text-gray-600 dark:text-gray-400">{code}</div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-wide text-gray-900 dark:text-white mt-2">
        {title}
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button className="px-6 py-2 text-sm font-medium text-gray-800 dark:text-white border border-gray-400 dark:border-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-300">
          Find Product
        </button>
        <button className="px-6 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-gray-700 rounded-md hover:bg-gray-900 dark:hover:bg-black transition duration-300">
=======
    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="text-gray-500 text-sm">{code}</div>
      <h1 className="text-4xl font-serif font-medium tracking-wide">{title}</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="border border-gray-500 px-6 py-2 rounded text-sm text-gray-800 hover:bg-gray-100 transition">
          Find Product
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded text-sm hover:bg-gray-800 transition">
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/ColorHighlight.tsx
          Find Dealer
        </button>
      </div>
    </div>
  );
};

export default ColorHighlight;
