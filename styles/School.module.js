import styled from "styled-components";

export const Body = styled.div`
    width: 100vw;
    text-align: center;
    justify-content: center;
    padding: 1rem auto;
    
`

export const Content = styled.div`
    width: 60vw;
    margin: 2rem auto 5rem;
    text-align: left;

        
        
       

    @media (max-width: 1200px){
        width: 80vw;
    }

    @media (max-width: 768px){
        width: 100vw;
        padding-left:20px;
        padding-right:20px;
        
    }
`
export const BoldHeading = styled.div.attrs({
    
})`
    font-size:20px;
    font-weight:600;
    margin-bottom:20px;
    
`

export const RegularText = styled.div.attrs({
    
})`
    font-size:15px;
    font-weight:normal;
    margin-bottom:20px;
    color: #858484;
    margin-bottom:20px;
    line-height:25px;
    text-align:justify;
    white-space: pre-line;
`
export const AbtSection = styled.div`
    /* display: grid; */
    display: flex;
    margin: 2rem auto;
    justify-content: space-around;
    width:90vw;
    /* grid-template-columns: auto auto auto; */
    /* gap: 1rem; */

     @media (max-width: 600px){
        display: block;         
    }

   

    img{
        margin-right: 0.5rem;
        width: 30%;


        @media (max-width: 600px){
            width: 70%;
            margin-top:1rem;
        }
    }
`

export const TextTag = styled.p`
    width: 50vw;

    @media (max-width:1200px){
        width: 65vw;
    }
`

export const SliderTitle = styled.div`
    font-size:19px !important; 
    font-weight:700;
    margin-bottom:20px;
    margin-top:10px;

    @media (max-width:768px){
        font-size:17px;
    }
`
export const TextTags = styled.p`
    width: 35vw;

    @media (max-width:1200px){
        width: 65vw;
    }
`

export const SliderBody = styled.div`
    text-align: left;
    width: 90vw;
    margin: 2rem auto;

        h3{
            margin-top: 3rem;
        }
`
