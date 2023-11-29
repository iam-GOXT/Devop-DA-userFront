import React from 'react';
// import Link from 'next/link'
// import Slider from '../../Molecules/Slider'

import { 
    Body,
    Content,
    BoldHeading,
    RegularText
 } from '../../../styles/School.module'

const Registration = ({data}) => {
    return (
        <>
            <Body>
                <Content>
                    <BoldHeading>Course Requirement</BoldHeading>
                    <RegularText>{data?.requirement}</RegularText>
                    
                </Content>

             

            </Body>
        </>
    )

}

export default Registration;