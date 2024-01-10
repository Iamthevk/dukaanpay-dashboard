interface IButtonProps {
  className: string;
  children?: React.ReactNode;
}

function Button({ children, className }: IButtonProps) {
  return (
    <div
      className={`rounded-[40px] w-[118px] text-center text-sm py-1.5 px-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;
