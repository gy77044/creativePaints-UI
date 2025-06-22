// components/Marquee.tsx
import React from 'react';

<<<<<<< HEAD:src/components/Marqee.tsx
const Marquee = ({
  text,
  scrolledDown,
}: {
  text: string;
  scrolledDown: boolean;
}) => {
  const bgClass = scrolledDown ? "bg-[#111926]" : "bg-white";
  const textColor = scrolledDown ? "text-white" : "text-[#202020]";

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full p-1 mt-2 ${bgClass}`}>
      <div className="inline-block animate-marquee min-w-full">
        <span className={`text-sm font-thin mx-4 ${textColor}`}>{text}</span>
        <span className={`text-sm font-thin mx-4 ${textColor}`}>{text}</span>
        <span className={`text-sm font-thin mx-4 ${textColor}`}>{text}</span>
=======
const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-white">
      <div className="inline-block animate-marquee min-w-full">
          <span className="text-sm text-[#202020] font-thin mx-4">{text}</span>
          <span className="text-sm text-[#202020] font-thin mx-4">{text}</span>
          <span className="text-sm text-[#202020] font-thin mx-4">{text}</span>
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/Marqee.tsx
      </div>
    </div>
  );
};

export default Marquee;
