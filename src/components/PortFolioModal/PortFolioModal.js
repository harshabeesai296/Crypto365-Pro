import React from "react";
import "./PortFolioModal.css";

export default function PortFolioModal({ image, name, close, id }) {
  const buttonCloseHandler = () => {
    close();
  };
  return (
    <div className="portmodal-backdrop">
      <div className="portModal-content">
        <div className="portModal-header">
          <h1>Add {name} to your Portfolio</h1>
        </div>
        <div className="portModal-coin">
          <img
            src={image}
            alt="coin-image"
            style={{
              height: "100px",
              width: "100px",
              textAlign: "center",
              borderRadius: "50%",
            }}
          ></img>
        </div>
        <h3
          style={{ fontSize: "30px", textAlign: "center", marginTop: "-20px" }}
        >
          {name}
        </h3>

        <div className="portModal-input">
          <label style={{ paddingRight: "20px" }}>
            <b style={{ fontSize: "20px", marginLeft: "-50px" }}>Quantity :</b>
          </label>
          <input type="number" style={{ marginBottom: "25px" }} />
        </div>
        <div className="submit">
          <button type="submit" className="add-button">
            Add
          </button>
          <button
            type="submit"
            className="close-button"
            onClick={buttonCloseHandler}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
