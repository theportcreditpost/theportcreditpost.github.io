import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  item: { id, cover, category, title, authorName, authorImg, time },
}) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt=""></img>
        </div>
        <div className="texts">
          <span className="category">{category}</span>
          <Link to={`/page/${id}`}>
            <h1 className="titleBg">{title}</h1>
          </Link>
          <div className="author flex">
            <span>{authorName && `by ${authorName}`}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
