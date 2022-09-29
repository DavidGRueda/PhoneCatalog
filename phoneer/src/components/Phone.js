import React, { useState } from "react";
import "./Phone.css";

function Phone({
  color,
  id,
  description,
  imageFileName,
  name,
  manufacturer,
  price,
  processor,
  ram,
  screen,
}) {
  const img_path = `/assets/${imageFileName}`;
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  function toggleInfo() {
    setShowMoreInfo(!showMoreInfo);
  }

  if (showMoreInfo) {
    return (
      <div className="card">
        <div className="img-cont">
          <img src={img_path} alt="" />
        </div>
        <div className="info-cont">
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="lower-bar">
            <p>
              <strong>Screen: </strong>
              {screen}
            </p>
            <p>
              <strong>Ram:</strong> {ram}
            </p>
            <p>
              <strong>Processor: </strong> {processor}
            </p>
            <i
              className="fa-solid fa-circle-chevron-left"
              onClick={() => toggleInfo()}
            ></i>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="img-cont">
          <img src={img_path} alt="" />
        </div>
        <div className="info-cont">
          <div className="main-info">
            <div className="name-manuf">
              <h2>{name}</h2>
              <p>{manufacturer}</p>
            </div>
            <div className="price">
              <h2>{price}$</h2>
            </div>
          </div>
          <div className="lower-bar">
            <i className="fa-solid fa-droplet"></i>
            <p>{color}</p>
            <i
              className="fa-solid fa-circle-info"
              onClick={() => toggleInfo()}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
