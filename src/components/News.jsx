import React from "react";

const News = ({ news }) => {
  const { aurthor, description, publishedAt, title, url, urlToImage } = news;
  return (
    <div>
      <div className="card card-item" style={{ width: "18rem" }}>
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://wlos.com/resources/media/e79b57b4-cbf5-4566-ac28-7adf031945b6-large16x9_poster_6fd7176d3c194cad87f93f5662d1078a.jpg?1684203261878"
          }
          className="card-img-top img-item"
          alt={aurthor}
        ></img>
        <span className="date">{publishedAt}</span>
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 30) : "No title"}
          </h5>
          <p className="card-text">
            {description ? `${description.slice(0, 50)}...` : "No Description"}
          </p>
          <a href={url} className="btn btn-primary">
            read more
          </a>
          <p className="author">{aurthor?aurthor:'No Author'}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
