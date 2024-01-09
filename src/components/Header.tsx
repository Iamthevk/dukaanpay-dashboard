import helpIcon from "../assets/svg/help.svg";
import search from "../assets/svg/search.svg";
import chatIcon from "../assets/svg/group.svg";
import arrowIcon from "../assets/svg/circle-down.svg";
function Header() {
  return (
    <div className="w-full h-16 flex py-3 px-8 bg-black-100 border-b-2 border-solid border-black-85 mb-8">
      <div className="md:w-1/3 flex gap-4 justify-start items-center">
        <h5 className="font-galano leading-7 text-black-12 text-xl font-medium">
          Payouts
        </h5>
        <div className="flex md:w-[94px] gap-1.5 text-black-30 items-center">
          <img src={helpIcon} alt="helpIcon" className="w-3.5 h-3.5" />
          <p className="whitespace-nowrap text-[12px]">How it works</p>
        </div>
      </div>
      <div className="md:w-1/3 md:h-10 items-center md:leading-[22px] bg-black-95 flex text-center font-galano text-base gap-4 px-4 rounded-md">
        <img src={search} alt="search" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="w-full rounded-md text-black-50 bg-black-95 outline-none "
        />
      </div>
      <div className="w-1/3 flex items-center justify-end gap-3 ">
        <div className="bg-black-90 rounded-full">
          <img
            src={chatIcon}
            alt="chatIcon"
            className="w-5 h-5 m-2.5 bg-black-90"
          />
        </div>
        <div className="bg-black-90 rounded-full">
          <img src={arrowIcon} alt="arrowIcon" className="w-10 h-10 " />
        </div>
      </div>
    </div>
  );
}

export default Header;
