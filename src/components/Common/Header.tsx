"use client";

import React, { useState } from "react";

const Header = () => {
  const [address, setAddress] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //       const handleOrder = () => {
  //     setCartCount((prev) => prev + 1);
  //   };

  return (
    <div className="bg-gradient-to-b from-[#FFF3E6] via-[#FFF9F2] to-white">
      {/* Navbar */}
      <header className="max-w-[1180px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-5 pb-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full bg-[#E7000C] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <span className="w-4 h-4 rounded-full border-2 border-white/90 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            </span>
          </span>
          <span className="font-extrabold text-[17px] tracking-[0.06em] text-[#1A1A1A]">
            SPEEDY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#4A4A4A]">
          <a
            href="#"
            className="text-[#141414] font-semibold hover:text-[#E7000C] transition-colors"
          >
            Home
          </a>
          <a
            href="#categories"
            className="hover:text-[#E7000C] transition-colors"
          >
            About
          </a>
          <a href="#offers" className="hover:text-[#E7000C] transition-colors">
            Menu
          </a>
          <a
            href="#restaurants"
            className="hover:text-[#E7000C] transition-colors"
          >
            Blog
          </a>
        </nav>

        {/* Desktop Search + Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search Pill */}
          <div className="relative flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-44 lg:w-52 pl-9 pr-4 py-2 rounded-full bg-white border border-[#EDE8E1] text-xs text-[#141414] placeholder:text-gray-400 focus:outline-none focus:border-[#E7000C]/40 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition"
            />
          </div>

          {/* Sign In Pill */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#EDE8E1] text-xs font-semibold text-[#1A1A1A] hover:border-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 text-[#333333]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Sign In</span>
          </button>

          {/* Cart Bag Icon with Red Counter */}
          <button
            type="button"
            // onClick={handleOrder}
            aria-label="Shopping cart"
            className="relative p-2 text-[#1A1A1A] hover:text-[#E7000C] transition cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
            </svg>
            <span className="absolute top-0.5 right-0.5 min-w-[16px] h-[16px] px-1 rounded-full bg-[#E7000C] text-white text-[10px] font-bold flex items-center justify-center leading-none">
              {cartCount}
            </span>
          </button>
        </div>

        {/* Mobile Right Icons (Search, User, Hamburger) matching mobile mockup */}
        <div className="flex md:hidden items-center gap-3.5 text-[#222222]">
          <button
            type="button"
            aria-label="Search"
            className="p-1 hover:text-[#E7000C] transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Account"
            className="p-1 hover:text-[#E7000C] transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1 hover:text-[#E7000C] transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-[1180px] mx-auto px-5 pb-4">
          <div className="bg-white rounded-2xl p-4 shadow-md border border-[#F0EAE1] flex flex-col gap-3 text-sm font-medium">
            <a href="#" className="text-[#E7000C] font-semibold">
              Home
            </a>
            <a href="#categories" className="text-[#333333]">
              About
            </a>
            <a href="#offers" className="text-[#333333]">
              Menu
            </a>
            <a href="#restaurants" className="text-[#333333]">
              Blog
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
