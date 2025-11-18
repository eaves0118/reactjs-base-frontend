import React from "react";
import styles from "../style.module.scss";
import Illustration from "@images/draw.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

const Login = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__illustration}>
        <img src={Illustration} alt="" />
      </div>

      <div className={styles.auth__content}>
        <form className={styles.auth__form}>
          <div className={styles.auth__social}>
            <h3 className="m-0">Sign in with</h3>

            <div className={styles.auth__social_list}>
              <div className={`shadow-lg ${styles.auth__social_item}`}>
                <FaFacebookF />
              </div>
              <div className={styles.auth__social_item}>
                <FaTwitter />
              </div>
              <div className={styles.auth__social_item}>
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className={styles.auth__divider}>Or</div>

          <Input placeholder="Email address" />
          <Input type={"password"} placeholder="Password" />

          <div className={styles.auth__actions}>
            <input type="checkbox" />
            <p className="m-0">Remember me</p>
            <span className={styles.auth__forgot}>Forgot password?</span>
          </div>

          <Button content="Login" />

          <div className={styles.auth__register}>
            <span>Don't have an account?</span>
            <span className={styles.auth__register_link}>Register</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
