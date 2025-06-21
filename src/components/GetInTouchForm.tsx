import React from "react";

const features = [
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="#89a7a3" strokeWidth={2} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#89a7a3" strokeWidth="2.2" />
        <path d="M9.5 12l2 2 3-4" stroke="#89a7a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Power in Your Hands",
    desc: "Enjoy zero contact service with Express Painting App at your fingertips",
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="#89a7a3" strokeWidth={2} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#89a7a3" strokeWidth="2.2" />
        <path d="M12 7v5l3 3" stroke="#89a7a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Supervised Painting",
    desc:
      "Trained and certified painters with expert supervision for a safe and faster painting service.",
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="#89a7a3" strokeWidth={2} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#89a7a3" strokeWidth="2.2" />
        <path d="M9 12h6" stroke="#89a7a3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Time-Saving Tools",
    desc:
      "Power painting tools that saves time and speeds up On-Time delivery.",
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="#89a7a3" strokeWidth={2} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#89a7a3" strokeWidth="2.2" />
        <path d="M8 15c2-2 6-2 8 0" stroke="#89a7a3" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="10" r="1" fill="#89a7a3" />
        <circle cx="15" cy="10" r="1" fill="#89a7a3" />
      </svg>
    ),
    title: "Low-Noise and Cleaner Painting",
    desc:
      "Our mechanised tools and expert team ensures a smooth and pleasant painting and renovation experience with additional clean-up services help protect your valuables from paint spills.",
  },
];

const ContactUs: React.FC = () => {
  return (
    <section id="contectsection" className="w-full scroll-smooth py-16 flex justify-center items-center min-h-[65vh]">
      <div className="w-full max-w-6xl rounded-3xl bg-white shadow-xl mx-2 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Feature List */}
        <div className="bg-[#eef1f1] flex-1 p-8 md:p-12 flex flex-col justify-center rounded-2xl md:rounded-none md:rounded-l-3xl">
          <ul className="space-y-8">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-5">
                <span className="bg-[#111926] rounded-full flex items-center justify-center w-10 h-10 mt-1">
                  {feature.icon}
                </span>
                <span className="">
                  <div className="font-semibold text-lg text-[#311192684441] mb-1">{feature.title}</div>
                  <div className="text-[#111926] text-base leading-snug">{feature.desc}</div>
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-[430px] w-full mx-auto">
            <h2 className="text-2xl font-light text-[#323232] mb-7">Let Our Experts Help You</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Enter Your Name*" className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-[#89a7a3]" required />
              <input type="text" placeholder="Enter Your Phone No*" className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-[#89a7a3]" required />
              <input type="text" placeholder="Pincode*" className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-[#89a7a3]" required />
              <input type="email" placeholder="Your Email Address*" className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-[#89a7a3]" required />
              <select required className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-[#89a7a3]">
                <option value="">Select Your Language</option>
                <option>English</option>
                {/* <option>Hindi</option>
                <option>Bengali</option>
                <option>Marathi</option>
                <option>Tamil</option> */}
                {/* Add more languages as needed */}
              </select>
              <div className="flex flex-col gap-2 mt-2">
                <label className="inline-flex items-center text-[#80a297] text-sm">
                  <input type="checkbox" className="accent-[#89a7a3] mr-2" />
                  Get updates on WhatsApp
                </label>
                <label className="inline-flex items-center text-[#80a297] text-sm">
                  <input type="checkbox" className="accent-[#89a7a3] mr-2" required />
                  I Agree To All
                  <a href="#" target="_blank" rel="noopener noreferrer" className="ml-1 underline text-[#6b8482] hover:text-[#325152]">
                    Terms And Conditions*
                  </a>
                </label>
              </div>
              <button type="submit" className="w-full mt-2 bg-[#111926] text-white text-lg rounded-md py-2 transition-colors hover:bg-[#111926] font-medium ring-1 ring-[#111926] focus:outline-none focus:ring-2 focus:ring-[#111926]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;