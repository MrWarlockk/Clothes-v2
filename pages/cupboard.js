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

export default function Cupboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
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
          <div role="button" onClick={openModal} className="add_cupboard_top">
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
              <h2>My Modal</h2>
              <p>This is the content of my modal.</p>
              <button onClick={closeModal}>Close Modal</button>
            </div>
          </Modal>
        </div>
      </body>
    </>
  );
}
