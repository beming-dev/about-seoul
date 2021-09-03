import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./style.scss";

const Navigation = ({ black }) => {
  const [search, setSearch] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [navPos, setNavPos] = useState("-78vw");
  const [shadow, setShadow] = useState("unset");

  const onHamburgerClick = () => {
    if (navPos === "-78vw") {
      setNavPos("0");
    } else {
      setNavPos("-78vw");
    }

    if (shadow === "unset") {
      setShadow("0px 4px 20px rgba(0, 0, 0, 0.5)");
    } else {
      setShadow("unset");
    }
  };
  let mobileNavStyle = {
    left: navPos,
    boxShadow: shadow,
  };

  const list = [
    {
      cat: "Home",
      ico: "home.png",
      link: "",
    },
    {
      cat: "History",
      ico: "history.png",
      link: "history",
    },
    {
      cat: "News",
      ico: "news.png",
      link: "news",
    },
    {
      cat: "Discover",
      ico: "discover.png",
      link: "discover",
    },
    {
      cat: "Community",
      ico: "community.png",
      link: "community",
    },
  ];

  return (
    <nav className="Navigation">
      <div className="mobile-nav" style={mobileNavStyle}>
        <Link to="/signin">
          <div className="profile">
            <img
              src="images/icons/profile.png"
              alt="profile"
              className="profile-img"
            />
            <span className="in">Sign in</span>
            <img src="images/icons/next2.png" alt="next" className="next" />
          </div>
        </Link>
        <div className="search-mobile">
          <img
            src="images/icons/search.png"
            alt="search"
            className="search-ico"
          />
          <input type="text" placeholder="Search..." />
        </div>
        {list.map((item, i) => (
          <div className="item" key={i}>
            <img src={`images/src/${item.ico}`} alt="" className="icon" />
            <Link to={`/${item.link}`}>
              <span>{item.cat}</span>
            </Link>
          </div>
        ))}
      </div>
      {search ? <Search setSearch={setSearch} /> : <></>}
      <a href="/about-seoul">
        <img
          src={black ? "images/icons/logo_b.png" : "images/icons/logo.png"}
          alt="logo"
          className="logo"
        />
      </a>
      <ul className="navList">
        <Link to="/history">
          <li>History</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/discover">
          <li>Discover</li>
        </Link>
        <Link to="/community">
          <li>Community</li>
        </Link>
      </ul>
      <div className="icons">
        <img
          src={black ? "images/icons/search_b.png" : "images/icons/search.png"}
          alt="search"
          onClick={() => setSearch(true)}
        />
        <div className="logging-container">
          <img
            src={black ? "images/icons/my_b.png" : "images/icons/my.png"}
            alt="my"
            onClick={() => {
              setClicked(!clicked);
            }}
          />
          <div className={clicked ? `log-box clicked` : `log-box`}>
            <Link to="/signin">
              <span>Sign-in</span>
            </Link>
            <Link to="/signup">
              <span>Sign-up</span>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={black ? "images/src/hamburgerB.png" : "images/src/hamburger.png"}
        alt="hamburger"
        className="hamburger"
        onClick={onHamburgerClick}
      />
    </nav>
  );
};

export default Navigation;
