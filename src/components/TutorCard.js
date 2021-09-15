import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tutorPic from "../images/tutorPic.png";

const TutorCard = ({
  tutorUser,
  id,
  subject,
  tutorProfile,
  availability,
  hourlyRate,
}) => {
  return (
    <div className="tutor-card d-flex flex-row">
      <div>
        <img src={tutorPic} alt="image" />
      </div>
      <div className="d-flex flex-column ">
        <h3>{tutorUser.firstname}</h3>
        <div className="d-flex flex-row">
          <h5>21 active students</h5>
          <h5>138 lessons</h5>
        </div>
        <div className="d-flex flex-row flex-wrap ">
          <h5 className="hello">{tutorProfile.description}</h5>
        </div>
        <h4>Read More</h4>
      </div>
      <div className="d-flex flex-column ml-5">
        <div className="d-flex flex-row">
          <h5>10,5 star reviews</h5>
          <h5>$15/hr</h5>
        </div>
        <button className="btn-7">Book trial lesson</button>
        <button className="btn-8">Message</button>
      </div>
    </div>
  );
};

export default TutorCard;
