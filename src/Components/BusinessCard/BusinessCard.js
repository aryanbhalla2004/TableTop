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
          {/* <div className="company">Boston Pizza</div>
          <div className="views">1.2k views</div> */}
        </div>
      </div>
    //   <div role="button" style={{
    //     border: "1px solid",
    //     display: "inline-block",
    //     margin: "0 10px",
    //     width: "160px",
    //     userSelect: "none"
    //   }}
    //     tabIndex={0}
    //     className="card"
    //   >
    //     <div>
    //       <div>{title}</div>
    //     </div>
    //   <div
    //     style={{
    //       backgroundColor: "bisque",
    //       height: "200px"
    //     }}
    //   />
    // </div>
    )
}

export default BlastCard;