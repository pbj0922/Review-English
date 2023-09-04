import { Dispatch, FC, SetStateAction, useState } from "react";

import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import Speaker from "@/app/icons/Speaker";
import { Treview } from "@/app/day/[id]/page";

type ReviewCardProps = Pick<Treview, "sentences"> & {
  currentReviewIndex: number;
  setCurrentReviewIndex: Dispatch<SetStateAction<number>>;
};

type TLanguage = "korean" | "english";

const ReviewCard: FC<ReviewCardProps> = ({
  sentences,
  currentReviewIndex,
  setCurrentReviewIndex,
}) => {
  const [language, setLanguage] = useState<TLanguage>("korean");

  const onClickLanguage = () => {
    if (language === "korean") {
      setLanguage("english");
    } else {
      setLanguage("korean");
    }
  };

  const onClickPrev = () => {
    if (currentReviewIndex <= 0) {
      setCurrentReviewIndex(sentences.length - 1);
    } else {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
    setLanguage("korean");
  };

  const onClickNext = () => {
    if (currentReviewIndex >= sentences.length - 1) {
      setCurrentReviewIndex(0);
    } else {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
    setLanguage("korean");
  };

  return (
    <div className="w-full">
      <div className="h-60">
        <div className="border-black border-2 px-4 py-2">
          {sentences[currentReviewIndex][language]}
        </div>
        <div className="mt-2">
          <button className="btn-style">
            <Speaker />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={onClickPrev} className="btn-style">
          <LeftArrow />
        </button>
        <button onClick={onClickLanguage} className="btn-style">
          <span className={`${language === "korean" && "font-semibold"} mr-1`}>
            KOR
          </span>
          /
          <span className={`${language === "english" && "font-semibold"} ml-1`}>
            ENG
          </span>
        </button>
        <button onClick={onClickNext} className="btn-style">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
