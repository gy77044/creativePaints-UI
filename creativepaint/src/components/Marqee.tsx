// components/Marquee.tsx
import React from 'react';

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-white">
      <div className="inline-block animate-marquee min-w-full">
          <span className="text-sm text-[#202020] font-thin mx-4">{text}</span>
          <span className="text-sm text-[#202020] font-thin mx-4">{text}</span>
          <span className="text-sm text-[#202020] font-thin mx-4">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
