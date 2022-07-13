import landingImage from "../../../util/images/landing-page.jpg";
import styles from "../LandingPage/LandingPage.module.css";
import { Button } from "react-bootstrap";
const LandingPage = () => {
  return (
    <>
      <div className={styles["stories_container"]}>
        <div className={styles["left_arrow"]}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className={styles["story_list"]}>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
          <div className={styles["story_wrapper"]}>
            <img src={landingImage} />
            <div className={styles["company_name"]}>MyTire</div>
          </div>
        </div>
        <div className={styles["right_arrow"]}>
          <i className="bi bi-chevron-right"></i>
        </div>
        <Button className={styles["filter_btn"]}>
          <i class="bi bi-filter"></i>
          <div>Filter</div>
        </Button>
      </div>
    </>
  );
};
export default LandingPage;
