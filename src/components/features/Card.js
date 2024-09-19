import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, icon }) => {
  return (
    <div className="w-100 px-12 h-60 py-10 rounded-lg shadow-shadowOne flex items-center bg-[#1E90FF] group hover:bg-[#00a8e8] transition-colors duration-100 group"> 
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-12 transition-transform duration-500">
          <div className="w-10 h-6 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-white group-hover:text-white">{icon}</span> 
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-white group-hover:bg-white inline-flex"></span> {/* Hoverda oq rangda qoladi */}
                <span className="w-full h-[2px] rounded-lg bg-white group-hover:bg-white inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-white group-hover:bg-white inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-white group-hover:bg-white inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-white group-hover:text-white"> {/* Matn oq rangda qoladi */}
              {title}
            </h2>
            <span className="text-2xl text-white group-hover:text-white"> {/* Arrow right ikona oq rangda qoladi */}
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
