import React from "react";

export default function MainScreen({data}) {
  return (
    <div className="main-screen" style={{backgroundImage: `url(${data.picture})` }}>
      <div className="main-screen--text">
        <h4 className="text-cathegory">{data.topic}</h4>
        <h1 className="text-title">{data.name}</h1>
        <div className="text-info">
          <h5 className="text-date">{data.date_create.substr(0, 10)}</h5>
        </div>
      </div>
    </div>
  );
}
