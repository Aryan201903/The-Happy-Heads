import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
export default function KnowMore() {
  return (
    <div>
      <div class="social-link">
        <ul>
          <li>
            <a href="https://www.facebook.com/ChitkaraU/" class="fb">
              <img src={facebook} className="knowLogo" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/chitkarau?lang=en" class="twitter"></a>
            <img src={twitter} className="knowLogo" alt="" />
          </li>
          <li>
            <a href="https://www.instagram.com/bhavneet.singh25/" class="insta">
              <img src={instagram} className="knowLogo" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/jobs/" class="linked">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="home-page">
        <h1>KNOW MORE</h1>
        <br />
        The website is still under maintainence.I will be designing more of it
        after learning more contents. The website is a mixture of reactJs
        bootstrap html and css.It also contains routing.React is a free and
        open-source front-end JavaScript library for building user interfaces
        based on components. It is maintained by Meta and a community of
        individual developers and companies. React can be used to develop
        single-page, mobile, or server-rendered applications with frameworks
        like Next.js Thank you for visiting us.
      </div>
      <br />
      <br />
      <div class="ten-content">
        <div class="ten-text">
          <h3>Designed by Aryan Garg (2110990294)</h3>
          <h4>COPYRIGHT 2023</h4>
        </div>
      </div>
    </div>
  );
}
