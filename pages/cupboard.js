import { Scrollbars } from "react-custom-scrollbars-2";
import Modal from "../components/modal_add_clothing";
import React, { useState } from "react";

function CupboardItem() {
  return (
    <div className="cupboard_flexbox_middle">
      <div className="cupboard_single_flexbox_middle_first">
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
      <div className="cupboard_single_flexbox_middle_second">
        <div className="cupboard_flexbox_name_date">
          <div className="cupboard_single_name">
            <p>Lorem Ipsum</p>
          </div>
          <div className="cupboard_single_date">
            <p>01.01.2023</p>
          </div>
        </div>
        <div className="cupboard_single_heart">
          <img
            src={"cupboard/Icon awesome-heart.svg"}
            alt="heart"
            style={{ height: "3.5vh", width: "3.5vh" }}
          ></img>
        </div>
      </div>
      <div className="cupboard_single_flexbox_middle_third">
        <div className="delete_single_flexbox">
          <p>DELETE</p>
        </div>
        <div className="edit_single_flexbox">
          <p>EDIT</p>
        </div>
      </div>
    </div>
  );
}
function FlexboxColors(props) {
  return <div className={"flexbox_add_single_color" + " " + props.color}></div>;
}
export default function Cupboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [isBlurred, setIsBlurred] = useState(false);

  function handleBlurClick() {
    setIsBlurred(true);
  }

  function handleUnblurClick() {
    setIsBlurred(false);
  }
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
        <div className={isBlurred ? "blurred" : ""}>
          <div className="background_line1"></div>
          <div className="background_line2"></div>
          <div className="background_line3"></div>
          <div className="scrollbar_shadow_firefox"></div>
          <div className="top_cupboard">
            <div className="filters_cupboard_top">
              <img
                src="cupboard/Icon material-filter-list.svg"
                alt="filters"
              ></img>
            </div>
            <div className="single_pieces_cupboard_top">
              <p>SINGLE PIECES</p>
            </div>
            <div className="outfits_cupboard_top">
              <div className="outfits_cupboard_top_text">
                <p>OUTFITS</p>
              </div>
            </div>
            <div
              role="button"
              onClick={() => {
                openModal();
                handleBlurClick();
              }}
              className="add_cupboard_top"
            >
              <img src="cupboard/Union 1.svg" alt="filters"></img>
            </div>
          </div>
          <div className="scroll_flexbox_container">
            <div className="cupboard_all_flexbox_middle">
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
          </div>
        </div>
        <div className="sidebar_img">
          <img
            src={"sidebar/rectangle 161.svg"}
            alt="menu"
            style={{ height: "90vh" }}
          />
        </div>
        <div className="sidebar">
          <div className={"sidebar_menu" + " " + "sidebar_top"}>
            <img src={"sidebar/menu.svg"} alt="menu"></img>
          </div>
          <div className={"sidebar_clothes" + " " + "sidebar_top"}>
            <img src={"sidebar/wieszak.svg"} alt="menu"></img>
          </div>
          <div className={"sidebar_cupboard" + " " + "sidebar_top"}>
            <img src={"sidebar/szafa.svg"} alt="menu"></img>
          </div>
          <div className={"sidebar_account" + " " + "sidebar_top"}>
            <img src={"sidebar/moje konto.svg"} alt="menu"></img>
          </div>
          <div className={"sidebar_logout" + " " + "sidebar_bottom"}>
            <img src={"sidebar/wyloguj.svg"} alt="menu"></img>
          </div>
        </div>
        {/* ADD CLOTHES MODAL */}
        <div>
          <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <div className="add_clothes_modal">
              <div className="flexbox_add_clothes_modal_1">
                <div className="flexbox_add_clothes_image">
                  <img src={"cupboard/photo_img.svg"} alt="photo"></img>
                </div>
                <div className="flexbox_add_clothes_not_image">
                  <div className="flexbox_add_clothes_modal_2">
                    <div className="flexbox_add_clothes_above_add_new"></div>
                    <div className="flexbox_add_clothes_add_new">
                      <p>ADD NEW</p>
                    </div>
                    <div className="flexbox_add_clothes_category">
                      <p>
                        CATEGORY
                        <span className="flexbox_add_clothes_expand">
                          &#9661;
                        </span>
                      </p>
                    </div>
                    <div className="flexbox_add_clothes_color_area">
                      <div className="flexbox_add_clothes_color_text">
                        <p>COLOR</p>
                      </div>
                      <div className="flexbox_add_clothes_modal_colors">
                        <FlexboxColors color="flexbox_add_black" />
                        <FlexboxColors color="flexbox_add_white" />
                        <FlexboxColors color="flexbox_add_red" />
                        <FlexboxColors color="flexbox_add_orange" />
                        <FlexboxColors color="flexbox_add_yellow" />
                        <FlexboxColors color="flexbox_add_green" />
                        <FlexboxColors color="flexbox_add_aqua" />
                        <FlexboxColors color="flexbox_add_blue" />
                        <FlexboxColors color="flexbox_add_purple" />
                        <FlexboxColors color="flexbox_add_pink" />
                        <FlexboxColors color="flexbox_add_brown" />
                        <FlexboxColors color="flexbox_add_beige" />
                      </div>
                    </div>
                    <div className="flexbox_add_clothes_modal_3">
                      <div className="flexbox_add_clothes_discard">
                        <p>DISCARD</p>
                      </div>
                      <div className="flexbox_add_clothes_save">
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
                className="flexbox_add_clothes_close"
              >
                <img src="cupboard/x_icon.svg" alt="expand_icon"></img>
                {/*<button onClick={closeModal}>Close Modal</button>*/}
              </div>
            </div>
          </Modal>
        </div>
      </body>
    </>
  );
}
