import React from "react";

export default function BlogPost({ data }) {
  return (
    <div className="blog-post">
      <div className="card-img-container">
        <img src={data.picture} alt={data.desc} className="post-img" />
      </div>
      <div className="card-text-container">
        <h3 className="post-title">{data.name}</h3>
        <h5 className="post-date">{data.date_create.substr(0, 10)}</h5>
      </div>
    </div>
  );
}
