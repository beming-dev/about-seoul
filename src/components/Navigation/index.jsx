import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./style.scss";

const Navigation = ({ black }) => {
  const [search, setSearch] = useState(false);

  return (
    <nav className="Navigation">
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
        <img
          src={black ? "images/icons/my_b.png" : "images/icons/my.png"}
          alt="my"
        />
      </div>
    </nav>
  );
};

export default Navigation;
