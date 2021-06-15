import React from "react";
import { Card } from '../card/Card'

export const Cards = (props) => {
  const { cards } = props;

  return (
    <div className="Cards">
      {
        cards.map(item => {
          return <Card key={item.id} url={item.url} info={item.info} price={item.price} />
        })
      }
    </div>
  );
}