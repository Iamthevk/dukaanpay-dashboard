import chevronArrow from "../assets/svg/chevron-down-light.svg";
import Card from "../ui_components/Card";

function CardContainer() {
  return (
    <div className="mb-16">
      <div className="px-8 flex justify-between mb-6">
        <p className="text-xl font-medium leading-7 font-galano">Overview</p>
        <div className="flex gap-1.5 justify-center items-center rounded border border-black-85 px-3.5 py-1.5">
          <p className="font-galano text-black-30 leading-6">This Month</p>
          <img src={chevronArrow} alt="down arrow" className="w-4 h-4" />
        </div>
      </div>
      <div className="flex gap-5 w-full relative">
        <Card
          className="bg-primary-100"
          title="Next Payout"
          amount="₹2,312.23"
          orders="23 orders"
          titleClass="!text-black-100"
        />
        <div className="flex absolute justify-between -bottom-6 rounded-lg text-black-95 w-[370px] h-9 items-center font-galano leading-5 font-medium text-xsm box-border bg-primary-200 px-6">
          <p>Next payout date:</p>
          <p>Today, 04:00PM</p>
        </div>

        <Card
          title="Amount Pending"
          amount="₹92,312.20"
          orders="13 orders"
          className="bg-black-100 shadow shadow-[#1a181e0a]"
          amountClass="text-black-12"
          orderClass="text-primary-100 "
        />
        <Card
          title="Amount Processed"
          amount="₹23,92,312.19"
          className="bg-black-100 shadow shadow-[#1a181e0a] "
          amountClass="text-black-12"
        />
      </div>
    </div>
  );
}

export default CardContainer;
