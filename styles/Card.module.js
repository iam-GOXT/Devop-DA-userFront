import styled from "styled-components";

export const CardContent = styled.div`
    padding: 2rem;
    padding-bottom:4rem;
    background-image: linear-gradient(88.79deg, #0D5459 1%, rgba(254, 198, 103, 0.62) 101.4%),  url('${(props) => (props.image)}');
    height: fit-content;
    color: white;
    backkground-size:cover;
    background-repeat:no-repeat;

    @media (max-width: 700px){
        padding-right: 3rem;
        padding-bottom:3rem;
    }


`

export const SchoolImg = styled.div`
    margin: 2rem 0 2rem;
    width: 95vw;
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;

    div{

        img{
            @media (max-width: 1200px){
                width: 7rem;
            }

            @media (max-width: 1000px){
                width: 6rem;
            }

            @media (max-width: 800px){
                margin-bottom: 0.5rem;
            }

            @media (max-width: 700px){
                width: 4rem;;
            }

            @media (max-width: 300px){
                width: 3rem;
            }
        }


            @media (max-width: 800px){
                display: block;
                margin-top: 1rem;
            }

          
        }  

        
    }

    @media(max-width:1200px){
        margin-top: 3rem;
        margin-left: -1rem;
    }

    @media (max-width:800px){
        display: block;
        width: 90vw;
        margin-left: auto;
        margin-top: 1.5rem;
    }

    @media (max-width:700px){
        margin-top: 2rem;
    }

    @media (max-width: 600px){
        margin-left: -0.5rem;
    }

    @media (max-width: 300px){
        margin-top: 2.5rem;
    }
`

export const SchoolDetails = styled.div`
    background-color: white;
    width: 65vw;
    padding: 1.5rem;
    margin: -2rem auto 0rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    justify-content: center;
    color: black;
    display: flex;
    border-radius: 10px;

    div{
        margin-right:10px;
        margin-top:10px;
        @media (max-width: 1200px){
            font-size:13px;
        }
    }  

    @media (max-width: 1200px){
        width: 70vw;
        padding: 1.5rem 1rem;
    }

    @media (max-width: 960px){
        display: block;
        width: 50vw;
        margin-top:-4rem;
        padding: 0.5rem 1.5rem;
    }

    @media (max-width: 800px){
        padding: 0.5rem 1rem;
    }

    @media (max-width: 500px){
        width: 60vw;
    }

    @media (max-width: 400px){
        width: fit-content;
    }
`

export const SchoolLinks = styled.div`
    display: flex;
`

export const BigBold = styled.div.attrs({
    
})`
    font-size:2.2rem;
    font-weight:700;

    @media screen and (max-width:768px){
        font-size:1.7rem;
    }
`

export const Bold = styled.div.attrs({

})`
    font-size:1.2rem;
    font-weight:500;
    @media screen and (max-width:768px){
        font-size:0.8rem;
    }
`

export const AddressTab = styled.div.attrs({
    
})`
    display:flex;
    flex-direction:row;
    margin-top:20px;

    div{
        margin-right:20px;
    }
`