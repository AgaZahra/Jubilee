import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";
const BackToTop = () => (
  <button className="back-to-top-button"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <IoArrowUpOutline />
  </button>
);

export default BackToTop;
