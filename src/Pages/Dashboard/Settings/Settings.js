import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    // <div>
    //   <h1>Settings</h1>
    //   <h2>Hi</h2>
    //   <Outlet />
    //   <Link to="/dashboard">Back</Link>
    // </div>
    <>
      <h1>Settings/Account</h1>
      <p>
        You'll find the CSS styles used in Revindex Storefront follows closely
        the Bootstrap 3.x and DNN UX standard therefore making it very easy to
        style module elements simply by overriding the style rules in your
        portal CSS. Please see the video tutorial below on how to override
        styles from your portal CSS.
      </p>
    </>
  );
};

export default Settings;
