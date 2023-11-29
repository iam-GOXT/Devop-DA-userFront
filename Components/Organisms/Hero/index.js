/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  HeroBody,
  HeroLeft,
  HeroRight,
  Image,
  Numbers
} from "../../../styles/Landing.module.js";
import SearchInput from "../SearchInput/index.js";

const Hero = () => {
  return (
    <>
      <HeroBody>
        <HeroLeft>
          <div>
            <h1>Discover international programs offered in Europe.</h1>
            <img src="/assets/Underline.png" alt="underline" />
          </div>

          <SearchInput />

          <Numbers>
            <div>
              <h2>162+</h2>
              <img src="/assets/blue-circle.png" alt="blue" />
              <p>Cities to study in</p>
            </div>

            <div>
              <h2>220</h2>
              <img src="/assets/cream-circle.png" alt="blue" />
              <p>Participating Institutions</p>
            </div>

            <div>
              <h2>68</h2>
              <img src="/assets/cream-circle.png" alt="blue" />
              <p>Locations</p>
            </div>
          </Numbers>
        </HeroLeft>

        <HeroRight>
          <Image src="/assets/Hero.png" alt="hero" />
        </HeroRight>
      </HeroBody>
    </>
  );
};

export default Hero;
