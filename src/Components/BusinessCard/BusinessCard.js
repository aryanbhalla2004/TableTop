import "./BusinessCard.css";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const BlastCard = ({ title, itemId }) => {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

    return (
      <div className="business-card" style={{userSelect: "none"}}>
        <img src="https://placekitten.com/g/160/240" alt="" />
				<div className="overlay">
          <div className="title">{title}</div>
        </div>
      </div>
    )
}

export default BlastCard;