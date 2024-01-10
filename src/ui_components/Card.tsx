import helpIcon from "../assets/svg/help-white.svg";
import rightIcon from "../assets/svg/chevron-right.svg";
interface ICardProps {
  className?: string;
  title: string;
  amount: string;
  orders?: string;
  titleClass?: string;
  amountClass?: string;
  orderClass?: string;
}

function Card({
  className,
  title,
  amount,
  orders,
  titleClass,
  amountClass,
  orderClass,
}: ICardProps) {
  return (
    <>
      <div
        className={`w-1/3 h-[154px] flex flex-col gap-4  p-5 rounded-lg ${className}`}
      >
        <div className="flex md:w-[94px] gap-1.5 text-black-30 items-center ">
          <p className={`whitespace-nowrap text-black-30 ${titleClass}`}>
            {title}
          </p>
          <img src={helpIcon} alt="helpIcon" className="w-3.5 h-3.5" />
        </div>
        <div className="flex justify-between text-black-100">
          <p className={`text-3xl ${amountClass}`}>{amount}</p>
          <div className="flex items-center">
            <p className={`whitespace-nowrap underline  ${orderClass}`}>
              {orders}
            </p>
            <img src={rightIcon} alt={"rightIcon"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
