import { FC } from "react";

type DayCardProps = {
  index: number;
};

const DayCard: FC<DayCardProps> = ({ index }) => {
  return (
    <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
      <button>Day {index + 1}</button>
    </li>
  );
};

export default DayCard;
