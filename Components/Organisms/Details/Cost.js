/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import Slider from '../../Molecules/Slider'

import { 
    Body,
    Content,
    // TextTag,
    // TextTags,
    BoldHeading,
    RegularText
 } from '../../../styles/School.module'

const Cost = ({data}) => {
    return (
        <>
            <Body>
                <Content>
                    <BoldHeading>Cost Overview</BoldHeading>
                    <RegularText>{data?.funding}</RegularText>
                    
                </Content>
\

            </Body>
        </>
    )
}

export default Cost;