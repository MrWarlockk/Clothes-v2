import Link from "next/link";

function Home() {
  return (
    <>
      <body>
        <h1>Login page</h1>

        <div className="sidebar">
          <Link href={"/menu"}>
            <div className={"sidebar_menu"}>
              <img src={"sidebar/menu.svg"} alt="menu"></img>
            </div>
          </Link>
          <Link href={"/clothes"}>
            <div className={"sidebar_clothes"}>
              <img src={"sidebar/wieszak.svg"} alt="menu"></img>
            </div>
          </Link>
          <Link href={"/cupboard"}>
            <div className={"sidebar_cupboard"}>
              <img src={"sidebar/szafa.svg"} alt="menu"></img>
            </div>
          </Link>
          <Link href={"/account"}>
            <div className={"sidebar_account"}>
              <img src={"sidebar/moje konto.svg"} alt="menu"></img>
            </div>
          </Link>
          <div className={"sidebar_logout"}>
            <img src={"sidebar/wyloguj.svg"} alt="menu"></img>
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;
