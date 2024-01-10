import Button from "../ui_components/Button";

function TableContainer() {
  return (
    <div>
      <div className="w-[252px] gap-6 flex flex-col">
        <p>Transactions | This Month</p>
        <div className="flex gap-3 justify-between items-center">
          <Button className="bg-black-90 text-black-50 ">Payouts (22)</Button>
          <Button className="bg-primary-100 text-black-100">Refunds (6)</Button>
        </div>
      </div>
    </div>
  );
}

export default TableContainer;
