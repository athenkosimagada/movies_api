import { useState } from "react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaSnapchat,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { images } from "../constants";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";
import Social from "./Social";

function Navbar() {
  const [width, setWidth] = useState<number>(getWidth());
  const [toggle, setToggle] = useState(false);

  function getWidth(): number {
    return window.innerWidth;
  }

  window.addEventListener("resize", () => {
    setWidth(getWidth());
  });

  function handleClick() {
    setToggle(!toggle);
    console.log("worked");
  }
  return (
    <div className="navbar">
      <Link to="/">
        {width <= 414 && (
          <img className="logo" src={images.mobile} alt="Logo" />
        )}
        {width > 414 && width <= 1366 && (
          <img className="logo" src={images.laptop} alt="Logo" />
        )}
        {width > 1366 && (
          <img className="logo" src={images.desktop} alt="Logo" />
        )}
      </Link>
      {width > 867 ? (
        <>
          <ul className="nav">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/movies&shows">Movies & Shows</CustomLink>
            <CustomLink to="/support">support</CustomLink>
            <CustomLink to="/subscriptions">Subscriptions</CustomLink>
          </ul>
          <div className="navbar-icons">
            <HiOutlineSearch />
            <HiOutlineBell />
          </div>
        </>
      ) : (
        <>
          <div className="nav-right">
            <div className="navbar-icons">
              <HiOutlineSearch />
              <HiOutlineBell />
            </div>
            <div className="hamburger" onClick={handleClick}>
              <HiOutlineMenuAlt3 />
            </div>
          </div>
          {toggle && (
            <div className="navigation">
              <div className="close">
                <Link to="/" onClick={handleClick}>
                  {width <= 414 && (
                    <img className="logo" src={images.mobile} alt="Logo" />
                  )}
                  {width > 414 && width <= 1366 && (
                    <img className="logo" src={images.laptop} alt="Logo" />
                  )}
                  {width > 1366 && (
                    <img className="logo" src={images.desktop} alt="Logo" />
                  )}
                </Link>
                <div className="close-btn">
                  <HiOutlineX onClick={handleClick} />
                </div>
              </div>
              <div className="nav-mobile">
                <ul className="nav-togggle">
                  <CustomLink to="/" handleClick={handleClick}>
                    Home
                  </CustomLink>
                  <CustomLink to="/movies&shows" handleClick={handleClick}>
                    Movies & Shows
                  </CustomLink>
                  <CustomLink to="/support" handleClick={handleClick}>
                    support
                  </CustomLink>
                  <CustomLink to="/subscriptions" handleClick={handleClick}>
                    Subscriptions
                  </CustomLink>
                </ul>
                <div className="navigation-socials">
                  <Social name="Facebook" icon={<FaFacebookF />} />
                  <Social name="X" icon={<FaXTwitter />} />
                  <Social name="SnapChat" icon={<FaSnapchat />} />
                  <Social name="LinkedIn" icon={<FaLinkedinIn />} />
                  <Social name="YouTube" icon={<FaYoutube />} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Navbar;
