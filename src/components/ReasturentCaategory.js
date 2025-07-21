import ItemList from "./ItemList";

const ReasturentCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(data)
  const handleClick = () => {
    // handleClick();
    // showItems(index === showIndex ? true : false)
    setShowIndex();
    
  };
  return (
    <div className="">
      <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="flex justify-between cursor-pointer">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* {console.log(data.categories)} */}
        {showItems && (
          <ItemList
            items={data.itemCards}
            dummy={dummy}
            // showItems={showItems}
          />
        )}
      </div>
    </div>
  );
};
export default ReasturentCategory;
