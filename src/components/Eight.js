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

export default function Eight() {
  return (
    <div class="px-4 pt-5 my-5 text-center border-bottom bg-warning">
      <h1 class="display-4 fw-bold text-black">CONTACT US</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 text-black">
          Quickly design and customize responsive mobile-first sites with
        </p>
      </div>
      <div class="overflow-hidden">
        <div class="container px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6863.389498231873!2d76.8849314!3d30.670723049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f946f0dc6b4c1%3A0x496d901e460f7a2b!2sSector%2025%2C%20Panchkula%20Extension%2C%20Jhiwri%20Wala%2C%20Haryana%20134116!5e0!3m2!1sen!2sin!4v1696673750463!5m2!1sen!2sin"
            width="1200"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            class="btn text-white readMoreCenter btn-s mt-2 px-4"
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
