import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useReasturentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  },[]);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("Full Menu API Data:", json?.data); // 👈 inspect this
    setResInfo(json?.data);
  };
  return resInfo;
};
export default useReasturentMenu;
