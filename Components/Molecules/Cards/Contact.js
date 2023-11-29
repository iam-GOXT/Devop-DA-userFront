/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
// import Tabs from '../../Templates/Tabs'
import {
  SchoolDetails
  // SchoolLinks
} from "../../../styles/Card.module";

const Contact = ({ data }) => {
  return (
    <>
      <SchoolDetails>
        <div>
          <BsEnvelopeOpenFill size={20} /> {data?.email}
        </div>
        <div>
          <BiLinkAlt size={20} /> {data?.website}
        </div>
        <div>
          <AiFillPhone size={20} /> {data?.contact}
        </div>
      </SchoolDetails>
    </>
  );
};

export default Contact;
