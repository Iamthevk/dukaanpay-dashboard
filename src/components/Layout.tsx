import CardContainer from "./CardContainer";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <CardContainer />
    </div>
  );
}

export default Layout;
