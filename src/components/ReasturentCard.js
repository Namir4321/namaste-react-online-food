import React from "react";
import { CLD_URL } from "../utils/constants";

const ReasturentCard = (props) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
  } = props.resData.info;
  // console.log(props.resData.info);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={CLD_URL + cloudinaryImageId}
        className="res-round-lg"
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating} stars</h4>
      <h4>{costForTwo.toUpperCase()}</h4>
      <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default ReasturentCard;
