import "./style.scss";
import Navigation from "../../components/Navigation";
import React, { useRef, useEffect } from "react";
import Footer from "../../components/Footer";
import Scroll from "../../components/Scroll";

const History = () => {
  const slide = useRef();
  const imgLeft = useRef();
  const imgRight = useRef();
  const container = useRef();
  const history = useRef();
  let isClick = false;

  const onMouseDown = (e) => {
    e.preventDefault();
    isClick = true;
  };

  const onMouseMove = (e) => {
    if (isClick) {
      let pos = e.pageX - container.current.getBoundingClientRect().left - 5;
      if (pos < 0) pos = 0;
      else if (pos >= imgRight.current.width - 5)
        pos = imgRight.current.width - 5;
      slide.current.style.left = `${pos}px`;
      imgLeft.current.style.width = `${pos}px`;
    }
  };

  const onMouseUp = () => {
    isClick = false;
  };

  useEffect(() => {
    let mSlide = slide.current;
    let mHistory = history.current;
    mSlide.addEventListener("mousedown", onMouseDown);
    mHistory.addEventListener("mousemove", onMouseMove);
    mHistory.addEventListener("mouseup", onMouseUp);

    return () => {
      mSlide.removeEventListener("mousedown", onMouseDown);
      mHistory.removeEventListener("mousemove", onMouseMove);
      mHistory.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className="history" ref={history}>
      <Scroll />

      <Navigation />
      <div className="content content-01">
        <span className="title">History of Seoul</span>
        <div className="line"></div>
        <span className="description">
          Located at the heart of the Korean Peninsula, Seoul has always been an
          important strategic point throughout the centuries in terms of defense
          and the economy, from one kingdom to the next. The three kingdoms of
          Baekje, Goguryeo, and Silla (BCE 57 – CE 688) all fought over the area
          that is now Korea’s capital.{" "}
        </span>
      </div>
      <div className="content content-02">
        <span className="background-text">21C</span>
        <div className="left intro">
          <span className="date">November 2010</span>
          <span className="title">The 2010 G20 Seoul Summit was held</span>
          <span className="description">
            The 2010 G20 Seoul Summit was the fifth meeting of the G20 heads of
            government/heads of state, to discuss the global financial system
            and the world economy, which took place in Seoul, South Korea, on
            November 11–12, 2010. South Korea was the first non-G8 nation to
            host a G20 leaders' summit.
          </span>
        </div>
        <div className="right">
          <img src="images/src/history-01.png" alt="player" className="img" />
          <div className="cover"></div>
          <img src="images/icons/play.png" alt="play" className="play" />
        </div>
      </div>
      <div className="content content-03">
        <img src="images/src/history_02.png" alt="" className="background" />
        <div className="intro">
          <span className="date">May 2013</span>
          <span className="title">Namdaemun was officially reopened</span>
          <span className="description">
            Construction had been delayed by four months due to harsh weather
            conditions in Seoul. On 17 February 2013, the gate was 96%
            completed, and all steel-frame scaffolding had been removed. It was
            officially reopened on 5 May 2013.
          </span>
        </div>
      </div>
      <div className="content content-04">
        <span className="date">October 2015</span>
        <span className="title">
          Seoul celebrated the 10th year of <br />
          Cheonggyecheon Restoration Project
        </span>
        <div className="container" ref={container}>
          <div className="left-container" ref={imgLeft}>
            <img
              src="images/src/history_03.png"
              alt="left"
              className="img left"
            />
          </div>
          <div className="slider" ref={slide}>
            <img src="images/icons/slide.png" alt="slide" className="slide" />
          </div>
          <img
            src="images/src/history_04.png"
            alt="right"
            className="img right"
            ref={imgRight}
          />
          <span className="description">
            The first chapter of the Cheonggyecheon restoration finished in
            2005. Although some people argue that the project was conducted in
            an extreme haste, it is remarkable that the project identified
            practical scope of work in the complicated downtown area and
            completed it in a short span of time and in an efficient manner that
            minimized inconvenience.
            <br />
            <br />
            The new Cheonggyecheon was not simply a restoration, but a
            re-creation. It was basically about demolishing the coverage and
            elevated highway and creating a pedestrian-oriented and eco-friendly
            stream. Triggered by the re-creation of such a public space, the
            revitalization of the urban area is still going on today.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
