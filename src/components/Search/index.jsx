import { createRef, useEffect, useRef, useState } from "react";
import "./style.scss";

const Search = ({ setSearch }) => {
  const input = useRef();
  const [hashtag, setHashtag] = useState(["Hongdae", "Travel"]);
  const clearAll = () => {
    setHashtag([]);
  };
  const onCloseClick = (index) => {
    setHashtag([
      ...hashtag.slice(0, index),
      ...hashtag.slice(index + 1, hashtag.length),
    ]);
  };
  const onEnter = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newString = e.target.value;
      if (newString.length > 10) {
        newString = e.target.value.slice(0, 10) + "...";
      }
      let newArray = hashtag;
      if (newArray.length === 4) {
        newArray.shift();
      }
      setHashtag([...newArray, newString]);
    }
  };

  useEffect(() => {
    input.current.addEventListener("keyup", onEnter);

    return () => {
      input.current.removeEventListener("keyup", onEnter);
    };
  });
  return (
    <div className="search">
      <div className="search-content">
        <div className="input-box">
          <img src="images/icons/search.svg" alt="search" className="search" />
          <input type="text" placeholder="Type here to search" ref={input} />
          <img src="images/icons/mic.png" alt="" className="mic" />
        </div>
        <span className="recent">Recent searches</span>
        <div className="hashtag">
          {hashtag.map((item, i) => (
            <div className="hashtag-item" key={i}>
              <span>{item}</span>
              <img
                src="images/icons/close.png"
                alt="close"
                onClick={() => onCloseClick(i)}
              />
            </div>
          ))}
          <span className="clear" onClick={clearAll}>
            clear all
          </span>
        </div>
      </div>
      <div
        className="exit"
        onClick={() => {
          setSearch(false);
        }}
      >
        X
      </div>
    </div>
  );
};

export default Search;
