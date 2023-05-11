import Link from "next/link";
import styles from "../styles/clothes.module.css";
import classNames from "classnames";

function Clothes() {
  return (
    <>
      <body>
        <div className={styles.background_white}></div>
        <div className="background_line1"></div>
        <div className="background_line2"></div>
        <div className="background_line3"></div>
        <div className={styles.background_circle1}></div>
        <div className={styles.background_circle2}></div>
        <div className={styles.outfit_creator}>
          <div className={styles.outfit_creator_images}>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/hoodie.png"} alt="hoodie"></img>
            </div>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/shirt.png"} alt="shirt"></img>
            </div>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/pants.png"} alt="pants"></img>
            </div>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/shoes.png"} alt="shoes"></img>
            </div>
          </div>
          <div className={styles.outfit_creator_bottom}>
            <div className={styles.outfit_creator_save}>SAVE OUTFIT</div>
            <div className={styles.outfit_creator_generate}>
              <div className={styles.outfit_creator_generate_text}>
                GENERATE
              </div>
              <div className={styles.outfit_creator_generate_arrow_bg}>
                <span className={styles.outfit_creator_generate_arrow}>
                  &#9650;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clothes_menu}>
          <div className={styles.clothes_menu_list}>
            <div className={styles.clothes_menu_list_filters}>
              <div className={styles.clothes_menu_list_filters_filter}>
                FILTER
                <span> &#9660;</span>
              </div>
              <div className={styles.clothes_menu_list_filters_color}>
                <div
                  className={styles.clothes_menu_list_filters_color_colors}
                ></div>
              </div>
              <div className={styles.clothes_menu_list_filters_cold}>
                <img
                  src={"clothes/snowflake-regular.svg"}
                  alt="snowflake"
                ></img>
              </div>
              <div className={styles.clothes_menu_list_filters_rainy}>
                <img src={"clothes/canadian-maple-leaf.svg"} alt="rainy"></img>
              </div>
              <div className={styles.clothes_menu_list_filters_sad}>
                <img src={"clothes/face-meh-regular.svg"} alt="sad"></img>
              </div>
              <div className={styles.clothes_menu_list_filters_happy}>
                <img src={"clothes/face-smile-regular.svg"} alt="happy"></img>
              </div>
            </div>
            <div className={styles.clothes_menu_list_images}>
              <div className={styles.clothes_menu_list_images_container}>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/hoodie.png"} alt="hoodie"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/shirt.png"} alt="shirt"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/pants.png"} alt="pants"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/shoes.png"} alt="shoes"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/shoes.png"} alt="shoes"></img>
                </div>
                <div
                  className={classNames(
                    styles.clothes_menu_list_img_container,
                    styles.clothes_menu_list_add
                  )}
                >
                  <img src={"clothes/Union 1.svg"} alt="shoes"></img>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clothes_menu_type}></div>
        </div>

        <div className="sidebar">
          <Link href={"/menu"}>
            <div className={"sidebar_menu"}>
              <img src={"sidebar/menu.svg"} alt="menu"></img>
            </div>
          </Link>
          <div className={"sidebar_clothes" + " " + "sidebar_clothes_on"}>
            <img src={"sidebar/wieszak.svg"} alt="menu"></img>
          </div>
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
          <Link href={"/"}>
            <div className={"sidebar_logout"}>
              <img src={"sidebar/wyloguj.svg"} alt="menu"></img>
            </div>
          </Link>
        </div>
      </body>
    </>
  );
}

export default Clothes;
