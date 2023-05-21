import React from "react";
import { useGlobalContext } from "./context";
import News from "./News";
import { nanoid } from "nanoid";
const NewsItem = () => {
  const { categoriesByNews } = useGlobalContext();
  return (
    <div>
      <div className="container text-center news-items">
        <div className="row">
          {categoriesByNews.map((news) => {
            return (
              <div className="col-md-4" key={nanoid()}>
                <News news={news}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
