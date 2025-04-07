import React from "react";

const MarqueeScroll = () => {
  return (
    <section className="relative w-full bg-accent2 overflow-hidden py-4">
      {/* Wrapper for positioning */}
      <div className="flex items-center justify-center gap-8 animate-marquee">
        {[...Array(2)].map((_, repeatIndex) =>
          [
            "TIRE POTS",
            "BAGS",
            "INDOOR POTS",
            "INTERIOR",
            "SELFIE POINTS",
            "TIRE POTS",
            "INTERIOR",
            "TIRE POTS",
            "BAGS",
            "INDOOR POTS",
            "INTERIOR",
            "SELFIE POINTS",
            "TIRE POTS",
            "INTERIOR",
          ].map((item, index) => (
            <div
              key={`${repeatIndex}-${index}`}
              className="flex items-center justify-center gap-8"
            >
              <span className="text-white text-lg">{item}</span>
              <div className="w-2 h-2 bg-accent3 rounded-full"></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MarqueeScroll;
