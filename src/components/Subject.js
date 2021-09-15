import React from "react";
import SubjectCard from "./SubjectCard";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Subject = ({ subjects }) => {
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="subject">
      <div className="container-fluid d-flex flex-column justify-content-center align-content-center flex-wrap subject-2">
        <div className="d-flex  flex-column align-content-center flex-wrap mb-4">
          <h1>Amazing things are happening</h1>
          <div className="d-flex justify-content-center">
            <button className="btn-5"></button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <h2>
          <strong>Popular Educational Services</strong>
        </h2> */}
        {subjects.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Slider {...settings}>
            {subjects.map((subject) => (
              <SubjectCard subject={subject} key={subject.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Subject;
