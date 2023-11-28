import styled from "styled-components";

export const HeroBody = styled.div`
    /* height: 90vh; */
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    /* position: absolute; */
    z-index: 1;

        @media(max-width: 900px){
            display: block;
            height: fit-content;
        }
`

export const HeroLeft = styled.div`
    width: 50vw;
    font-weight: 600;
    font-size: x-large;
    margin: 4rem 0 2rem 3rem;

        
        div{

            h1{
                margin-right: 4rem;
                margin-bottom: -0.3rem;

                @media (max-width: 900px){
                    margin: 0 1rem -1.2rem;
                }

                @media (max-width: 800px){
                    margin-bottom: -1rem;
                }

                @media (max-width: 670px){
                    margin-bottom: -0.7rem;
                }

                @media (max-width: 500px){
                    margin-bottom: -0.2rem;
                }
            }

            img{
                margin-left: -1rem;

                @media (max-width: 900px){
                    width: 17rem;
                    margin-left: 2.5rem;
                }
                
                @media (max-width: 800px){
                    margin-left: 2rem;
                }

                
                @media (max-width: 670px){
                    margin-left: 1.5rem;
                    width: 13rem;
                }

                @media (max-width: 500px){
                    width: 10rem;
                }

                @media (max-width: 400px){
                    width: 8rem;
                }
            }

                @media (max-width: 900px){
                    padding: 0 1rem;
                }

                @media (max-width: 568px){
                    padding: 0 0.5rem;
                }

                @media (max-width: 454px){
                    padding: 0;
                }

        }

       
    @media (max-width:1200px){
        font-size: 1.4rem;
        margin-left: 2rem;
        width: 55vw;

    }

    @media (max-width:1100px){
        font-size: 1.25rem;

    }

    @media (max-width:1000px){
        font-size: 1.15rem;
        margin-left: 0.5rem;
    }

    @media (max-width: 900px){
        /* display: block; */
        width: 90vw;
        font-size: xx-large;
        margin: 3rem 0 2rem;
        padding: 0 1rem;
    }

    @media (max-width: 800px){
        font-size: 1.65rem;
    }

    @media (max-width: 670px){
        font-size: 1.4rem;
    }

    @media (max-width: 568px){
        font-size: 1.1rem;
        padding: 0 0.5rem;
    }

    @media (max-width: 454px){
        font-size: 0.95rem;
        padding: 0;
    }

    @media (max-width: 400px){
        font-size: 0.85rem;
    }

    @media (max-width: 360px){
        font-size: 0.7rem;
    }

    @media (max-width: 300px){
        font-size: 0.65rem;
    }
`


export const HeroRight = styled.div`
    margin-right: -3rem;
    width: 50vw;
    width: fit-content;

    @media (max-width:1200px){
        width: 40vw;
    }
    @media (max-width: 900px){
        display: none;
    }
`
export const Image = styled.img`
    width: 100%;
`

export const Numbers = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: auto auto auto;

        div{

            h2{
                margin-bottom: 1rem;
                z-index: 0;
            }
            img{
                margin-top:-5rem;
                position: absolute;
                width: min-content;
                z-index: 10;
                margin-left: -1.8rem;

                @media (max-width:900px){
                    margin-left: -1rem;
                }

                @media (max-width:600px){
                    width: 4rem;
                    margin-top: -4rem;

                }

                @media (max-width:500px){
                    margin-left: -2rem;

                }

                @media (max-width:400px){
                    width: 3rem;
                    margin-top: -3rem;
                }

            }

            p{
                /* margin-top: -1rem; */
                font-size: 0.8rem;
                font-weight: 400;
                /* margin-left: -1rem */

                @media (max-width:900px){
                    font-size:0.9rem;
                }

                @media (max-width: 500px){
                    font-size: 0.7rem;
                }

                @media (max-width: 300px){
                    font-size: 0.5rem;
                }
            }

         
        }

    @media (max-width:600px){
        width:90vw;
        text-align: center;
    }
`

