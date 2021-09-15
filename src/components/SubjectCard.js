import React from "react";

const SubjectCard = ({ subject }) => {
  const s = {
    background: `url(${subject.image})`,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply",
    backgroundPosition: "center center",
  };

  return (
    <div>
      <div key={subject.id}>
        <div className="card-1" style={s}>
          <h4>Masterclass</h4>
          <h2>{subject.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
