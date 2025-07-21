import { useParams } from "react-router";
import Shimmer from "../Shimmer";
import useReasturentMenu from "../../utils/useReasturentMenu";
import ReasturentCategory from "../ReasturentCaategory";
import { useState } from "react";

const ReasturentMenu = () => {
  const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";

  // this is the useCustom hook of react where it just a
  // normal javascript function but what it make the difference
  // is using use in prefix and nothing more
  const resInfo = useReasturentMenu(resId);
  if (!resInfo) return <Shimmer />;
  const cuisines=resInfo?.cards[2]?.card?.card?.info?.cuisines;
  const { costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const restaurantName = resInfo?.cards?.[0]?.card?.card?.text;
  // Extract all REGULAR menu items
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const itemCards =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  // console.log(itemCards);
  // console.log(menuItems);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurantName}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCards.map((category, index) => (
        <ReasturentCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ?true :false}
          setShowIndex={()=>setShowIndex((prev)=>(prev===index?null:index))}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default ReasturentMenu;
