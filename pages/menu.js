import Link from "next/link";

function Menu() {
  return (
    <>
      <body>
        <h1>Menu page</h1>

        <div className="sidebar">
          <div className={"sidebar_menu" + " " + "sidebar_menu_on"}>
            <img src={"sidebar/menu.svg"} alt="menu"></img>
          </div>
          <Link className="sidebar_link" href={"/clothes"}>
            <div className={"sidebar_clothes"}>
              <img src={"sidebar/wieszak.svg"} alt="menu"></img>
            </div>
          </Link>
          <Link className="sidebar_link" href={"/cupboard"}>
            <div className={"sidebar_cupboard"}>
              <img src={"sidebar/szafa.svg"} alt="menu"></img>
            </div>
          </Link>
          <Link className="sidebar_link" href={"/account"}>
            <div className={"sidebar_account"}>
              <img src={"sidebar/moje konto.svg"} alt="menu"></img>
            </div>
          </Link>
          <Link className="sidebar_link" href={"/"}>
            <div className={"sidebar_logout"}>
              <img src={"sidebar/wyloguj.svg"} alt="menu"></img>
            </div>
          </Link>
        </div>
      </body>
    </>
  );
}

export default Menu;
