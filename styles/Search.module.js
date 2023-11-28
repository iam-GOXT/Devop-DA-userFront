import styled from "styled-components";

export const InputBody = styled.div`
  padding: 1.5rem;
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: 10px 10px 5px 0px rgba(243, 243, 243, 255);
  width: 94%;
  font-weight: 400;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 95%;
    height: 13rem;
    margin-left: 1rem;
  }

  @media (max-width: 600px) {
    height: 12rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const HandleSearch = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  p {
    position: relative;
    z-index: 40;
    cursor: pointer;
    font-size: 1rem;

    img {
      margin-left: 0rem;

      @media (max-width: 900px) {
        width: min-content;
      }

      @media (max-width: 300px) {
        width: 0.5rem;
      }
    }

    div {
      position: absolute;
      width: 10rem;
      min-height: 5rem;
      text-align: center;
      align-items: center;
      background-color: #ffffff;
      padding-bottom: 2rem;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 70;

      @media (max-width: 700px) {
        width: 8rem;
      }

      @media (max-width: 500px) {
        width: 6rem;
      }
    }

    @media (max-width: 900px) {
      font-size: 1.2rem;
    }

    @media (max-width: 700px) {
      font-size: 1rem;
    }

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }

    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const SearchDrop = styled.div`
  display: block;
  text-align: center;
  padding-bottom: 1rem;

  p {
    margin-bottom: -0.5rem;
    font-size: 1rem;

    @media (max-width: 1100px) {
      font-size: 0.9rem;
    }

    @media (max-width: 900px) {
      font-size: 1.2rem;
    }

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }
`;

export const InputField = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  gap: 1rem;

  div {
    button {
      border: 1px solid #79c9de;
      background-color: #79c9de;
      padding: 1rem 2rem;
      margin-top: 1rem;
      border-radius: 10px;

      a {
        text-decoration: none;
        color: white;
        font-weight: 700;
      }
      @media (max-width: 900px) {
        margin-top: 0.5rem;
        margin-left: -0.5rem;
      }

      @media (max-width: 500px) {
        padding: 0.8rem 2rem;
      }

      @media (max-width: 454px) {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 77% 23%;
    gap: 1rem;
  }

  @media (max-width: 900px) {
    display: block;
    margin-bottom: 4rem;
  }
`;

export const NavbarInput = styled.input.attrs((props) => ({
  type: "text",
  color: props.color || "black",
}))`
  border: 1px solid ${(props) => props.color};
  margin: 1rem 0;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  outline: none;
  font-family: "DM Sans", sans-serif;
  background-color: #ffe8c1;
  font-size: 1rem;
  font-weight: 700;
  @media (max-width: 900px) {
    margin-bottom: 0;
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 86%;
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    width: 82%;
  }
`;
