import CardContainer from "./CardContainer";
import Header from "./Header";
import TableContainer from "./TableContainer";

function Layout() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <section className="bg-black-98 p-8 w-full">
        <CardContainer />
        <TableContainer />
      </section>
    </div>
  );
}

export default Layout;
