import { Link } from "react-router-dom";
import "./UnAuthorized.css";

const UnAuthorized = () => {
  return (
    <div className="unauth-container">
      <div className="unauth-content">
        <h1 className="error-number text-danger">403</h1>

        <h2 className="error-heading">Access Denied</h2>

        <p className="error-description">
          You don’t have permission to access this page.
          If you believe this is a mistake, please contact support.
        </p>

        <Link to="/" className="back-home-btn bg-danger">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnAuthorized;