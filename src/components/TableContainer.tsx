import Button from "../ui_components/Button";
import Input from "../ui_components/Input";
import sortIcon from "../assets/svg/sort.svg";
import downloadIcon from "../assets/svg/download.svg";
import TableHeader from "./TableHeader";
import TableBodyRow from "./TableBodyRow";
import successIcon from "../assets/svg/success.svg";
import processIcon from "../assets/svg/process.svg";

function TableContainer() {
  return (
    <div>
      <div className="w-[252px] gap-6 flex flex-col mb-6">
        <p>Transactions | This Month</p>
        <div className="flex gap-3 justify-between items-center">
          <Button className="bg-black-90 text-black-50 ">Payouts (22)</Button>
          <Button className="bg-primary-100 text-black-100">Refunds (6)</Button>
        </div>
      </div>
      <div className="bg-black-100 p-3">
        <div className="h-[380px]">
          <div className="flex justify-between pb-3">
            <Input
              className="!bg-black-100 !w-[248px] !text-black-60 border border-black-85"
              inputClassName="!bg-black-100 text-sm"
              placeHolder="Order ID or transaction ID"
            />
            <div className="flex gap-4">
              <div className="w-20 flex items-center gap-1.5 py-1.5 px-2 rounded border border-black-85">
                <p className="font-inter leading-6">Sort</p>
                <img src={sortIcon} alt="sort" className="w-4 h-4" />
              </div>
              <div className="p-2 border border-black-85 w-9 h-9 rounded">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>
          </div>
          <div>
            <TableHeader />
            <TableBodyRow
              para1="#281209"
              para2="Successful"
              para3="131634495747"
              para4="Today, 08:45 PM"
              para5="₹1,125.00"
              imageSrc={successIcon}
            />
            <TableBodyRow
              para1="#281208"
              para2="Processing"
              para3="131634495747"
              para4="Yesterday, 3:00 PM"
              para5="₹1,125.00"
              imageSrc={processIcon}
            />
            <TableBodyRow
              para1="#281207"
              para2="Successful"
              para3="131634495747"
              para4="12 Jul 2023, 03:00 PM"
              para5="₹1,125.00"
              imageSrc={successIcon}
            />
            <TableBodyRow
              para1="281206"
              para2="Successful"
              para3="131634495747"
              para4="12 Jul 2023, 03:00 PM"
              para5="₹1,125.00"
              imageSrc={successIcon}
            />
            <TableBodyRow
              para1="281205"
              para2="Successful"
              para3="131634495747"
              para4="12 Jul 2023, 03:00 PM"
              para5="₹1,125.00"
              imageSrc={successIcon}
            />
            <TableBodyRow
              para1="281204"
              para2="Successful"
              para3="131634495747"
              para4="12 Jul 2023, 03:00 PM"
              para5="₹1,125.00"
              imageSrc={successIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableContainer;
