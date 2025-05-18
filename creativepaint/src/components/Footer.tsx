import React from "react";

const navLinks = [
  {
    heading: "Products",
    items: [
      "Interior Wall Coatings",
      "Exterior Wall Coatings",
      "Enamels",
      "Wood Finishes",
      "Waterproofing",
    ],
  },
  {
    heading: "Colour",
    items: ["Colour Catalogue", "Colour Blogs"],
  },
  {
    heading: "Tools",
    items: ["Cost Calculator", "Moisture Meter", "CREATION PAINT Visualiser"],
  },
  {
    heading: "Support",
    items: ["Customer Care", "Sitemap"],
  },
];

const iconClass =
  "w-6 h-6 text-white/90 hover:text-[#ba6e9c] transition duration-150 cursor-pointer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#231f1e] text-white/90 pt-8 pb-2 px-3 border-t border-[#231f1e] rounded-b-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo + Social */}
        <div className="flex flex-col items-start gap-6 min-w-[180px] mb-6 md:mb-0">
          {/* Logo */}
          <img
            src="/assests/logo.png"
            alt="CREATION PAINT Logo"
            className="w-24 mb-2"
            draggable={false}
          />
          <div className="flex gap-4 mb-4">
            {/* Social icons */}
            <a href="#" aria-label="Facebook"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1.5"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4"/><path d="M8 11v5m8-5v5m-8-2a2 2 0 104 0 2 2 0 10-4 0"/><circle cx="8" cy="8" r="1"/></svg></a>
            <a href="#" aria-label="Threads"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15.5 16A3.5 3.5 0 1112 8.5m0 7.5V8.5"/></svg></a>
            <a href="#" aria-label="Pinterest"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 12.26a2.23 2.23 0 012.68-1.78 2.22 2.22 0 011.78 2.68A2.22 2.22 0 119.09 12.26z"/><path d="M12 17v-2.34"/></svg></a>
            <a href="#" aria-label="X"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg></a>
            <a href="#" aria-label="YouTube"><svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="5"/><path d="M10 9v6l5-3-5-3z"/></svg></a>
          </div>
          <div className="text-xs mb-1">©2025 CREATION PAINT Paints India</div>
          <div className="text-xs text-white/70 space-x-1">
            <a href="#" className="hover:underline">Disclaimer</a>|
            <a href="#" className="hover:underline">Privacy Policy</a>|
            <a href="#" className="hover:underline">Terms & Conditions</a>|
          </div>
        </div>
        {/* Multi-columns nav */}
        <div className="flex flex-1 flex-wrap justify-between gap-10">
          {navLinks.map(col => (
            <div key={col.heading} className="min-w-[130px] mb-8 md:mb-0">
              <div className="font-semibold text-lg mb-2 text-white">{col.heading}</div>
              <ul className="space-y-1">
                {col.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/90 hover:text-[#ba6e9c] font-normal text-[15px] leading-6 transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </footer>
  );
};

export default Footer;