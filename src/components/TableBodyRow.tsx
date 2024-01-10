interface ITableRowProps {
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  para5: string;
  imageSrc: string;
}

function TableBodyRow({
  para1,
  para2,
  para3,
  para4,
  para5,
  imageSrc,
}: ITableRowProps) {
  return (
    <div className="px-3 py-3.5 bg-black-100 flex justify-between font-galano text-sm leading-5">
      <p className="text-primary-100 font-medium w-1/5">{para1}</p>
      <p className="font-inter text-black-12 flex gap-1.5 items-center w-1/5">
        <img src={imageSrc} /> {para2}
      </p>
      <p className="text-black-30 w-1/5 text-start">{para3}</p>
      <p className="text-black-30 w-1/5 text-start">{para4}</p>
      <p className="text-black-30 w-1/5 text-end">{para5}</p>
    </div>
  );
}

export default TableBodyRow;
