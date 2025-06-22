import React from 'react';
import { motion } from 'framer-motion';
import blackbalti from "../../public/assests/blackbalti.png"
import bb from "../../public/assests/allimg/assortment.jpg"
<<<<<<< HEAD:src/components/Parallex.tsx
import orangebalti from '../../public/assests/orangebalti.png';
import pinkbalti from '../../public/assests/pinkbalti.png';
import smallbalti from '../../public/assests/smallbalti.png';
import tank from '../../public/assests/tank.png';
import greenbalti from '../../public/assests/greenbalti.png';
import acrylicbalti from '../../public/assests/acrylicbalti.png';
=======
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/Parallex.tsx

const ParallaxSection: React.FC<{ image: string; text: string }> = ({ image, text }) => (
  <div
    className="relative h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover text-[#273261]"
    style={{ backgroundImage: `url(../../public/assests/allimg/paintroller.jpg)` }}>
    <div className="absolute inset-0  z-0 " />
    <motion.img
<<<<<<< HEAD:src/components/Parallex.tsx
      src={image}
=======
      src={blackbalti}
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/Parallex.tsx
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
<<<<<<< HEAD:src/components/Parallex.tsx
      <ParallaxSection image="../../public/assests/blackbalti.png" text="Welcome to Creative Paints" />
      <ParallaxSection image="../../public/assests/orangebalti.png" text="Discover Beautiful Interiors" />
      <ParallaxSection image="../../public/assests/pinkbalti.png" text="Design Your Dream Home" />
      <ParallaxSection image="../../public/assests/smallbalti.png" text="Eco-friendly Colors" />
      <ParallaxSection image="../../public/assests/greenbalti.png" text="Discover Beautiful Interiors" />
      <ParallaxSection image="../../public/assests/acrylicbalti.png" text="Design Your Dream Home" />
      <ParallaxSection image="../../public/assests/tank.png" text="Eco-friendly Colors" />
=======
      <ParallaxSection image="https://source.unsplash.com/1600x900/?paint,color" text="Welcome to Creative Paints" />
      <ParallaxSection image="https://source.unsplash.com/1600x900/?interior,wall" text="Discover Beautiful Interiors" />
      <ParallaxSection image="https://source.unsplash.com/1600x900/?home,decor" text="Design Your Dream Home" />
      <ParallaxSection image="https://source.unsplash.com/1600x900/?nature,green" text="Eco-friendly Colors" />
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/Parallex.tsx
    </div>
  );
};

export default PaintProductCards;
