import Link from "next/link";
import styles from "../styles/index.module.css";
import classNames from "classnames";

function Home() {
  return (
    <>
      <body>
        {/* BACKGROUND */}
        <div className={styles.background_circle1}></div>
        <div className={styles.background_circle2}></div>
        <div className={styles.image_right_block}></div>
        <div className={styles.background_left}>
          <div
            className={classNames(
              styles.background_left_item,
              styles.background_left_text1
            )}
          >
            ADD IT
          </div>
          <div
            className={classNames(
              styles.background_left_item,
              styles.background_left_text2
            )}
          >
            STYLE IT
          </div>
          <div
            className={classNames(
              styles.background_left_item,
              styles.background_left_text3
            )}
          >
            PLAY WITH IT
          </div>
          <div
            className={classNames(
              styles.background_left_item,
              styles.background_left_line
            )}
          ></div>
        </div>
        <div className={styles.background_up}>
          <div
            className={classNames(
              styles.background_up_item,
              styles.background_up_img
            )}
          >
            <img src="index/Logo.svg" alt="main_image"></img>
          </div>
          <div
            className={classNames(
              styles.background_up_item,
              styles.background_up_line1
            )}
          ></div>
          <div
            className={classNames(
              styles.background_up_item,
              styles.background_up_text
            )}
          >
            CHOOSE OUTFITS EFFORTLESSLY
          </div>
          <div
            className={classNames(
              styles.background_up_item,
              styles.background_up_line2
            )}
          ></div>
        </div>
        <div className={styles.background_up_line3}></div>
        <div className={styles.background_down_line}></div>
        <div className={styles.background_right_line}></div>
        {/* MAIN CONTENT */}
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
        <div className={styles.images}>
          <img
            className={styles.image_left}
            src="index/login_img1.png"
            alt="clothes_image1"
          ></img>
          <div className={styles.images_middle}>
            <img
              className={styles.image_middle1}
              src="index/login_img2.png"
              alt="clothes_image2"
            ></img>

            <img
              className={styles.image_middle2}
              src="index/login_img3.png"
              alt="clothes_image3"
            ></img>

            <img
              className={styles.image_middle3}
              src="index/login_img4.png"
              alt="clothes_image4"
            ></img>
          </div>
          <div className={styles.images_right}>
            <img
              className={styles.image_right1}
              src="index/login_img5.png"
              alt="clothes_image5"
            ></img>
            <img
              className={styles.image_right2}
              src="index/login_img6.png"
              alt="clothes_image6"
            ></img>
          </div>
        </div>
        {
          <div className="sidebar">
            <Link className="sidebar_link" href={"/menu"}>
              <div className={"sidebar_menu"}>
                <img src={"sidebar/menu.svg"} alt="menu"></img>
              </div>
            </Link>
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
            <div className={"sidebar_logout"}>
              <img src={"sidebar/wyloguj.svg"} alt="menu"></img>
            </div>
          </div>
        }
      </body>
    </>
  );
}

export default Home;
