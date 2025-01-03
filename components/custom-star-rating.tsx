"use client";

import { useState } from "react";

import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type TCustomStarRating = {
  starColor?: string;
  rating?: number;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
  readonly?: boolean;
  className?: string;
  small?: boolean;
};

export default function CustomStarRating({
  starColor = "#FFE609",
  rating,
  setRating,
  readonly = false,
  className,
  small,
}: TCustomStarRating) {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <>
      {setRating && (
        <div className={twMerge("flex", className)}>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  className="hidden"
                  value={starValue}
                  onClick={() => setRating(starValue)}
                />
                <FaStar
                  color={
                    starValue <= (hovered || rating || 0)
                      ? starColor
                      : "#D3D3D3"
                  }
                  onMouseEnter={() => {
                    setHovered(starValue);
                  }}
                  onMouseLeave={() => {
                    setHovered(0);
                  }}
                  className={twMerge("w-5 h-5 cursor-pointer", small && "w-3 h-3")}
                />
              </label>
            );
          })}
        </div>
      )}
      
      {readonly && (
        <div className={twMerge("flex", className)}>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;

            return (
              <FaStar
                color={starValue <= (rating || 0) ? starColor : "#B1B1AD"}
                key={index}
                className={twMerge("w-5 h-5", small && "w-3 h-3")}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
