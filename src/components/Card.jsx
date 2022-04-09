import React from "react";
import Rating from "@mui/material/Rating";


const Card = ({ img, savings, title, rate, price, salePrice }) => {
  return (
    <div className="card_container">
      <div>
        <img src={img} alt=""></img>
        <div className="discountPin">
          <p>{`${parseInt(savings)}%off`}</p>
        </div>
        <p className="card_title">{title}</p>
      </div>
      <div>
        <div className="rating">
          <p>Steam Review</p>
          <Rating
            size="large"
            value={parseFloat(rate) / 2}
            readOnly
            precision={0.1}
          />
        </div>
        <div className="price_container">
          <h3>{` $${price} `}</h3>
          <h2>{`$${salePrice}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
