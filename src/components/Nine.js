import "bootstrap/dist/css/bootstrap.min.css";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

export default function Nine() {
  return (
    <div class="container-fluid bg-black text-warning p-3">
      <footer class="py-3 ">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2 text-warning">Home</li>
              <li class="nav-item mb-2">Features</li>
              <li class="nav-item mb-2">Pricing</li>
              <li class="nav-item mb-2">FAQs</li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Home</li>
              <li class="nav-item mb-2">Features</li>
              <li class="nav-item mb-2">Contact</li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <img src={instagram} class="logo" alt="" />
            </li>
            <li class="ms-3">
              <img src={facebook} class="logo" alt="" />
            </li>
            <li class="ms-3">
              <img src={twitter} class="logo" alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
