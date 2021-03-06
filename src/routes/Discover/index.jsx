import Navigation from "../../components/Navigation";
import { useEffect, useRef, useState } from "react";
import { attractionInfo } from "./info";
import "./style.scss";
import Footer from "../../components/Footer";

const Discover = () => {
  // let wheeling = false;
  const discover = useRef();
  const [curNum, setCurNum] = useState(0);
  const [curCat, setCurCat] = useState(0);

  let numList = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
  let category = ["Overview", "Map", "Reviews", "Ticket"];
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
    <div className="discover">
      <Navigation />
      <Navigation black={true} />
      <img
        src={`images/background/${attractionInfo[curNum].bg}`}
        alt="bg"
        className="bg"
      />
      <div className="bg-cover"></div>
      <div className="content" ref={discover}>
        <div className="left">
          <img src="images/src/wheel.png" alt="line" className="line" />
          <div className="num-container">
            <img
              src="images/icons/circle_yellow.png"
              alt="circle"
              className="circle"
            />
            {numList.map((num, i) => (
              <li key={i} className={`num num-0${((curNum + i) % N) + 1}`}>
                {num}
              </li>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="container">
            <span className="title">Tourist attraction</span>
            <span className="description">
              Check out all the hot spots Seoul has to offer
            </span>
            <div className="attraction">
              <div className="categories">
                {category.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setCurCat(i);
                    }}
                    className={i === curCat ? "chosen" : ""}
                  >
                    {item}
                  </li>
                ))}
              </div>
              <div className="main">
                <div className="instruction">
                  <span className="name">{attractionInfo[curNum].name}</span>
                  <span className="sub-name">
                    {attractionInfo[curNum].subName}
                  </span>
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
                {curNum % 3 === 0 ? (
                  <div className="hotspot-01 hotspot">
                    <img
                      src="images/icons/btn-01.png"
                      alt="hotspot"
                      className="ico"
                    />
                    <img
                      src="images/icons/popup-01.png"
                      alt="popup"
                      className="popup"
                    />
                  </div>
                ) : (
                  <></>
                )}
                {curNum % 3 === 0 ? (
                  <div className="hotspot-02 hotspot">
                    <img
                      src="images/icons/btn-02.png"
                      alt="hotspot"
                      className="ico"
                    />
                    <img
                      src="images/icons/popup-02.png"
                      alt="popup"
                      className="popup"
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-content">
        <span className="title">Tourist attraction</span>
        <span className="description">
          Check out all the hot spots Seoul has to offer
        </span>
        {attractionInfo.map((item, i) => {
          if (i < 3) {
            return (
              <div className={`item item-0${i + 1}`} key={i}>
                <div className="categories">
                  {category.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setCurCat(i);
                      }}
                      className={i === curCat ? "chosen" : ""}
                    >
                      {item}
                    </li>
                  ))}
                </div>
                <img
                  src={`images/src/${attractionInfo[i].img}`}
                  alt="bg"
                  className="item-bg"
                />
                <span className="name">{attractionInfo[i].name}</span>
                <img
                  src="images/icons/bookmark3.png"
                  alt="bookmark"
                  className="bookmark"
                />
                <div className="user">
                  <img
                    src="images/icons/star.png"
                    alt="star"
                    className="star"
                  />
                  <span className="rate">{attractionInfo[i].rate}</span>
                  <span className="reviews">
                    ({attractionInfo[i].review} reviews)
                  </span>
                </div>
                <span className="about">{attractionInfo[i].about}</span>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
