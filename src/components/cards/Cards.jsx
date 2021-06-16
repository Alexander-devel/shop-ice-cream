import React from "react";
import { Card } from "../card/Card";

export const Cards = ({ cards }) => (
  <div className="Cards">
    {cards.map((item) => {
      const { id, url, info, price } = item;
      return <Card key={id} url={url} info={info} price={price} />;
    })}
  </div>
);
