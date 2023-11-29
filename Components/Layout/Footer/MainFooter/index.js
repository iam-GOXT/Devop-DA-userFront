import React from "react";
import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import {
  FooterBody,
  FooterImage,
  FooterItems,
  FooterMedia,
  FooterSpan
} from "../../../../styles/Footer.module";

const MainFooter = () => {
  return (
    <FooterBody>
      <FooterItems>
        <div>
          <ul>
            <p>Quick Links</p>

            <li>
              <Link
                href="https://japa.travel/study-in-europe-consultation/"
                passHref
                target="_blank"
              >
                Consultation
              </Link>
            </li>
            <li>
              <Link
                href="https://japa.travel/work-in-europe/"
                passHref
                target="_blank"
              >
                Work In Europe
              </Link>
            </li>
            <li>
              <Link
                href="https://japa.travel/schengen-visas/"
                passHref
                target="_blank"
              >
                Schengen Visas
              </Link>
            </li>
            <li>
              <Link
                href="https://japa.travel/study-abroad/"
                passHref
                target="_blank"
              >
                Study In Europe
              </Link>
            </li>
            <li>
              <Link
                href="https://setlinn.com/explore/"
                passHref
                target="_blank"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="https://japa.travel/videos/" passHref target="_blank">
                Videos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <FooterImage
            src="/assets/japaSecondaryLogo.png"
            alt="footer"
            width={200}
            // height={80}
          />

          <FooterMedia>
            <Link href="https://twitter.com/d_arkaden" passHref target="_blank">
              <span>
                <FiTwitter />
              </span>
            </Link>

            <Link
              href="https://web.facebook.com/destiney.arkaden"
              passHref
              target="_blank"
            >
              <span>
                <RiFacebookCircleLine />
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/company/destiney-arkaden/"
              passHref
              target="_blank"
            >
              <span>
                <TbBrandLinkedin />
              </span>
            </Link>
          </FooterMedia>
        </div>
      </FooterItems>

      <FooterSpan>
        <Link
          href="https://japa.travel/privacy-policy/"
          passHref
          target="_blank"
        >
          &copy; OjiraSoft
        </Link>
        All rights reserved
        <Link
          href="https://japa.travel/terms-and-conditions/"
          passHref
          target="_blank"
        >
          Terms & Conditions
        </Link>
        |
        <Link
          href="https://japa.travel/privacy-policy/"
          passHref
          target="_blank"
        >
          Privacy Policy
        </Link>
      </FooterSpan>
    </FooterBody>
  );
};

export default MainFooter;
