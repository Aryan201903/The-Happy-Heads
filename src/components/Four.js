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

export default function Four() {
  return (
    <div class="px-4 pt-5 my-5 text-center border-bottom bg-black">
      <h1 class="display-4 fw-bold text-warning">ABOUT US</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 text-white">
          Quickly design and customize responsive mobile-first sites with
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
      <div class="overflow-hidden">
        <div class="container px-5">
          <img
            src={require("./cebter.png")}
            class="img-fluid border shadow-lg mb-2"
            alt=""
            width="800"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            class="btn text-white readMoreCenter btn-lg px-4"
          >
            <Link to="/knowMore" style={linkStyle}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
