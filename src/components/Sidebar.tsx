import image1 from "../assets/Image01.png";
import wallet from "../assets/svg/wallet.svg";
import chevronDown from "../assets/svg/chevron-down.svg";
import { Data } from "../utils/data";
import NavItem from "./NavItem";

interface INavProps {
  id: number;
  title: string;
  src: string;
}

function Sidebar() {
  return (
    <div className="md:w-[224px] bg-secondary-100 min-h-screen p-4 relative">
      <div className="md:w-[192px] mx-auto text-black-100 flex justify-center items-center gap-3 mr-2 mb-6">
        <img src={image1} alt="image" className="w-10 h-10 rounded" />
        <div className="flex flex-col md:w-[108px]">
          <h1 className="font-inter font-medium">Nishyan</h1>
          <p className="underline opacity-80 text-xs font-galano">
            Visit store
          </p>
        </div>
        <img src={chevronDown} className="w-5 h-5" />
      </div>
      <div>
        {Data.map(({ id, src, title }: INavProps) => {
          return <NavItem key={id} id={id} src={src} title={title} />;
        })}
      </div>
      <div className="flex absolute bottom-4 bg-secondary-200 px-3 py-1.5 gap-3 rounded">
        <img src={wallet} alt="wallet" className="p-1.5 bg-secondary-400" />
        <div className="font-inter text-black-100">
          <p className="text-sm opacity-80">Available Credits</p>
          <p className="text-base">222.10</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
