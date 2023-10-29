import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
function Header() {
  const [width, setWidth] = useState<number>(getWidth());
  function getWidth(): number {
    return window.innerWidth;
  }

  window.addEventListener("resize", () => {
    setWidth(getWidth());
  });
  return (
    <div className="hero">
      <div className="content">
        <h1>The Best Straming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.{" "}
          {width > 767 && (
            <span>
              With StreamVibe, you can enjoy a wide variety of content,
              including the latest blockbusters, classic movies, popular TV
              shows, and more. You can also create your own watchlists, so you
              can easily find the content you want to watch.
            </span>
          )}
        </p>
        <div className="btn-watch">
          <Link to="/">
            <FaPlay />
            <span>Start Watching Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
