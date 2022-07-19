import "./DetailPageReview.css";
const DetailPageReview = () => {
  return (
    <div className="vendor-page-review">
      <div className="vendor-page-reviewer-info">
        <img
          src={
            "https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114_960_720.jpg"
          }
          alt="chairs and tables"
          className="vendor-page-reviewer-img"
        />
        <div className="vendor-page-reviewer-name-date">
          <div className="vendor-page-reviewer-name">Sara</div>
          <div className="vendor-page-review-date">April 2022</div>
        </div>
      </div>
      <div className="vendor-page-review-content">
        If you’re looking for a weekend getaway in nature. Whether you want to
        hike, bike or just stay in the cute little cabin, it’s worth every
        second! If you’re looking for a weekend getaway in nature. Whether you
        want to hike, bike or just stay in the cute little cabin, it’s worth
        every second!
      </div>
    </div>
  );
};
export default DetailPageReview;