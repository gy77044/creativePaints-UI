import React from 'react';
import { motion } from 'framer-motion';
import blackbalti from "../../public/assests/blackbalti.png"
import bb from "../../public/assests/allimg/assortment.jpg"

const ParallaxSection: React.FC<{ image: string; text: string }> = ({ image, text }) => (
  <div
    className="relative h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover text-[#273261]"
    style={{ backgroundImage: `url(../../public/assests/allimg/paintroller.jpg)` }}>
    <div className="absolute inset-0  z-0 " />
    <motion.img
      src={blackbalti}
      alt="Above Text"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-[200px] h-[200px] object-cover rounded mb-4"
    />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 px-6 text-center text-4xl font-bold drop-shadow-lg"
    >
      {text}
    </motion.div>
  </div>
);

const PaintProductCards: React.FC = () => {
  return (
    <div>
      <ParallaxSection image="https://source.unsplash.com/1600x900/?paint,color" text="Welcome to Creative Paints" />
      <ParallaxSection image="https://source.unsplash.com/1600x900/?interior,wall" text="Discover Beautiful Interiors" />
      <ParallaxSection image="https://source.unsplash.com/1600x900/?home,decor" text="Design Your Dream Home" />
      <ParallaxSection image="https://source.unsplash.com/1600x900/?nature,green" text="Eco-friendly Colors" />
    </div>
  );
};

export default PaintProductCards;
