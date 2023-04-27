import Link from "next/link";

export default function MyAccount() {
  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
        </style>

        <title> Account page </title>
      </head>
      <body>
        <div className="background_circle1"></div>
        <div className="background_circle2"></div>
        <div className="background_line1"></div>
        <div className="background_line2"></div>
        <div className="background_line3"></div>
        <div className="page_wrapper">
          <div className="login_background">
            <div className="login_rectangle">
              <div className={"flexbox_username"}>
                <div
                  className={
                    "flexbox_login_item1" + " " + "flexbox_username_text"
                  }
                >
                  <p>Username</p>
                </div>
                <div
                  className={
                    "flexbox_login_item12" + " " + "flexbox_username_rectangle"
                  }
                >
                  <p>admin</p>
                </div>
              </div>
              <div className={"flexbox_password"}>
                <div
                  className={
                    "flexbox_login_item2" + " " + "flexbox_password_text"
                  }
                >
                  <p>Password</p>
                </div>
                <div
                  className={
                    "flexbox_login_item22" + " " + "flexbox_password_rectangle"
                  }
                >
                  <p>*****</p>
                </div>
              </div>
              <div className={"flexbox_options"}>
                <div
                  className={
                    "flexbox_login_item3" + " " + "flexbox_options_text1"
                  }
                >
                  <p>Reset Password</p>
                </div>
                <div
                  className={
                    "flexbox_login_item3" + " " + "flexbox_options_text2"
                  }
                >
                  <p>Change E-mail</p>
                </div>
              </div>
              <div className={"flexbox_email"}>
                <div
                  className={"flexbox_login_item4" + " " + "flexbox_email_text"}
                >
                  <p>E-mail</p>
                </div>
                <div
                  className={
                    "flexbox_login_item42" + " " + "flexbox_email_rectangle"
                  }
                >
                  <p>admin@mail.com</p>
                </div>
                <div className={"flexbox_login_item43"}></div>
              </div>
              <div
                className={
                  "flexbox_login_item5" + " " + "flexbox_edit_rectangle"
                }
              >
                <p>EDIT</p>
              </div>
              <div
                className={
                  "flexbox_login_item52" + " " + "flexbox_edit_rectangle"
                }
              ></div>
              <div className={"flexbox_email2"}></div>
              <div className={"flexbox_login_item6"}></div>
              <div className={"flexbox_login_item7"}></div>
              <div className={"flexbox_end_text"}>
                <div className={"flexbox_login_item8"}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris iaculis molestie augue ut gravida. Nunc lectus massa,
                    pretium et elit in, dapibus pharetra metus. Vestibulum non
                    tempor nibh. Phasellus tempus gravida pharetra. Fusce ornare
                    elit eros, in sollicitudin magna laoreet pharetra. Duis sed
                    tortor sit amet nibh ultricies tincidunt nec eget augue.
                    Fusce maximus vulputate massa, sed bibendum libero. Nullam
                    erat lectus, volutpat sed felis ut, volutpat euismod felis.
                    Fusce non arcu sed lorem ultrices sollicitudin.
                  </p>
                </div>
                <div className={"rules_text" + " " + "flexbox_login_item8"}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris iaculis molestie augue ut gravida. Nunc lectus massa,
                    pretium et elit in, dapibus pharetra metus. Vestibulum non
                    tempor nibh. Phasellus tempus gravida pharetra. Fusce ornare
                    elit eros, in sollicitudin magna laoreet pharetra. Duis sed
                    tortor sit amet nibh ultricies tincidunt nec eget augue.
                    Fusce maximus vulputate massa, sed bibendum libero. Nullam
                    erat lectus, volutpat sed felis ut, volutpat euismod felis.
                    Fusce non arcu sed lorem ultrices sollicitudin.
                  </p>
                </div>
                <div className={"rules_text" + " " + "flexbox_login_item8"}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris iaculis molestie augue ut gravida. Nunc lectus massa,
                    pretium et elit in, dapibus pharetra metus. Vestibulum non
                    tempor nibh. Phasellus tempus gravida pharetra. Fusce ornare
                    elit eros, in sollicitudin magna laoreet pharetra. Duis sed
                    tortor sit amet nibh ultricies tincidunt nec eget augue.
                    Fusce maximus vulputate massa, sed bibendum libero. Nullam
                    erat lectus, volutpat sed felis ut, volutpat euismod felis.
                    Fusce non arcu sed lorem ultrices sollicitudin.
                  </p>
                </div>
              </div>
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
          <div className={"sidebar_account" + " " + "sidebar_account_on"}>
            <img src={"sidebar/moje konto.svg"} alt="menu"></img>
          </div>
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
