/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderBody, SliderTitle } from "../../../styles/School.module.js";
import Link from "next/link.js";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = ({ data }) => {
  return (
    <SliderBody>
      <h4 className="mb-4">Similar listing</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        slidesPerGroup={3}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          // when window width is >= 640px
          300: {
            width: 300,
            slidesPerView: 1
          },
          500: {
            width: 500,
            slidesPerView: 1
          },
          640: {
            width: 640,
            slidesPerView: 1
          },
          // when window width is >= 768px
          900: {
            width: 900,
            slidesPerView: 2
          }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item, key) => (
          <SwiperSlide key={key}>
            <div>
              <img
                style={{ objectFit: "cover" }}
                className="cardImage"
                src={item?.image || "/assets/schoolPlaceholder.jpg"}
                alt=""
              />
              <section>
                <div>
                  <SliderTitle>{item?.schoolName}</SliderTitle>
                  <h5> {item?.department} </h5>
                </div>
                <div>
                  <Link href={`/search/${item?._id}`}>
                    <button> more</button>
                  </Link>
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderBody>
  );
};

export default Slider;
