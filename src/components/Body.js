import React, { useContext, useState } from "react";
import { useEffect } from "react";
import ReasturentCard, { withPromtedLabel } from "./ReasturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listofRestaurents, setListOfRestaurent] = useState([]);
  const [filteredReasturent, setFilteredReasturent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [toprating, setTopRating] = useState(false);
  const ReasturrentCardPromoted = withPromtedLabel(ReasturentCard);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999"
    );
    const json = await data.json();
    setListOfRestaurent(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredReasturent(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // console.log(filteredReasturent);
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }
const {setUserName,loggedInUser}=useContext(UserContext)
  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="Search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            style={{ marginRight: "4px", marginLeft: "4px" }}
            onClick={() => {
              const filtered = listofRestaurents.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredReasturent(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const threshold = toprating ? 0 : 4;
              console.log(
                listofRestaurents.filter((res) => res.info.avgRating)
              );

              const filteredAvg = listofRestaurents.filter(
                (res) => res.info.avgRating > threshold
              );
              setFilteredReasturent(filteredAvg);
              setTopRating((prev) => !prev);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>User:</label>
          <input
            className="border border-black p-2"
            vaalue={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap bg-red-200 justify-around">
        {/* {console.log(resList)} */}
        {filteredReasturent.map((reasturent) => (
          <Link
            to={"/restaurants/" + reasturent.info.id}
            key={reasturent.info.id}
            className="link"
          >
            {/* {console.log(filteredReasturent)} */}
            {/* this is the pure componet where it reciving the component as a argument */}
            {reasturent.info.promoted ? (
              <ReasturrentCardPromoted resData={reasturent} />
            ) : (
              <ReasturentCard resData={reasturent} />
            )}

            {/* <ReasturentCard resData={reasturent} /> */}
          </Link>
        ))}
        {/* <ReasturentCard /> */}
      </div>
    </div>
  );
};
export default Body;
