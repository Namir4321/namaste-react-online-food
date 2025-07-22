import React from "react";
import { CLD_URL } from "../utils/constants";

const ReasturentCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    props.resData.info;
  // console.log(props.resData.info);
// console.log(props)
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
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

// higher order component is a which when it takes
// the component as argumnet and return the component with some enchanment not
// manupilation
// this is pure component
export const withPromtedLabel = (ReasturentCard) => {
  // its returning the component from the component as the pure component does it recives the props inide the component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black rounded-lg text-white m-2 p-2">
          Promoted
        </label>
        <ReasturentCard {...props} />
      </div>
    );
  };
};

export default ReasturentCard;
