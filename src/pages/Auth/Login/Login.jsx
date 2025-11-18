import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style.module.scss";
import Illustration from "@images/draw.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signIn(account);
  };
  return (
    <div className={styles.auth}>
      <div className={styles.auth__illustration}>
        <img src={Illustration} alt="" />
      </div>

      <div className={styles.auth__content}>
        <form className={styles.auth__form} onSubmit={handleOnSubmit}>
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

          <Input placeholder="Email address" name="email" onChange={handleOnChange} />
          <Input
            type={"password"}
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
          />

          <div className={styles.auth__actions}>
            <input type="checkbox" />
            <p className="m-0">Remember me</p>
            <span className={styles.auth__forgot}>Forgot password?</span>
          </div>

          <Button content="Login" />

          <div className={styles.auth__register}>
            <span>Don't have an account?</span>
            <Link to="/register" className={styles.auth__register_link}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
