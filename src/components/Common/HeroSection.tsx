import React from "react";

const HeroSection = () => {
  const [address, setAddress] = React.useState("");
  return (
    <section className="max-w-[1180px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-4 pb-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Content Column (Centered on Mobile, Left-aligned on Desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Pill Badge (Visible on Desktop & Tablet, subtle on Mobile) */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#F5EFE6] mb-5">
            <span className="text-xs" role="img" aria-label="delivery">
              📦
            </span>
            <span className="text-[12px] font-semibold text-[#9E2A2B]">
              Fastest Delivery &amp; Easy Pickup
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold text-[#141414] leading-[1.14] tracking-[-0.02em]">
            Hot Meals,
            <br />
            Quick Bites &amp;
            <br />
            Memorable Flavor
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-[13px] sm:text-[14.5px] text-[#666666] leading-[1.6] max-w-[420px]">
            Discover the best foods from over 1,000 restaurants and fast
            delivery to your doorstep
          </p>

          {/* Delivery Address Search Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 sm:mt-7 w-full max-w-[460px] flex items-center gap-2.5"
          >
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              className="flex-1 min-w-0 h-11 sm:h-12 px-4 rounded-[10px] bg-white border border-[#E6E2DC] text-[13px] sm:text-sm text-[#141414] placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#E7000C] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition"
            />
            <button
              type="submit"
              className="h-11 sm:h-12 px-5 sm:px-6 rounded-[10px] bg-[#E7000C] hover:bg-[#C8000A] active:scale-[0.99] text-white font-semibold text-[13px] sm:text-sm whitespace-nowrap shadow-xs transition cursor-pointer"
            >
              Find Restaurant
            </button>
          </form>
        </div>

        {/* Right Food Bowl Image Column */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[500px]">
            <img
              src="/images/hero-bowl-transparent.png"
              alt="Healthy Poke Bowl with Avocado, Snap Peas, Sweet Potato, and Beef"
              className="w-full h-auto object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.08)] select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
