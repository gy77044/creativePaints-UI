import React from 'react';

interface PaintDetailSectionProps {
  id: string;
  PaintTitle: string;
  PaintDetail: string;
  paintImg: string;
}

const PaintDetailSection: React.FC<PaintDetailSectionProps> = ({
<<<<<<< HEAD:src/components/PaintDetailSection.tsx
  id,
=======
    id,
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/PaintDetailSection.tsx
  PaintTitle,
  PaintDetail,
  paintImg,
}) => {
  return (
<<<<<<< HEAD:src/components/PaintDetailSection.tsx
    <section
      id={id}
      className="w-full bg-white px-4 sm:px-6 md:px-20 py-12 md:py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
        {/* Text Content */}
=======
    <section id={id} className="w-full bg-white px-4 sm:px-6 md:px-20 py-12 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-8">
        
        {/* Text Content - 50% width */}
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/PaintDetailSection.tsx
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#202020] mb-4 sm:mb-6">
            {PaintTitle}
          </h2>
<<<<<<< HEAD:src/components/PaintDetailSection.tsx
          <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
            {PaintDetail}
          </p>

          <br/>
          <br/>
          <br/>
=======
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-nowrap leading-4">
            {PaintDetail}
          </p>
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/PaintDetailSection.tsx
          <a
            href="#"
            className="inline-flex items-center gap-2 text-black font-medium hover:underline"
          >
<<<<<<< HEAD:src/components/PaintDetailSection.tsx
            <span className="bg-yellow-400 text-black rounded-full p-2 rotate-90">
=======
            <span className="bg-yellow-400 text-black rounded-full p-2">
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/PaintDetailSection.tsx
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
<<<<<<< HEAD:src/components/PaintDetailSection.tsx
         
          </a>
        </div>

        {/* Image Section */}
=======
            Learn more
          </a>
        </div>

        {/* Image Section - 50% width */}
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/PaintDetailSection.tsx
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={paintImg}
            alt={PaintTitle}
<<<<<<< HEAD:src/components/PaintDetailSection.tsx
            className="w-full max-w-[500px] h-auto object-contain rounded"
=======
            className="w-full h-auto max-w-full object-cover rounded"
>>>>>>> 5d546f50ec19bf1e18ad530abdee6e7c0dcaff26:creativepaint/src/components/PaintDetailSection.tsx
          />
        </div>
      </div>
    </section>
  );
};

export default PaintDetailSection;
