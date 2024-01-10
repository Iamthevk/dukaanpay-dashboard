import search from "../assets/svg/search.svg";

interface InputProps {
  className?: string;
  inputClassName?: string;
  placeHolder: string;
}

function Input({ className, inputClassName, placeHolder }: InputProps) {
  return (
    <div
      className={`md:w-1/3 md:h-10 items-center md:leading-[22px] bg-black-95 flex text-center font-galano text-base gap-4 px-4 rounded-md ${className}`}
    >
      <img src={search} alt="search" className="w-4 h-4" />
      <input
        type="text"
        placeholder={placeHolder}
        className={`w-full rounded-md text-black-50 bg-black-95 outline-none font-galano ${inputClassName}`}
      />
    </div>
  );
}

export default Input;
