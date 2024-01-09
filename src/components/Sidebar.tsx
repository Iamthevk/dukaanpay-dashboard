import image1 from "../assets/Image01.png";
// import Data from "../utils/data.js";
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
    <div className="w-1/6 bg-secondary-100 min-h-screen p-4">
      <div className="w-4/5 mx-auto text-black-100 flex justify-center items-center gap-3 mr-2 mb-6">
        <img src={image1} alt="image" className="w-10 h-10 rounded" />
        <div className="flex flex-col md:w-[108px]">
          <h1>Nishyan</h1>
          <p className="underline">Visit store</p>
        </div>
        <img src={chevronDown} />
      </div>

      {Data.map(({ id, src, title }: INavProps) => {
        return <NavItem key={id} id={id} src={src} title={title} />;
      })}
    </div>
  );
}

export default Sidebar;
