import { ratings, checkboxColors } from "../Const";
import SectionTitle from "./SectionTitle"; // Adjust if needed
import CustomCheckbox from "../CustomCheckbox"; // Adjust the path
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type RatingsProps = {
  selectedRatings: number[];
  onChange: (updated: number[]) => void;
};

export const Ratings: React.FC<RatingsProps> = ({ selectedRatings, onChange }) => {
  const toggleRating = (stars: number) => {
    const updated = selectedRatings.includes(stars) ? selectedRatings.filter((r) => r !== stars) : [...selectedRatings, stars];
    onChange(updated);
  };

  return (
    <div>
      <SectionTitle>Rating</SectionTitle>
      <ul className="space-y-4">
        {ratings.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <CustomCheckbox
              id={`rating-${index}`}
              checked={selectedRatings.includes(item.stars)}
              onChange={() => toggleRating(item.stars)}
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
