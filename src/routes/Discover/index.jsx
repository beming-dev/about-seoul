import Navigation from "../../components/Navigation";
import { useEffect, useRef, useState } from "react";
import { attractionInfo } from "./info";
import "./style.scss";

const Discover = () => {
  // let wheeling = false;
  const discover = useRef();
  const [curNum, setCurNum] = useState(0);

  let numList = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
  let N = numList.length;
  const [using, setUsing] = useState(false);

  const onWheel = (e) => {
    if (!using) {
      setUsing(true);

      if (e.deltaY < 0) {
        setCurNum((curNum + 1 + N) % N);
      } else {
        setCurNum((curNum - 1 + N) % N);
      }
      setTimeout(() => {
        setUsing(false);
      }, 500);
    }
  };

  useEffect(() => {
    discover.current.addEventListener("wheel", onWheel);

    return () => {
      discover.current.removeEventListener("wheel", onWheel);
    };
  });

  return (
    <div className="discover" ref={discover}>
      <Navigation />
      <img
        src={`images/background/${attractionInfo[curNum].bg}`}
        alt="bg"
        className="bg"
      />
      <div className="bg-cover"></div>
      <div className="content">
        <div className="left">
          <img src="images/src/wheel.png" alt="line" className="line" />
          {numList.map((num, i) => (
            <li key={i} className={`num num-0${((curNum + i) % N) + 1}`}>
              {num}
            </li>
          ))}
        </div>
        <div className="right">
          <div className="container">
            <span className="title">Tourist attraction</span>
            <span className="description">
              Check out all the hot spots Seoul has to offer
            </span>
            <div className="attraction">
              <div className="categories">
                <li>Overview</li>
                <li>Map</li>
                <li>Reviews</li>
                <li>Ticket</li>
              </div>
              <div className="main">
                <div className="instruction">
                  <span className="name">{attractionInfo[curNum].name}</span>
                  <div className="user">
                    <img
                      src="images/icons/star.png"
                      alt="star"
                      className="star"
                    />
                    <span className="rate">{attractionInfo[curNum].rate}</span>
                    <span className="reviews">
                      ({attractionInfo[curNum].review} reviews)
                    </span>
                    <img
                      src="images/icons/bookmark2.png"
                      alt="bookmark"
                      className="bookmark"
                    />
                  </div>
                  <span className="about">{attractionInfo[curNum].about}</span>
                </div>
                <img
                  src={`images/src/${attractionInfo[curNum].img}`}
                  alt="attraction"
                  className="place"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
