import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "gold",
};

export default function Three() {
  return (
    <div class="container my-5">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
            src={require("./try.png")}
            alt=""
            width="500"
          />
        </div>
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-warning">% HAPPINESS</h1>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              class="btn  btn-lg px-4 me-md-2 fw-bold readMore"
            >
              <Link to="/knowMore" style={linkStyle}>
                Read More
              </Link>
            </button>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              class="rounded-lg-3"
              src={require("./pieChart.png")}
              alt=""
              width="220"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
