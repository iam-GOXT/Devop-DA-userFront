/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Slider from "../../Molecules/Slider";

import {
  // AbtSection,
  Body,
  Content,
  BoldHeading,
  RegularText,
} from "../../../styles/School.module";

const About = ({ data }) => {
  return (
    <>
      <Body>
        <Content>
          <BoldHeading>About School</BoldHeading>
          <RegularText>{data?.aboutSchool}</RegularText>
        </Content>
      </Body>
    </>
  );
};

export default About;
