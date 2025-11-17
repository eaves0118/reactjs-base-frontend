import React, { useState } from "react";
import styles from "./style.module.scss";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const changeForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.auth__container}>
      <div className={`${styles.auth__wrapper} ${isSignUp ? styles.signupActive : ""}`}>
        <div className={styles.auth__panelLeft}>
          <div className={styles.auth__content}>
            <h2>{isSignUp ? "Welcome Back!" : "Hello, Welcome!"}</h2>
            <p>{isSignUp ? "Already have an account?" : "Don't have an account?"}</p>
            <Button
              onClick={changeForm}
              content={isSignUp ? "Login" : "Register"}
              isPrimary={false}
            />
          </div>
        </div>

        <div className={styles.auth__panelRight}>
          <h2 className={styles.auth__formTitle}>{isSignUp ? "Registration" : "Login"}</h2>
          <form className={styles.auth__form}>
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="Enter password" type="password" />
            {isSignUp && (
              <Input label="Confirm Password" placeholder="Confirm password" type="password" />
            )}
            {!isSignUp && (
              <a href="#" className={styles.auth__forgot}>
                Forgot password?
              </a>
            )}
            <Button content={isSignUp ? "Register" : "Login"} isPrimary={true} />
          </form>

          <p className={styles.auth__suggest}>
            {isSignUp ? "or register with social platforms" : "or login with social platforms"}
          </p>

          <div className={styles.auth__socials}>
            <div className={styles.auth__socialLinks}>
              <FaGoogle />
            </div>
            <div className={styles.auth__socialLinks}>
              <FaFacebookF />
            </div>
            <div className={styles.auth__socialLinks}>
              <FaGithub />
            </div>
            <div className={styles.auth__socialLinks}>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
