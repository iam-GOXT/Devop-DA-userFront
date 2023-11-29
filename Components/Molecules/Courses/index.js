/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
// import Buttons from "../../../Utils/Buttons";
import {
  CourseArticle,
  CourseBody,
  CourseList,
  CourseGallery
} from "../../../styles/SearchPage.module";

const Courses = ({ data, total }) => {
  // const router = useRouter();

  // const id = router.query.id;
  return (
    <>
      <CourseBody>
        <h4>{total} results</h4>
        <CourseList>
          {data?.map(name => {
            return (
              <div key={name._id}>
                <Link href={`/search/${name?._id}`}>
                  <CourseGallery>
                    <button>{name?.country}</button>
                    <img
                      className="cardImage"
                      src={name.image || "/assets/schoolPlaceholder.jpg"}
                      alt="name"
                    />
                    <div>
                      <section>
                        <p>
                          <img src="/assets/tag.png" />{" "}
                          <span> {name?.fee}</span>
                        </p>

                        <p>
                          <img src="/assets/book.png" />
                          <span> #{name?.faculty}</span>
                        </p>
                      </section>

                      <div>
                        <h4>{name?.department}</h4>
                        <p>{name?.schoolName}</p>
                      </div>

                      <CourseArticle>
                        <b>
                          More <img src="/assets/CaretRight.png" />
                        </b>
                      </CourseArticle>
                    </div>
                  </CourseGallery>
                </Link>
              </div>
            );
          })}
        </CourseList>

        {/* <Buttons /> */}
      </CourseBody>
    </>
  );
};

export default Courses;
