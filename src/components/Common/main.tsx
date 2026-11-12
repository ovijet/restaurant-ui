'use client';

import { useRef, useState } from "react";

const CATEGORIES = [
  { id: "burger", name: "Burger", bg: "#FEEFD0", icon: "/images/cat-1.png" },
  { id: "pizza", name: "Pizza", bg: "#FDE5E5", icon: "/images/cat-2.png" },
  { id: "chicken", name: "Chicken", bg: "#FFF8C1", icon: "/images/cat-3.png" },
  { id: "noodles", name: "Noodles", bg: "#FDEDD3", icon: "/images/cat-4.png" },
  {
    id: "sandwich",
    name: "Sandwich",
    bg: "#F7FEBA",
    icon: "/images/cat-5.png",
  },
  { id: "dessert", name: "Dessert", bg: "#FAE9F3", icon: "/images/cat-6.png" },
  { id: "coffee", name: "Coffee", bg: "#FEEED4", icon: "/images/cat-7.png" },
  { id: "healthy", name: "Healthy", bg: "#DCFBE9", icon: "/images/cat-8.png" },
];

const RESTAURANTS = [
  {
    id: 1,
    badge: "Top Rated",
    name: "The Golden Luminary",
    cuisine: "Fine Dining • Steakhouse",
    rating: "4.9",
    time: "20-30 min",
    image: "/images/rest-1.png",
  },
  {
    id: 2,
    badge: "Trending",
    name: "Artisan Spice Kitchen",
    cuisine: "Modern Asian • Fusion",
    rating: "4.8",
    time: "15-25 min",
    image: "/images/rest-2.png",
  },
  {
    id: 3,
    badge: "New",
    name: "Osteria Terracotta",
    cuisine: "Italian • Wood-fired Pasta",
    rating: "4.9",
    time: "25-35 min",
    image: "/images/rest-3.png",
  },
  {
    id: 4,
    badge: "Fast Delivery",
    name: "Velvet Booth Bistro",
    cuisine: "Continental • Grill",
    rating: "4.7",
    time: "15-20 min",
    image: "/images/rest-4.png",
  },
];

export default function MainContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(2);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (dir: "left" | "right") => {
    if (!categoryScrollRef.current) return;
    const amount = dir === "left" ? -280 : 280;
    categoryScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleOrder = () => {
    setCartCount((prev) => prev + 1);
    setToastMessage("🎉 Item added to cart successfully!");
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <main className="max-w-[1180px] mx-auto w-full px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16 pb-20 relative">
      
      {/* Toast Notification for Cart Addition */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141414] text-white px-5 py-3 rounded-2xl shadow-xl text-[13px] font-medium flex items-center gap-3 animate-fade-in border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#E7000C] animate-pulse"></span>
          <span>{toastMessage}</span>
          <span className="text-white/60 text-[11px] ml-2">Cart: {cartCount}</span>
        </div>
      )}

      {/* Popular Categories Section */}
      <section id="categories" className="pt-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#141414] tracking-tight">
              Popular Categories
            </h2>
            <p className="text-[13px] text-[#666666] mt-0.5">Select a category to filter your favorite meals</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCategories("left")}
              aria-label="Previous categories"
              className="w-8 h-8 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center text-[#555555] hover:border-[#141414] hover:text-[#141414] hover:shadow-xs transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollCategories("right")}
              aria-label="Next categories"
              className="w-8 h-8 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center text-[#555555] hover:border-[#141414] hover:text-[#141414] hover:shadow-xs transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories Horizontal List */}
        <div
          ref={categoryScrollRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className="flex flex-col items-center shrink-0 group cursor-pointer focus:outline-none"
              >
                <div
                  style={{ backgroundColor: cat.bg }}
                  className={`w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs ${
                    isSelected ? "ring-2 ring-[#E7000C] ring-offset-2 shadow-md scale-105" : ""
                  }`}
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none group-hover:rotate-6 transition-transform"
                  />
                </div>
                <span
                  className={`mt-2.5 text-[12.5px] sm:text-[13.5px] font-medium transition-colors ${
                    isSelected
                      ? "text-[#E7000C] font-bold"
                      : "text-[#222222] group-hover:text-[#E7000C]"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Three Promotional Cards Section */}
      <section id="offers" className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        
        {/* Card 1: Combo Offer (Yellow) */}
        <div className="bg-gradient-to-br from-[#FEDC30] to-[#FEC601] rounded-[24px] p-6 sm:p-7 min-h-[200px] flex flex-col justify-between relative overflow-hidden shadow-[0_8px_25px_rgba(254,198,1,0.25)] hover:shadow-[0_12px_30px_rgba(254,198,1,0.35)] transition-shadow">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full bg-black/10 text-[#141414] text-[10.5px] font-bold uppercase tracking-wider">
              Combo Offer
            </span>
            <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#141414] mt-2 leading-tight">
              Buy 1 Get 1 Free
            </h3>
            <p className="text-[13px] text-[#1F1F1F]/80 mt-1">
              Order your favourite juicy burger today!
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              onClick={handleOrder}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] hover:bg-black active:scale-95 text-white text-[12.5px] font-semibold shadow-md transition-all cursor-pointer"
            >
              <span>Order Now</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Card 2: Pasta 15% OFF (Warm Cream) */}
        <div className="bg-[#FFF6ED] rounded-[24px] p-6 sm:p-7 min-h-[200px] flex flex-col justify-between relative overflow-hidden border border-[#F8ECE0] shadow-sm hover:shadow-md transition-shadow">
          <div className="z-10 max-w-[60%]">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E7000C] text-white text-[10.5px] font-bold uppercase tracking-wide shadow-xs">
              15% OFF
            </span>
            <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#141414] mt-2 leading-tight">
              Creamy Pasta
            </h3>
            <p className="text-[13px] text-[#555555] mt-1">
              Freshly prepared Italian pasta bowls
            </p>
          </div>
          <div className="mt-5 z-10">
            <button
              type="button"
              onClick={handleOrder}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7000C] hover:bg-[#C8000A] active:scale-95 text-white text-[12.5px] font-semibold shadow-md transition-all cursor-pointer"
            >
              <span>Order Now</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <img
            src="/images/pasta-mobile.png"
            alt="Creamy penne pasta bowl"
            className="absolute right-0 bottom-0 w-[140px] sm:w-[155px] h-auto object-contain pointer-events-none select-none drop-shadow-lg"
          />
        </div>

        {/* Card 3: Pizza 20% OFF (Vibrant Red) */}
        <div className="bg-gradient-to-br from-[#E7000C] to-[#C8000A] rounded-[24px] p-6 sm:p-7 min-h-[200px] flex flex-col justify-between relative overflow-hidden shadow-[0_8px_25px_rgba(231,0,12,0.25)] hover:shadow-[0_12px_30px_rgba(231,0,12,0.35)] transition-shadow">
          <div className="z-10 max-w-[60%]">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#E7000C] text-[10.5px] font-bold uppercase tracking-wide shadow-xs">
              20% OFF
            </span>
            <h3 className="text-[24px] sm:text-[26px] font-extrabold text-white mt-2 leading-tight">
              Hot Pizza
            </h3>
            <p className="text-[13px] text-white/90 mt-1">
              Wood-fired crust &amp; melted cheese
            </p>
          </div>
          <div className="mt-5 z-10">
            <button
              type="button"
              onClick={handleOrder}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-100 active:scale-95 text-[#141414] text-[12.5px] font-semibold shadow-md transition-all cursor-pointer"
            >
              <span>Order Now</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <img
            src="/images/pizza-plate.png"
            alt="Hot and crispy pizza"
            className="absolute right-0 bottom-0 w-[140px] sm:w-[155px] h-auto object-contain pointer-events-none select-none drop-shadow-lg"
          />
        </div>
      </section>

      {/* Best Visited Restaurants Section */}
      <section id="restaurants" className="bg-[#F9FAFC] rounded-[28px] p-6 sm:p-8 border border-[#F1F3F7]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#141414] tracking-tight">
              Best Visited Restaurants
            </h2>
            <p className="text-[13px] text-[#666666] mt-0.5">Explore top-rated places loved by foodies</p>
          </div>
          <a
            href="#restaurants"
            className="text-[13.5px] sm:text-[14px] font-semibold text-[#E7000C] hover:text-[#B91C1C] inline-flex items-center gap-1 transition-colors"
          >
            <span>View all</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESTAURANTS.map((rest) => (
            <div
              key={rest.id}
              onClick={handleOrder}
              className="group relative rounded-[20px] overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#EFEFEF]"
            >
              <div className="relative h-[150px] sm:h-[160px] w-full overflow-hidden">
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                
                {/* Top-Left Red Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E7000C] text-white text-[11px] font-bold tracking-wide leading-none shadow-md">
                  {rest.badge}
                </span>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between text-white">
                  <div className="space-y-0.5 pr-2">
                    <h3 className="text-[14px] font-bold leading-snug drop-shadow-sm group-hover:text-[#FFD700] transition-colors">
                      {rest.name}
                    </h3>
                    <p className="text-[11.5px] text-white/90 font-medium">{rest.cuisine}</p>
                  </div>
                  <span className="text-[11.5px] font-bold bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full shrink-0 shadow-sm border border-white/10">
                    ★ {rest.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}