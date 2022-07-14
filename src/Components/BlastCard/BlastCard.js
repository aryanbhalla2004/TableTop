import "../BlastCard/BlastCard.css";

const BlastCard = () => {
    return (
      <div className="blast-card">
        <img src="https://placekitten.com/g/150/225" alt="" />
				<div className="overlay">
          <div className="title">50% off all tires</div>
          <div className="company">Boston Pizza</div>
          <div className="views">1.2k views</div>
        </div>
      </div>
    )
}

export default BlastCard;