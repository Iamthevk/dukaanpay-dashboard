interface INavProps {
  id: number;
  title: string;
  src: string;
}
function NavItem({ src, title }: INavProps) {
  return (
    <div
      className={`flex gap-5 text-black-100 px-4 py-2 leading-5 rounded ${
        title === "Payouts" ? "bg-[#ffffff1a]" : ""
      }`}
    >
      <img src={src} alt={title} />
      <p className="text-sm leading-5 font-inter font-medium opacity-80">
        {title}
      </p>
    </div>
  );
}

export default NavItem;
