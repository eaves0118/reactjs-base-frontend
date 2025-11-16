import React from "react";
import styles from "./style.module.scss";
const Input = ({ type = "text", placeholder }) => {
  return <input className={styles.inputCommon} type={type} placeholder={placeholder} />;
};

export default Input;
