import React, { useState } from "react";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";

const App = () => {
  const cards = [
    {
      id: 2523353,
      text: "Snow Tender Ice Cream",
      price: "$410.00",
    },
    {
      id: 2523245,
      text: "Snow Tender Ice Cream",
      price: "$391.00",
    },
    {
      id: 2587656,
      text: "Snow Tender Ice Cream",
      price: "$501.00",
    },
    {
      id: 5466587,
      text: "Snow Tender Ice Cream",
      price: "$726.00",
    },
    {
      id: 3546765,
      text: "Snow Tender Ice Cream",
      price: "$111.00",
    },
    {
      id: 8796753,
      text: "Snow Tender Ice Cream",
      price: "$243.00",
    },
  ];

  const [buy, setBuy] = useState(1);

  return (
    <div className="App">
        <Header buy={buy} />
        <Main cards={cards}/>
        <Footer />
    </div>
  );
};

export default App;
