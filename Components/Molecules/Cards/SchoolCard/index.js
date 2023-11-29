/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { BsFillBookFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Contact from "../Contact";
import {
  CardContent,
  BigBold,
  Bold,
  SchoolImg,
  AddressTab,
} from "../../../../styles/Card.module";

const SchoolCard = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div>
        <CardContent image={data?.image || "/assets/schoolPlaceholder.jpg"}>
          <p onClick={() => router.push("/")}>Home &gt; back</p>

          <SchoolImg>
            <div>
              <img
                className="schoolLogo"
                // src={data?.logo || "/assets/schoolPlaceholder.jpg"}
                src={data?.logo || "/assets/schoolPlaceholder.jpg"}
                alt=""
              />
            </div>

            <div>
              <BigBold>{data?.department}</BigBold>
              <Bold>{data?.schoolName}</Bold>

              <AddressTab>
                <div>
                  <HiLocationMarker size={23} /> {data?.country}
                </div>

                <div>
                  <BsFillBookFill size={23} /> {data?.faculty}
                </div>
                <div>
                  <FaEnvelopeOpenText /> {data?.fee}
                </div>
              </AddressTab>
            </div>
          </SchoolImg>
        </CardContent>

        <Contact data={data} />
      </div>
    </>
  );
};

export default SchoolCard;
