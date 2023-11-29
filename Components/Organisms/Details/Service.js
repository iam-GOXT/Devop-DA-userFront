/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import Slider from '../../Molecules/Slider'

import { 
    Body,
    Content,
    // TextTag,
    BoldHeading,
    RegularText
} from '../../../styles/School.module'

const Service = ({data}) => {
    return (
        <>
             <Body>
                <Content>
                    <BoldHeading>Services</BoldHeading>
                    <RegularText>{data?.services}</RegularText>

                </Content>

               

            </Body>
        </>
    )
}

export default Service;