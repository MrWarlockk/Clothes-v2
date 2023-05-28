import Link from "next/link";
import styles from "./styles/sidebar_clothes.module.css";
import classNames from "classnames";

export default function Sidebar(props) {
  return (
    <div id={styles.sidebar_hide} className={styles.sidebar}>
      <Link className="sidebar_link" href={"/menu"}>
        <div
          className={`sidebar_menu ${
            props.page_number === 0 ? "sidebar_menu_on" : ""
          }`}
        >
          <img src={"sidebar/menu.svg"} alt="menu"></img>
        </div>
      </Link>
      <Link className="sidebar_link" href={"/clothes"}>
        <div
          className={classNames(styles.sidebar_clothes, {
            [styles.sidebar_clothes_on]: props.page_number === 1,
          })}
        >
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
  );
}
