import React, { useState } from "react";
import Card from "./components/Card";
import cardData from "./components/card-data.json";
import Header from "./components/Header";

const App = () => {

  return (
    <div className="App">
      <Header />
      <br />
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            logo={card.logo}
            description={card.description}
            buttonText="Read Documentation"
            documentationUrl={card.documentation}
          />
        ))}
      </div>
      <br />
    </div>
  );
};

export default App;
