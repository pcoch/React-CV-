import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function OutputHeader() {
  return (
    <div className="OutputHeader">
      <div className="headerLeft">
        <h1>Paul Cochrane</h1>
        <h4>Software Developer</h4>
      </div>
      <div className="headerRight">
        <span>
          <FaPhoneAlt /> 0421 169 202
        </span>
        <span>
          <FaEnvelope /> paulstuartcochrane@gmail.com
        </span>
        <span>
          <FaLocationArrow /> Brisbane
        </span>
      </div>
    </div>
  );
}
