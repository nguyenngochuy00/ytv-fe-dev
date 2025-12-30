"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainBanners = [
    "/images/hero_banner_1.png",
    "/images/hero_banner_2.png",
    "/images/hero_banner_3.png",
  ];

  const sideBanners = [
    "/images/hero_banner_4.png",
    "/images/hero_banner_5.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mainBanners.length]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slow-fade">
      {/* Main Slider */}
      <div className="md:col-span-2 relative aspect-21/9 rounded-3xl overflow-hidden shadow-xl group cursor-pointer border border-slate-100">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {mainBanners.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                src={src}
                alt={`Banner ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {mainBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + mainBanners.length) % mainBanners.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % mainBanners.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Side Images */}
      <div className="hidden md:flex flex-col gap-6">
        {sideBanners.map((src, i) => (
          <div
            key={i}
            className="flex-1 relative rounded-3xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-white"
          >
            <Image
              src={src}
              alt={`Side Banner ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
