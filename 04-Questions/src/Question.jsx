import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="question">
      <div className="title">
        {isClicked ? (
          <div>
            {title}
            <div className="info">{info}</div>
          </div>
        ) : (
          title
        )}
      </div>
      <button
        className="round"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {isClicked ? <div>-</div> : <div>+</div>}
      </button>
    </div>
  );
};

export default Question;
