import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";
import useReasturentMenu from "../../utils/useReasturentMenu";

const ReasturentMenu = () => {
  const { resId } = useParams();

  // this is the useCustom hook of react where it just a 
  // normal javascript function but what it make the difference 
  // is using use in prefix and nothing more 
  const resInfo = useReasturentMenu(resId);
  if (!resInfo) return <Shimmer />;
  const restaurantName = resInfo?.cards?.[0]?.card?.card?.text;
 // Extract all REGULAR menu items
    const regularCards =
    resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  // Filter only item cards (some are headings or separators)
  const menuItems = regularCards
    .map((c) => c?.card?.card)
    .filter((card) => card?.itemCards)
    .flatMap((card) => card.itemCards)
    .map((item) => item.card.info);
  // console.log(menuItems);
  return (
    <div className="menu">
      <h1>{restaurantName || "Restaurant Menu"}</h1>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={item.id + "_" + index}>
            {item.name} - ₹{(item.defaultPrice || item.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReasturentMenu;
