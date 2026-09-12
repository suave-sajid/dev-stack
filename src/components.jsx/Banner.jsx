import React from "react";
import debStackBanner from "../assets/banner-stack.png";
import { BRAND_GRADIENT } from "../App";

export default function Banner() {
  return (
    <section className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-12 max-w-6xl mx-auto px-6 py-16">
      {/* Left: text content */}
      <div className="flex-1 min-w-[280px] max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-gray-900">Build Your Ideal</span>
          <br />
          <span className={`${BRAND_GRADIENT} bg-clip-text text-transparent`}>
            Development Stack
          </span>
        </h1>

        <p className="mt-5 text-gray-500 text-base leading-relaxed max-w-md">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3 mt-7">
          <button className={` ${BRAND_GRADIENT} px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition`}>
            Explore Technologies
          </button>

          <button className="px-6 py-3 rounded-lg font-semibold text-sm text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: graphic placeholder */}
      <div className="flex-1 min-w-[220px] flex justify-center">
        <img src={debStackBanner} alt="" />
      </div>
    </section>
  );
}
