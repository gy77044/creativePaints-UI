import React from "react";

interface ImageCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  buttonText = "Explore Now",
  onClick,
}) => {
  return (
    <div className="relative h-full box-border">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
      />
      <div className="absolute bottom-0 w-full bg-white p-6 text-center box-border">
        <h2 className="text-3xl font-semibold mb-4 hover:scale-110 transition-all duration-500">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
        <button
          onClick={onClick}
          className="border border-yellow-600 text-yellow-700 px-16 py-3 rounded hover:bg-yellow-100 hover:scale-105 transition-all duration-500"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
