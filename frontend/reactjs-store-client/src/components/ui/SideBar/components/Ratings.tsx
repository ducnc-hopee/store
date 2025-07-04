import { useState } from "react";
import { ratings, checkboxColors } from "../Const";
import SectionTitle from "../SectionTitle"; // Adjust if needed
import CustomCheckbox from "../CustomCheckbox"; // Adjust the path
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Ratings = () => {
  const [checkedRatings, setCheckedRatings] = useState<boolean[]>(ratings.map(() => false));

  const toggleRating = (index: number) => {
    const updated = [...checkedRatings];
    updated[index] = !updated[index];
    setCheckedRatings(updated);
  };

  return (
    <div>
      <SectionTitle>Rating</SectionTitle>
      <ul className="space-y-2">
        {ratings.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <CustomCheckbox
              id={`rating-${index}`}
              checked={checkedRatings[index] ?? false}
              onChange={() => toggleRating(index)}
              bgColorUnchecked={checkboxColors.rating.unchecked}
              bgColorChecked={checkboxColors.rating.checked}
            />

            {/* Stars */}
            <div className="flex text-yellow-500">
              {[...Array(item.stars)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
              {[...Array(5 - item.stars)].map((_, i) => (
                <AiOutlineStar key={i} className="text-gray-300" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
