import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTutors } from "../actions/tutorAction";
import TutorCard from "../components/TutorCard";

const FindaTutor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTutors());
  }, [dispatch]);

  const tutors = useSelector((state) => state.tutors);
  // console.log(tutor);

  useEffect(() => {
    console.log("orders", tutors);
  }, [tutors]);

  return (
    <div>
      <h1>Tutors available:</h1>
      {tutors.tutor.map((state) => (
        <TutorCard
          tutorUser={state.tutorUser}
          id={state._id}
          key={state._id}
          subject={state.subject}
          tutorProfile={state.tutorProfile}
          availability={state.availability}
          hourlyRate={state.hourlyRate}
        />
      ))}
    </div>
  );
};

export default FindaTutor;
