import Sidebar from "@component/components/sidebar";
import Sidebar_small from "@component/components/sidebar_small";

function Menu() {
  return (
    <>
      <body>
        <h1>Menu page</h1>

        <Sidebar page_number={0} />
        <Sidebar_small page_number={0} />
      </body>
    </>
  );
}

export default Menu;
