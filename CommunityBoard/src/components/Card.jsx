import React from "react";
import "../index.css";

const Card = (props) => {

    const handleButtonClick = () => {
    window.open(props.documentationUrl, "_blank");
};

  return (
    <div className="game-card">
      <h1>{props.title}</h1>
      <img src={props.logo} alt="Image" className="game-img" />
      <p className="card-description">{props.description}</p>
      <div className="card-button-container">
        <button className="card-button" onClick={handleButtonClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
