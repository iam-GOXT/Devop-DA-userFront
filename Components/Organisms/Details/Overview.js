import React from "react";
import {
  Body,
  Content,
  // TextTag,
  BoldHeading,
  RegularText
} from "../../../styles/School.module";
// import Slider from '../../Molecules/Slider'

const Overview = ({ data }) => {
  return (
    <>
      <Body>
        <Content>
          <BoldHeading>Overview</BoldHeading>
          <RegularText>{data?.courseOverview}</RegularText>
        </Content>

        {/* <Slider/> */}
      </Body>
    </>
  );
};

export default Overview;
