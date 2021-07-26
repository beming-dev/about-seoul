import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./style.scss";

const Navigation = () => {
  const [search, setSearch] = useState(false);

  return (
    <nav className="Navigation">
      {search ? <Search setSearch={setSearch} /> : <></>}
      <a href="/about-seoul">
        <img src="images/icons/logo.png" alt="logo" className="logo" />
      </a>
      <ul className="navList">
        <Link to="/history">
          <li>History</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/visitors">
          <li>Visitors</li>
        </Link>
        <Link to="/community">
          <li>Community</li>
        </Link>
      </ul>
      <div className="icons">
        <img
          src="images/icons/search.png"
          alt="search"
          onClick={() => setSearch(true)}
        />
        <img src="images/icons/my.png" alt="my" />
      </div>
    </nav>
  );
};

export default Navigation;
