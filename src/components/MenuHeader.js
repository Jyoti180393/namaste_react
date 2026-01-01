import MenuCard from "./MenuCard";

const MenuHeader = ({ item, showIndex, setShowSectionIndex }) => {
  const toggleAccordion = () => {
    setShowSectionIndex();
  };
  return (
    <div>
      <div
        className="flex justify-between cursor-pointer py-3.5"
        onClick={() => toggleAccordion()}
      >
        <h3 className="font-bold text-xl">{item?.card?.card?.title}</h3>
        <span>{showIndex ? "👆" : "👇"}</span>
      </div>
      {showIndex &&
        item?.card?.card?.itemCards?.map((item) => (
          <MenuCard key={item.card.info.id} item={item} />
        ))}
    </div>
  );
};

export default MenuHeader;
