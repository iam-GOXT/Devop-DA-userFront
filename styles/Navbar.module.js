import styled from "styled-components";

export const NavbarBody = styled.nav`
  height: ${(props) => (props.status ? "7vh" : "3.7rem")};
  /* padding: 1rem 0; */
  margin-bottom: 2rem;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    justify-content: space-between;
    padding: 1rem 2rem;
    /* height: ${(props) => (props.status ? "8.5vh" : "3.7rem")}; */
  }

  @media (max-width: 460px) {
    padding: 1rem;
    margin-bottom: 1.4rem;
  }
`;

export const Image = styled.img`
  height: 70px;
  object-fit: cover;
  @media (max-width: 1200px) {
    width: 13rem !important;
    height: 50px;
  }

  // @media (max-width: 1000px){
  //     width: 12rem;
  // }

  @media (max-width: 900px) {
    // width: 13rem;
    width: 80px;
    height: 50px;
  }

  @media (max-width: 500px) {
    width: 11rem;
  }

  @media (max-width: 320px) {
    width: 9rem !important;
    height: 3rem;
  }
`;

export const NavbarList = styled.div`
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    margin-right: 3rem;
    // color: #25bec8;
    color: #085469;
    font-weight: 600;
    font-size: 1.1rem;

    @media (max-width: 1200px) {
      margin-right: 2rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLinks = styled.button`
  font-size: 2rem;
  margin-right: 1rem;
  border: none;
  background: none;
  outline: none;
  z-index: 50;

  @media (min-width: 900px) {
    display: none;
  }

  @media (max-width: 500px) {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.2rem;
    margin-right: 0;
  }
`;

export const LinkExtend = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* opacity: 1; */
  background-color: white;
  float: right;
  right: 0;
  margin-top: 3.25rem;
  padding: 2rem;
  width: 50vw;
  height: 90vh;
  z-index: 70;

  a {
    text-decoration: none;
    color: #2f5061;
    font-size: 1.2rem;
    margin-top: 2rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    width: 60vw;
  }

  @media (max-width: 400px) {
    width: 70vw;
  }

  @media (max-width: 300px) {
    width: 80vw;
  }
`;
