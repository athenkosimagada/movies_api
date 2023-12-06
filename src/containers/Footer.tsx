import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="footer__nav">
          <div className="footer__page">
            <h3>Home</h3>
            <div className="footer__links">
              <Link to="#">Categories</Link>
              <Link to="#">Devices</Link>
              <Link to="#">Pricing</Link>
              <Link to="#">FAQ</Link>
            </div>
          </div>
          <div className="footer__page">
            <h3>Movies</h3>
            <div className="footer__links">
              <Link to="#">Gernes</Link>
              <Link to="#">Trending</Link>
              <Link to="#">New Release</Link>
              <Link to="#">Popular</Link>
            </div>
          </div>
          <div className="footer__page">
            <h3>Shows</h3>
            <div className="footer__links">
              <Link to="#">Gernes</Link>
              <Link to="#">Trending</Link>
              <Link to="#">New Release</Link>
              <Link to="#">Popular</Link>
            </div>
          </div>
          <div className="footer__page">
            <h3>Support</h3>
            <div className="footer__links">
              <Link to="#">Contact Us</Link>
            </div>
          </div>
          <div className="footer__page">
            <h3>Subscription</h3>
            <div className="footer__links">
              <Link to="#">Plans</Link>
              <Link to="#">Features</Link>
            </div>
          </div>
          <div className="footer__page">
            <h3>Connect With Us</h3>
            <div className="footer__socials">
              <Link to="#">
                <FaFacebookF />
              </Link>
              <Link to="#">
                <FaXTwitter />
              </Link>
              <Link to="#">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__rights">
          <span>@2023 streamvib, All Rights Reserved</span>
          <div className="footer__rights-links">
            <Link to="#">Terms of Use</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
