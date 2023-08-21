import { FC } from "react";

import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import Speaker from "@/app/icons/Speaker";

const ReviewCard: FC = () => {
  return (
    <div className="w-full">
      <div className="h-60">
        <div className="border-black border-2 px-4 py-2">
          Working from home isn't for me. I always get distracted.
        </div>
        <div className="mt-2">
          <button className="btn-style">
            <Speaker />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="btn-style">
          <LeftArrow />
        </button>
        <button className="btn-style">
          <span className="mr-1">KOR</span>/
          <span className="ml-1  font-semibold">ENG</span>
        </button>
        <button className="btn-style">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
