import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function OutputHeader(props) {
  console.log(props);
  return (
    <div className="OutputHeader">
      <div className="headerLeft">
        <h1>{props.PersonName}</h1>
        <h4>{props.JobTitle}</h4>
      </div>
      <div className="headerRight">
        <span>
          <FaPhoneAlt /> {props.Phone}
        </span>
        <span>
          <FaEnvelope /> {props.Email}
        </span>
        <span>
          <FaLocationArrow /> {props.Location}
        </span>
      </div>
    </div>
  );
}
