import React from "react";
import imgIce from "../../img/ice-cream.png"
import './Card.sass'

export const Card = (props) => {
  const { url, info, price } = props;

  return (
    <div className="Card">
      <div className="img-block">
        <img src={url ? url : imgIce} alt="no" />
      </div>
      <div className="information">
        <p className="information_text">{info ? info : 'Snow Tender Ice Cream'}</p>
        <p className="price">{price ? price : '$243.00'}</p>
      </div>
    </div>
  );
}