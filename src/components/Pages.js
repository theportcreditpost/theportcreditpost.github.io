import React, { useEffect, useState } from "react";
import "./Pages.css";
import { useParams } from "react-router-dom";
import { hero } from "./dummyData";

const Page = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <main>
          <div className="container">
            <section className="mainContent details">
              <h1 className="title">{item.title}</h1>
              <div className="author">
                <span>by</span>
                <img src={item.authorImg} alt="" />
                <p>{item.authorName}</p>
                <label htmlFor="">{item.time}</label>
              </div>
              <div className="top">
                {item.desc.map((data) => {
                  return (
                    <>
                      <p>{data.para1}</p>
                      <p>{data.para2}</p>
                    </>
                  );
                })}
              </div>
              <img src={item.cover} alt="" />
              <div className="bottom">
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  );
                })}
              </div>
              <div className="quote">
                <i className="fa fa-quote-left"></i>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.quote}</p>
                    </>
                  );
                })}
              </div>
              <div className="top">
                {item.desc.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Page;
