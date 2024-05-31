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

export default function Twosection() {
  return (
    <div class="container p-5 bg-warning">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={require("./happy.png")}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-4 mb-3">
            WE CAN HELP YOU TO BE HAPPY
          </h1>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-lg px-4 me-md-2 readMore">
              <Link to="/knowMore" style={linkStyle}>
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}