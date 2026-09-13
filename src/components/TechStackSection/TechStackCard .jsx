// import { useState } from "react";

import { toast } from "react-toastify";
import { BRAND_GRADIENT } from "../../App";

export default function TechnologyCard({ stack, handleAddStack, onRemove, isAdded}) {


  const handlleIsAdded = () =>{

       if (isAdded) {
      onRemove(stack.id);
  
    } else {
      handleAddStack(stack);

      toast.success('Added Stack Successfully', {
  // position: "bottom-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
})
    }
   
  }

  return (
    <div className="max-w-xs w-full  bg-white rounded-2xl border border-gray-200 shadow-lg p-2 ">
      {/* Header: icon + badge */}
       

      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
          <img src={stack.icon} alt={stack.name} className="w-6 h-6" />
        </div>
        {stack.badge && (
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            {stack.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-medium text-gray-900 mb-2">{stack.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {stack.description}
      </p>

      {/* Meta row: category · difficulty · rating */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
        <span>{stack.category}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>{stack.difficulty}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="flex items-center gap-1 font-medium text-gray-900">
          {stack.rating}
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={() => handlleIsAdded()}
        disabled={isAdded}
        className={` w-full h-11 rounded-xl text-white text-sm font-medium hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition cursor-pointer
          ${isAdded ? 'bg-emerald-700 hover:bg-emerald-800' : `${BRAND_GRADIENT} hover:brightness-120`}
          `}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
