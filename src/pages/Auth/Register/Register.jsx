import React from "react";
import { Link } from "react-router-dom";
import styles from "../style.module.scss";
import Illustration from "@images/draw.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

const Register = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__illustration}>
        <img src={Illustration} alt="" />
      </div>

      <div className={styles.auth__content}>
        <form className={styles.auth__form}>
          <div className={styles.auth__social}>
            <h3 className="m-0">Sign up with</h3>

            <div className={styles.auth__social_list}>
              <div className={styles.auth__social_item}>
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
          <Input type={"password"} placeholder="Confirm password" />

          <div className={styles.auth__actions_regis}>
            <input type="checkbox" />
            <p className="m-0">I have read and agree to the terms</p>
          </div>

          <Button content="Register" />

          <div className={styles.auth__register}>
            <span>Already have an account?</span>
            <Link to="/login" className={styles.auth__register_link}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
