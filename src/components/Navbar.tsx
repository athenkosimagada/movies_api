import { useEffect, useState } from "react";
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
  const [activeLink, setActiveLink] = useState("");
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [boxShadow, setBoxShadow] = useState("transparent");

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    const currentPath = window.location.pathname;

    const movieOrTvPathRegex = /^(\/movie\/\d+|\/tv\/\d+)$/;
    const isMovieOrTvPath = movieOrTvPathRegex.test(currentPath);

    if (isMovieOrTvPath) {
      setActiveLink("/movies&shows");
      localStorage.setItem("activeLink", "/movies&shows");
    } else if (!storedActiveLink || currentPath == "/") {
      setActiveLink("/");
      localStorage.setItem("activeLink", "/");
    } else {
      setActiveLink(currentPath);
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      // Change the background color based on the scroll position
      if (scrollPosition > 0) {
        setNavbarBg("#0F0F0F");
        setBoxShadow("0 2px 5px rgba(250, 250, 250, 0.1)");
      } else {
        setNavbarBg("transparent");
        setBoxShadow("none");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLinkClick(to: string) {
    setActiveLink(to);
    setToggle(false);

    localStorage.setItem("activeLink", to);
  }

  function getWidth(): number {
    return window.innerWidth;
  }

  window.addEventListener("resize", () => {
    setWidth(getWidth());
  });

  function handleClick() {
    setToggle(!toggle);
  }

  const links = (
    <>
      <CustomLink
        to="/"
        isActive={activeLink === "/"}
        onClick={() => handleLinkClick("/")}
      >
        Home
      </CustomLink>
      <CustomLink
        to="/movies&shows"
        isActive={activeLink === "/movies&shows"}
        onClick={() => handleLinkClick("/movies&shows")}
      >
        Movies & Shows
      </CustomLink>
      <CustomLink
        to="/support"
        isActive={activeLink === "/support"}
        onClick={() => handleLinkClick("/support")}
      >
        support
      </CustomLink>
      <CustomLink
        to="/subscriptions"
        isActive={activeLink === "/subscriptions"}
        onClick={() => handleLinkClick("/subscriptions")}
      >
        Subscriptions
      </CustomLink>
    </>
  );
  return (
    <div
      className="container navbar"
      style={{ backgroundColor: navbarBg, boxShadow: boxShadow }}
    >
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
          <ul className="nav clicked">{links}</ul>
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
                <ul className="nav-togggle clicked">{links}</ul>
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
