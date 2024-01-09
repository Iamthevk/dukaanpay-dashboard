import chevronArrow from "../assets/svg/chevron-down-light.svg";

function CardContainer() {
  return (
    <div className="px-8 flex justify-between mb-6">
      <p className="text-xl font-medium leading-7 font-galano">Overview</p>
      <div className="flex gap-1.5 justify-center items-center rounded border border-black-85 px-3.5 py-1.5">
        <p>This Month</p>
        <img src={chevronArrow} alt="down arrow" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default CardContainer;
