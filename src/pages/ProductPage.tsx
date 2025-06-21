import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import blackbalti from '../../public/assests/blackbalti.png';
import orangebalti from '../../public/assests/orangebalti.png';
import pinkbalti from '../../public/assests/pinkbalti.png';
import smallbalti from '../../public/assests/smallbalti.png';
import tank from '../../public/assests/tank.png';
import greenbalti from '../../public/assests/greenbalti.png';
import acrylicbalti from '../../public/assests/acrylicbalti.png';
import PaintDetailSection from "../components/PaintDetailSection";
const blogCards = [
  {
    title: "Metallic Emulsion",
    category: "Premium",
    img: smallbalti,
    description: "Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal.",
  },
  {
    title: "Best FastFood Ideas (Yummy)",
    category: "Premium",
    img: orangebalti,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Why to eat salad?",
    category: "Premium",
    img: greenbalti,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Why to eat salad?",
    category: "Premium",
    img: pinkbalti,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Why to eat salad?",
    category: "Premium",
    img: acrylicbalti,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Why to eat salad?",
    category: "Premium",
    img: blackbalti,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Why to eat salad?",
    category: "Premium",
    img: tank,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const ProductPage: React.FC = () => {
  return (<>
              <Header/>
              <br/>
              <br/>
               <PaintDetailSection id="w"  paintImg={blackbalti} PaintTitle="Metallic Paints by Creation Paints" PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."/>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">      
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogCards.map((card, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <img className="w-full" src={card.img} alt={card.title} />
              <div className="hover:bg-transparent transition duration-300 absolute inset-0 bg-indigo-900/25 opacity-25" />
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                {card.category}
              </div>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                {card.title}
              </a>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default ProductPage;
