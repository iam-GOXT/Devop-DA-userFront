import styled from 'styled-components';

export const SearchBody = styled.div`
    margin: 1rem auto;
    width:100%;
   
    text-align: center;
    /* font-family: 'DM Sans', sans-serif; */

`

export const SearchInput = styled.input.attrs(props => ({
    type: "text",
    color: props.color || '#c4c4c4',
  }))`
    /* position: absolute; */
    width: 40%;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid ${props => props.color};
    font-size: inherit;
    font-family: 'DM Sans', sans-serif;
    padding: 0rem 1rem 0 3.5rem;
    color: #969696;
    outline: none;

        @media (max-width: 900px){
            width: 90%;
            height: 2.5rem;
            font-size: 0.9rem;
        }
`
export const Icon = styled.button`
    position: absolute;
    font-size: 1.5rem;
    background: none;
    border: none;
    margin: 0.8rem 0.5rem  0.8rem 1rem;

        @media (max-width:900px){
            font-size: 1.2rem;
            /* margin: 0.5rem 0.5rem  0.5rem 1rem; */
        }
`

export const SearchSelect = styled.div`
     /* display: flex; 
    justify-content: space-around;  */
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    margin: 2rem;
    overflow-x: auto;
    width: 94%;
    /* scroll-behavior: smooth; */
    white-space: nowrap;

    &::-webkit-scrollbar {
        height: 5px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #c6c6c6; 
        border-radius: 10px;
    }
        
`

export const Select = styled.select`
    width: 10rem;
    height: 2rem;
    /* padding: 0 1rem; */
    outline: none;
    border: none;
    margin-left: 1rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background: url('/assets/downArrow.png') no-repeat right white;
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 0.8rem;


`

export const CourseBody = styled.div`
    margin: 2rem 3rem;
    font-family: 'DM Sans', sans-serif;

    @media screen and (max-width:768px){
       
      margin-right:5px;
      margin-left:15px;
    }

    h4{
        text-align: left;
        font-weight: 700;
        color: #a2a2a2;
    }
`

export const CourseList = styled.div`
    /* margin: 2rem 3rem; */
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: auto auto auto;

        

        @media(max-width: 920px){
            grid-template-columns: auto auto;
        }

        @media(max-width: 640px){
            grid-template-columns: auto;
        }
`

export const CourseGallery = styled.div`
  
    cursor: pointer;
    padding-bottom: 1rem ;

        button{
            position: absolute;
            padding: 0.5rem 1.2rem;
            background-color: rgba(204,208,195,255);
            margin: 1rem;
            border: none;
            border-radius: 40px;
            font-size: 0.85rem;
            z-index: 10;
            opacity: 0.8;
        }

        div{
            text-align: left;

            section{
                display: flex;
                justify-content: start;

                p{
                    padding: 0.5rem;

                        img{
                            width: 1.5rem;
                            margin-bottom: -0.3rem;
                        }
                        span {
                            font-size: 1rem;
                            font-weight: 600;
                            /* margin-top: -2rem; */
                            margin-left: 0.2rem;
                            margin-right: 0.5rem;
                            color: #7d7d7d;
                            text-transform: capitalize;
                        }
                }

                        
            }

            div{
                margin-left: 0.5rem;
                margin-bottom: 2rem;

                    h4{
                        color: black;
                        margin: 1rem 0 -0.5rem;
                        font-size: 1.1rem;
                        font-weight: 700;

                             @media (max-width: 900px){
                                font-size: 1.05rem;
                            }

                            @media (max-width: 400px){
                                font-size: 0.95rem;
                            }
                    }

                    p{
                        text-align: left;
                        color: #c6c6c6;
                        font-size: 1.2rem;
                        font-weight: 400;

                            @media (max-width: 900px){
                                font-size: 1.2rem;
                            }

                            @media (max-width: 400px){
                                font-size: 1.1rem;
                            }
                    }
            }

           
        }
        

        img{
            @media (max-width: 1200px){
                width: 90%;
            }

            @media (max-width: 900px){
                width: 100%;
            }
        }
`

export const CourseArticle = styled.div`
    margin-left: 1rem;
    

        b{
            margin-top: -1rem;
            color: #2B949C;
        }

        img{
            margin-bottom: -0.2rem;
            width: 1rem;
        }
`

export const SearchById = styled.div`
    width:100vw;
    margin: 0;
    padding: 0;
`