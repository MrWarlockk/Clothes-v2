import Link from "next/link";
import styles from "../styles/index.module.css";
import classNames from "classnames";

function Home() {
  return (
    <>
      <body>
        <div className={styles.background_circle1}></div>
        <div className={styles.background_circle2}></div>
        <div className={styles.flexbox_main}>
          <div className={styles.flexbox_main_img}>
            <img src="index/your_personal_wardrobe.svg" alt="main_image"></img>
          </div>
          <div className={styles.flexbox_main_text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              iaculis molestie augue ut gravida. Nunc lectus massa, pretium et
              elit in, dapibus pharetra metus. Vestibulum non tempor nibh.
              Phasellus tempus gravida pharetra. Fusce ornare elit eros, in
              sollicitudin magna laoreet pharetra. Duis sed tortor sit amet nibh
              ultricies tincidunt nec eget augue. Fusce maximus vulputate massa,
              sed bibendum libero. Nullam erat lectus, volutpat sed felis ut,
              volutpat euismod felis. Fusce non arcu sed lorem ultrices
              sollicitudin.
            </p>
          </div>
        </div>
        <div className={styles.flexbox_login}>
          <div
            className={classNames(
              styles.flexbox_login_item,
              styles.flexbox_login_email
            )}
          >
            E-MAIL
          </div>
          <div
            className={classNames(
              styles.flexbox_login_item,
              styles.flexbox_login_password
            )}
          >
            PASSWORD
          </div>
          <div
            className={classNames(
              styles.flexbox_login_item,
              styles.flexbox_login_log_in
            )}
          >
            LOG IN
          </div>
          <div
            className={classNames(
              styles.flexbox_login_item,
              styles.flexbox_login_text1
            )}
          >
            Forgot your password?
          </div>
          <div
            className={classNames(
              styles.flexbox_login_item,
              styles.flexbox_login_text2
            )}
          >
            Join Here
          </div>
        </div>
        {/*
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
  */}
      </body>
    </>
  );
}

export default Home;
