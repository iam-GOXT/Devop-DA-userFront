import styled from "styled-components";

export const FooterBody = styled.div`
  margin: 2rem 0 -2rem;
  padding: 2rem 4rem 0;
  color: #ffffff;
  position: relative;
  background-color: #25bec8;

  @media (max-width: 900px) {
    padding: 2rem 1rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0 0;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    ul {
      p {
        font-weight: 600;
      }

      li {
        list-style-type: none;
        margin-top: 0.5rem;

        a {
          text-decoration: none;
          color: #ffffff;
          font-size: 0.9rem;

          @media (max-width: 900px) {
            font-size: 0.8rem;
          }

          @media (max-width: 500px) {
            font-size: 0.7rem;
          }
        }
      }

      @media (max-width: 900px) {
        font-size: 0.9rem;
      }

      @media (max-width: 500px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const FooterImage = styled.img`
  margin-top: 1rem;

  @media (max-width: 600px) {
    width: 14rem;
    /* height: 4rem; */
  }

  @media (max-width: 500px) {
    width: 13rem;
  }

  @media (max-width: 400px) {
    width: 11rem;
  }

  @media (max-width: 300px) {
    width: 9rem;
  }
`;

export const FooterMedia = styled.div`
  margin: -0.5rem 0 0.5rem 7rem;

  a {
    color: #ffffff;
    margin-right: 0.5rem;
    text-decoration: none;

    span {
      color: #ffffff;
      /* margin-right: 0.5rem; */
      font-size: 1.3rem;

      @media (max-width: 1200px) {
        font-size: 1.1rem;
      }

      @media (max-width: 500px) {
        font-size: 1rem;
      }

      @media (max-width: 400px) {
        font-size: 0.9rem;
      }

      @media (max-width: 300px) {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 600px) {
    margin-left: 6rem;
  }

  @media (max-width: 500px) {
    margin-left: 5rem;
  }

  @media (max-width: 400px) {
    margin-left: 4.5rem;
  }

  @media (max-width: 300px) {
    margin-left: 3.5rem;
  }
`;

export const FooterSpan = styled.div`
  font-weight: 400;
  color: #000000;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 1.5rem;
  margin: 2rem auto;
  width: 50%;
  justify-self: center;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 0.9rem;
    color: #000000;
    text-align: left;
    margin-bottom: 2rem;

    &:hover {
      color: #fec667;
    }

    @media (max-width: 1200px) {
      font-size: 0.8rem;
    }

    @media (max-width: 1000px) {
      font-size: 0.7rem;
    }

    @media (max-width: 900px) {
      font-size: 0.8rem;
    }

    @media (max-width: 600px) {
      font-size: 0.7rem;
    }

    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 70%;
    gap: 0;
  }

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    gap: 0.5rem;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const LandingSpan = styled.div`
  width: 40%;
  font-weight: 400;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  margin: 2rem 0 3rem 5rem;
  font-size: 0.8rem;

  @media (max-width: 1200px) {
    width: 50%;
    margin-left: 3rem;
  }

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-left: 4rem;
    font-size: 0.6rem;
  }

  @media (max-width: 500px) {
    margin-left: 3rem;
  }

  @media (max-width: 400px) {
    font-size: 0.5rem;
    margin-left: 2rem;
  }

  @media (max-width: 300px) {
    margin-left: 1.5rem;
  }

  a {
    text-decoration: none;

    &:hover {
      color: #fec667;
    }
  }
`;
