import Modal from "../components/modal_add_clothing";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/cupboard.module.css";
import classNames from "classnames";
import { useRef } from "react";

function CupboardItem() {
  return (
    <div className={styles.cupboard_flexbox_middle}>
      <div className={styles.cupboard_single_flexbox_middle_first}>
        <img
          src={"images/hoodie.png"}
          alt="hoodie"
          style={{
            height: "27.5vh",
            width: "19vw",
            borderTopLeftRadius: "15%",
            borderTopRightRadius: "15%",
          }}
        ></img>
      </div>
      <div className={styles.cupboard_single_flexbox_middle_second}>
        <div className={styles.cupboard_flexbox_name_date}>
          <div className={styles.cupboard_single_name}>
            <p>Lorem Ipsum</p>
          </div>
          <div className={styles.cupboard_single_date}>
            <p>01.01.2023</p>
          </div>
        </div>
        <div className={styles.cupboard_single_heart}>
          <img
            src={"cupboard/Icon awesome-heart.svg"}
            alt="heart"
            style={{ height: "3.5vh", width: "3.5vh" }}
          ></img>
        </div>
      </div>
      <div className={styles.cupboard_single_flexbox_middle_third}>
        <div className={styles.delete_single_flexbox}>
          <p>DELETE</p>
        </div>
        <div className={styles.edit_single_flexbox}>
          <p>EDIT</p>
        </div>
      </div>
    </div>
  );
}
function CupboardItem2() {
  return (
    <div className={styles.cupboard_flexbox_middle}>
      <div className={styles.cupboard_single_flexbox_middle_first}>
        <div className={styles.cupboard_outfit_images}>
          <div className={styles.cupboard_outfit_images_single}>
            <img src={"images/hoodie.png"} alt="hoodie"></img>
          </div>
          <div className={styles.cupboard_outfit_images_single}>
            <img src={"images/hoodie.png"} alt="hoodie"></img>
          </div>{" "}
          <div className={styles.cupboard_outfit_images_single}>
            <img src={"images/hoodie.png"} alt="hoodie"></img>
          </div>{" "}
          <div className={styles.cupboard_outfit_images_single}>
            <img src={"images/hoodie.png"} alt="hoodie"></img>
          </div>
        </div>
      </div>
      <div className={styles.cupboard_single_flexbox_middle_second}>
        <div className={styles.cupboard_flexbox_name_date}>
          <div className={styles.cupboard_single_name}>
            <p>Lorem Ipsum</p>
          </div>
          <div className={styles.cupboard_single_date}>
            <p>01.01.2023</p>
          </div>
        </div>
        <div className={styles.cupboard_single_heart}>
          <img
            src={"cupboard/Icon awesome-heart.svg"}
            alt="heart"
            style={{ height: "3.5vh", width: "3.5vh" }}
          ></img>
        </div>
      </div>
      <div className={styles.cupboard_single_flexbox_middle_third}>
        <div className={styles.delete_single_flexbox}>
          <p>DELETE</p>
        </div>
        <div className={styles.edit_single_flexbox}>
          <p>EDIT</p>
        </div>
      </div>
    </div>
  );
}
function FlexboxColors(props) {
  return (
    <div
      className={classNames(styles.flexbox_add_single_color, props.color)}
    ></div>
  );
}
export default function Cupboard() {
  const [modal_cupboard_variable, set_modal_cupboard_variable] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cupboard_flexbox_middle_1 = useRef(null);
  const cupboard_flexbox_middle_2 = useRef(null);
  const pieces_outfits_moving_container = useRef(null);
  const pieces_cupboard_top_text = useRef(null);
  const outfits_cupboard_top_text = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isBlurred, setIsBlurred] = useState(false);

  function handleBlurClick() {
    setIsBlurred(true);
  }

  function handleUnblurClick() {
    setIsBlurred(false);
  }
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position_top, setPosition_top] = useState({ x: 0, y: 0 });
  const [is_moving, set_is_moving] = useState(0);

  useEffect(() => {
    setPosition({
      x: window.innerWidth * 0,
      y: window.innerHeight * 0.12,
    });

    setPosition_top({
      x: window.innerWidth * 0.317,
      y: window.innerHeight * 0.044,
    });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (modal_cupboard_variable === 0) {
        setPosition({
          x: window.innerWidth * 0,
          y: window.innerHeight * 0.12,
        });
        setPosition_top({
          x: window.innerWidth * 0.317,
          y: window.innerHeight * 0.044,
        });
      } else if (modal_cupboard_variable === 1) {
        setPosition({
          x: window.innerWidth * 0 - window.innerWidth,
          y: window.innerHeight * 0.12,
        });
        setPosition_top({
          x: window.innerWidth * 0.517,
          y: window.innerHeight * 0.044,
        });
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [modal_cupboard_variable]);
  useEffect(() => {
    if (is_moving === 0) {
      const element = cupboard_flexbox_middle_1.current;
      const element2 = cupboard_flexbox_middle_2.current;
      element.classList.remove("transition_all_1s");
      element2.classList.remove("transition_all_1s");
    }
  }, [is_moving]);

  const move_outfits = () => {
    set_is_moving((prevIsMoving) => prevIsMoving + 1);
    const element = cupboard_flexbox_middle_1.current;
    const element2 = cupboard_flexbox_middle_2.current;
    element.classList.add("transition_all_1s");
    element2.classList.add("transition_all_1s");
    const newPosition = {
      x: position.x - window.innerWidth,
      y: position.y + 0,
    };
    setPosition(newPosition);
    setTimeout(() => {
      set_is_moving((prevIsMoving) => prevIsMoving - 1);
    }, 1000);
  };
  useEffect(() => {
    if (is_moving === 0) {
      const element = cupboard_flexbox_middle_1.current;
      const element2 = cupboard_flexbox_middle_2.current;
      element.classList.remove("transition_all_1s");
      element2.classList.remove("transition_all_1s");
    }
  }, [is_moving]);
  const move_pieces = () => {
    set_is_moving((prevIsMoving) => prevIsMoving + 1);
    const element = cupboard_flexbox_middle_1.current;
    const element2 = cupboard_flexbox_middle_2.current;
    element.classList.add("transition_all_1s");
    element2.classList.add("transition_all_1s");
    const newPosition = {
      x: position.x + window.innerWidth,
      y: position.y + 0,
    };
    setPosition(newPosition);
    setTimeout(() => {
      set_is_moving((prevIsMoving) => prevIsMoving - 1);
    }, 1000);
  };
  const move_pieces_button = () => {
    const container = pieces_outfits_moving_container.current;
    const text = outfits_cupboard_top_text.current;
    const text2 = pieces_cupboard_top_text.current;
    text.classList.add("transition_all_05s");
    text2.classList.add("transition_all_05s");
    container.classList.add("transition_all_02s");
    const newPosition_top = {
      x: position_top.x - 0.195 * window.innerWidth,
      y: position_top.y + 0,
    };
    setPosition_top(newPosition_top);
  };
  useEffect(() => {
    if (is_moving === 0) {
      const container = pieces_outfits_moving_container.current;
      const text = outfits_cupboard_top_text.current;
      const text2 = pieces_cupboard_top_text.current;
      container.classList.remove("transition_all_02s");
      text.classList.remove("transition_all_05s");
      text2.classList.remove("transition_all_05s");
    }
  }, [is_moving]);
  const move_outfits_button = () => {
    const container = pieces_outfits_moving_container.current;
    const text = outfits_cupboard_top_text.current;
    const text2 = pieces_cupboard_top_text.current;
    text.classList.add("transition_all_05s");
    text2.classList.add("transition_all_05s");
    container.classList.add("transition_all_02s");
    const newPosition_top = {
      x: position_top.x + 0.195 * window.innerWidth,
      y: position_top.y + 0,
    };
    setPosition_top(newPosition_top);
  };
  useEffect(() => {
    if (is_moving === 0) {
      const container = pieces_outfits_moving_container.current;
      const text = outfits_cupboard_top_text.current;
      const text2 = pieces_cupboard_top_text.current;
      container.classList.remove("transition_all_02s");
      text.classList.remove("transition_all_05s");
      text2.classList.remove("transition_all_05s");
    }
  }, [is_moving]);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [pieces_button_clicked, set_pieces_clicked] = useState(true);
  const [outfits_button_clicked, set_outfits_clicked] = useState(false);

  function pieces_click() {
    set_pieces_clicked(true);
    set_outfits_clicked(false);
  }

  function outfits_click() {
    set_pieces_clicked(false);
    set_outfits_clicked(true);
  }
  const [piece_color, set_piece_color] = useState("white");
  const [outfit_color, set_outfit_color] = useState("#f98770");
  const change_colors1 = () => {
    set_piece_color("white");
    set_outfit_color("#f98770");
  };
  const change_colors2 = () => {
    set_piece_color("#f98770");
    set_outfit_color("white");
  };
  /*----------------------------------------------------------*/
  /*--------------------------body----------------------------*/
  /*----------------------------------------------------------*/
  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
        </style>

        <title> Cupboard page </title>
      </head>
      <body>
        <div className={isBlurred ? styles.blurred : ""}>
          <div
            className={styles.pieces_outfits_moving_container}
            ref={pieces_outfits_moving_container}
            style={{
              top: position_top.y,
              left: position_top.x,
            }}
          ></div>
          <div className="background_line1"></div>
          <div className="background_line2"></div>
          <div className="background_line3"></div>
          <div className="scrollbar_shadow_firefox"></div>
          <div className={styles.cupboard_top_text}>
            <div
              className={styles.pieces_cupboard_top_text}
              ref={pieces_cupboard_top_text}
              style={{ color: piece_color }}
            >
              <p>SINGLE PIECES</p>
            </div>
            <div
              className={styles.outfits_cupboard_top_text}
              ref={outfits_cupboard_top_text}
              style={{ color: outfit_color }}
            >
              <p>OUTFITS</p>
            </div>
          </div>
          <div className={styles.top_cupboard}>
            <div className={styles.filters_cupboard_top}>
              <img
                src="cupboard/Icon material-filter-list.svg"
                alt="filters"
              ></img>
            </div>
            <button
              style={{
                top: position.y,
                left: position.x,
              }}
              className={styles.single_pieces_cupboard_top}
              onClick={() => {
                pieces_click();
                move_pieces();
                move_pieces_button();
                change_colors1();
                set_modal_cupboard_variable(0);
              }}
              disabled={pieces_button_clicked}
            ></button>
            <button
              className={styles.outfits_cupboard_top}
              onClick={() => {
                outfits_click();
                move_outfits();
                move_outfits_button();
                change_colors2();
                set_modal_cupboard_variable(1);
              }}
              disabled={outfits_button_clicked}
            ></button>
            <div
              role="button"
              onClick={() => {
                openModal();
                handleBlurClick();
              }}
              className={styles.add_cupboard_top}
            >
              <img src="cupboard/Union 1.svg" alt="filters"></img>
            </div>
          </div>
          <div
            className={styles.cupboard_flexbox_middle_1}
            ref={cupboard_flexbox_middle_1}
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
            <CupboardItem />
          </div>
          <div
            className={styles.cupboard_flexbox_middle_2}
            ref={cupboard_flexbox_middle_2}
            style={{
              top: position.y,
              left: position.x + vw,
            }}
          >
            <CupboardItem2 />
            <CupboardItem2 />
          </div>
        </div>

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
          <div className={"sidebar_cupboard" + " " + "sidebar_cupboard_on"}>
            <img src={"sidebar/szafa.svg"} alt="menu"></img>
          </div>
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
        {/* ADD CLOTHES MODAL */}
        <div>
          {modal_cupboard_variable === 0 && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div className={styles.add_clothes_modal}>
                <div className={styles.flexbox_add_clothes_modal_1}>
                  <div className={styles.flexbox_add_clothes_image}>
                    <img src={"cupboard/photo_img.svg"} alt="photo"></img>
                  </div>
                  <div className={styles.flexbox_add_clothes_not_image}>
                    <div className={styles.flexbox_add_clothes_modal_2}>
                      <div
                        className={styles.flexbox_add_clothes_above_add_new}
                      ></div>
                      <div className={styles.flexbox_add_clothes_add_new}>
                        <p>ADD NEW</p>
                      </div>
                      <div className={styles.flexbox_add_clothes_category}>
                        <p>
                          CATEGORY
                          <span className={styles.flexbox_add_clothes_expand}>
                            &#9661;
                          </span>
                        </p>
                      </div>
                      <div className={styles.flexbox_add_clothes_color_area}>
                        <div className={styles.flexbox_add_clothes_color_text}>
                          <p>COLOR</p>
                        </div>
                        <div
                          className={styles.flexbox_add_clothes_modal_colors}
                        >
                          <FlexboxColors color={styles.flexbox_add_black} />
                          <FlexboxColors color={styles.flexbox_add_white} />
                          <FlexboxColors color={styles.flexbox_add_red} />
                          <FlexboxColors color={styles.flexbox_add_orange} />
                          <FlexboxColors color={styles.flexbox_add_yellow} />
                          <FlexboxColors color={styles.flexbox_add_green} />
                          <FlexboxColors color={styles.flexbox_add_aqua} />
                          <FlexboxColors color={styles.flexbox_add_blue} />
                          <FlexboxColors color={styles.flexbox_add_purple} />
                          <FlexboxColors color={styles.flexbox_add_pink} />
                          <FlexboxColors color={styles.flexbox_add_brown} />
                          <FlexboxColors color={styles.flexbox_add_beige} />
                        </div>
                      </div>
                      <div className={styles.flexbox_add_clothes_modal_3}>
                        <div className={styles.flexbox_add_clothes_discard}>
                          <p>DISCARD</p>
                        </div>
                        <div className={styles.flexbox_add_clothes_save}>
                          <p>SAVE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    closeModal();
                    handleUnblurClick();
                  }}
                  className={styles.flexbox_add_clothes_close}
                >
                  <img src="cupboard/x_icon.svg" alt="expand_icon"></img>
                </div>
              </div>
            </Modal>
          )}
        </div>
        {modal_cupboard_variable === 1 && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className={styles.add_clothes_modal}>
              <div className={styles.flexbox_add_clothes_modal_1}>
                <div className={styles.flexbox_add_outfit_images}>
                  <div className={styles.flexbox_add_outfit_images_single}>
                    <img src={"cupboard/photo_img.svg"} alt="photo"></img>
                  </div>
                  <div className={styles.flexbox_add_outfit_images_single}>
                    <img src={"cupboard/photo_img.svg"} alt="photo"></img>
                  </div>{" "}
                  <div className={styles.flexbox_add_outfit_images_single}>
                    <img src={"cupboard/photo_img.svg"} alt="photo"></img>
                  </div>{" "}
                  <div className={styles.flexbox_add_outfit_images_single}>
                    <img src={"cupboard/photo_img.svg"} alt="photo"></img>
                  </div>
                </div>
                <div className={styles.flexbox_add_outfit_modal_2}>
                  <div className={styles.flexbox_add_outfit_text}>
                    SAVE OUTFIT
                  </div>
                  <div className={styles.flexbox_add_outfit_title}>
                    title
                    <div className={styles.flexbox_add_outfit_title_line}></div>
                  </div>
                  <div className={styles.flexbox_add_outfit_line}></div>
                  <div className={styles.flexbox_add_outfit_modal_3}>
                    <div className={styles.flexbox_add_outfit_discard}>
                      <p>DISCARD</p>
                    </div>
                    <div className={styles.flexbox_add_outfit_save}>
                      <p>SAVE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  closeModal();
                  handleUnblurClick();
                }}
                className={styles.flexbox_add_clothes_close}
              >
                <img src="cupboard/x_icon.svg" alt="expand_icon"></img>
              </div>
            </div>
          </Modal>
        )}
      </body>
    </>
  );
}
