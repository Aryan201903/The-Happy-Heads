import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export default function One() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-3">
            HOW HAPPY ARE YOU ?
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-warning btn-lg px-4 me-md-2 readMore"
            >
              <Link to="/KnowMore" style={linkStyle}>
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={require("./aboutUs.png")}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="1000"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
