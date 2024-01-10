function TableHeader() {
  return (
    <div className="bg-black-95 rounded py-2.5 px-3 flex justify-between font-galano text-sm font-medium leading-5 text-black-30">
      <p className="text-start w-1/5">Order ID</p>
      <p className="text-start w-1/5">Status</p>
      <p className="text-start w-1/5">Transaction ID</p>
      <p className="text-start w-1/5">Refund date</p>
      <p className="text-end w-1/5">Order amount</p>
    </div>
  );
}

export default TableHeader;
