import React, { useContext } from "react";
import Input from "@components/Input/Input";
import { ResizeContext } from "../../../contexts/ResizeProvider";
const HomePage = () => {
  const { isMobile } = useContext(ResizeContext);
  return <div>{isMobile ? <div>is Mobile</div> : <div>is Desktop</div>}</div>;
};

export default HomePage;
