import { useState } from "react";
import Search from "../Search";
import "./style.scss";

const Navigation = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="Navigation">
      {search ? <Search setSearch={setSearch} /> : <></>}
      <img src="images/icons/logo.png" alt="logo" className="logo" />
      <ul className="navList">
        <li>History</li>
        <li>News</li>
        <li>Visitors</li>
        <li>Community</li>
      </ul>
      <div className="icons">
        <img
          src="images/icons/search.png"
          alt="search"
          onClick={() => setSearch(true)}
        />
        <img src="images/icons/my.png" alt="my" />
      </div>
    </div>
  );
};

export default Navigation;
