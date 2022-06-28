import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function OutputHeader(props) {
  return (
    <div className="OutputHeader">
      <div className="headerLeft">
        <h1>{props.personalForm.name}</h1>
        <h4>{props.personalForm.title}</h4>
      </div>
      <div className="headerRight">
        <span>
          <FaPhoneAlt /> {props.personalForm.phone}
        </span>
        <span>
          <FaEnvelope /> {props.personalForm.email}
        </span>
        <span>
          <FaLocationArrow /> {props.personalForm.location}
        </span>
      </div>
    </div>
  );
}
