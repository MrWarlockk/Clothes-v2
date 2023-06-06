import Sidebar from "@component/components/sidebar";
import Sidebar_small from "@component/components/sidebar_small";
import classNames from "classnames";
import styles from "../styles/account.module.css";

export default function MyAccount() {
  return (
    <>
      <title> Account page </title>

      <div className="background_circle1"></div>
      <div className="background_circle2"></div>
      <div className="background_line1"></div>
      <div className="background_line2"></div>
      <div className="background_line3"></div>
      <div className={styles.page_wrapper}>
        <div className={styles.login_background}>
          <div className={styles.login_rectangle}>
            <div className={styles.flexbox_username}>
              <div className={classNames(styles.flexbox_username_text)}>
                <p>Username</p>
              </div>
              <div className={classNames(styles.flexbox_username_rectangle)}>
                <p>admin</p>
              </div>
            </div>
            <div className={styles.flexbox_password}>
              <div className={classNames(styles.flexbox_password_text)}>
                <p>Password</p>
              </div>
              <div className={classNames(styles.flexbox_password_rectangle)}>
                <p>*****</p>
              </div>
            </div>
            <div className={styles.flexbox_options}>
              <div className={classNames(styles.flexbox_options_text)}>
                <p>Reset Password</p>
              </div>
              <div className={classNames(styles.flexbox_options_text)}>
                <p>Change E-mail</p>
              </div>
            </div>
            <div className={styles.flexbox_email}>
              <div
                className={classNames(
                  styles.flexbox_login_item4,
                  styles.flexbox_email_text
                )}
              >
                <p>E-mail</p>
              </div>
              <div
                className={classNames(
                  styles.flexbox_login_item42,
                  styles.flexbox_email_rectangle
                )}
              >
                <p>admin@mail.com</p>
              </div>
              <div className={styles.flexbox_login_item43}></div>
            </div>
            <div
              className={classNames(
                styles.flexbox_login_item5,
                styles.flexbox_edit_rectangle
              )}
            >
              <p>EDIT</p>
            </div>
            <div
              className={classNames(
                styles.flexbox_login_item52,
                styles.flexbox_edit_rectangle
              )}
            ></div>
            <div className={styles.flexbox_email2}></div>
            <div className={styles.flexbox_login_item6}></div>
            <div className={styles.flexbox_login_item7}></div>
            <div className={styles.flexbox_end_text}>
              <div className={styles.flexbox_login_item8}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris iaculis molestie augue ut gravida. Nunc lectus massa,
                  pretium et elit in, dapibus pharetra metus. Vestibulum non
                  tempor nibh. Phasellus tempus gravida pharetra. Fusce ornare
                  elit eros, in sollicitudin magna laoreet pharetra. Duis sed
                  tortor sit amet nibh ultricies tincidunt nec eget augue. Fusce
                  maximus vulputate massa, sed bibendum libero. Nullam erat
                  lectus, volutpat sed felis ut, volutpat euismod felis. Fusce
                  non arcu sed lorem ultrices sollicitudin.
                </p>
              </div>
              <div className={styles.flexbox_login_item8}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris iaculis molestie augue ut gravida. Nunc lectus massa,
                  pretium et elit in, dapibus pharetra metus. Vestibulum non
                  tempor nibh. Phasellus tempus gravida pharetra. Fusce ornare
                  elit eros, in sollicitudin magna laoreet pharetra. Duis sed
                  tortor sit amet nibh ultricies tincidunt nec eget augue. Fusce
                  maximus vulputate massa, sed bibendum libero. Nullam erat
                  lectus, volutpat sed felis ut, volutpat euismod felis. Fusce
                  non arcu sed lorem ultrices sollicitudin.
                </p>
              </div>
              <div className={styles.flexbox_login_item8}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris iaculis molestie augue ut gravida. Nunc lectus massa,
                  pretium et elit in, dapibus pharetra metus. Vestibulum non
                  tempor nibh. Phasellus tempus gravida pharetra. Fusce ornare
                  elit eros, in sollicitudin magna laoreet pharetra. Duis sed
                  tortor sit amet nibh ultricies tincidunt nec eget augue. Fusce
                  maximus vulputate massa, sed bibendum libero. Nullam erat
                  lectus, volutpat sed felis ut, volutpat euismod felis. Fusce
                  non arcu sed lorem ultrices sollicitudin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar page_number={3} />
      <Sidebar_small page_number={3} />
    </>
  );
}
