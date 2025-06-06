import React from 'react';
interface ColorHighlightProps {
  code: string;
  title: string;
}

const ColorHighlight: React.FC<ColorHighlightProps> = ({ code, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="text-gray-500 text-sm">{code}</div>
      <h1 className="text-4xl font-serif font-medium tracking-wide">{title}</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="border border-gray-500 px-6 py-2 rounded text-sm text-gray-800 hover:bg-gray-100 transition">
          Find Product
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded text-sm hover:bg-gray-800 transition">
          Find Dealer
        </button>
      </div>
    </div>
  );
};

export default ColorHighlight;
