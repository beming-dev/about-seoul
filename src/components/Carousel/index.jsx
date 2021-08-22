import React, { useState } from "react";
import "./style.scss";

const dataList = [
  {
    structure: "N Seoul Tower",
    location: "Yongsan-Gu",
    img: "images/carousel/carousel_01.png",
  },
  {
    structure: "Gyeongbokgung",
    location: "Jongno-gu",
    img: "images/carousel/carousel_02.png",
  },
  {
    structure: "DDP",
    location: "Jung-gu",
    img: "images/carousel/carousel_03.png",
  },
  {
    structure: "The Hyundai Seoul",
    location: "Yeongdeungpo-gu",
    img: "images/carousel/carousel_04.png",
  },
  {
    structure: "Lotte Tower",
    location: "Songpa-Gu",
    img: "images/carousel/carousel_05.png",
  },
];

const N = dataList.length;

const Carousel = () => {
  const [selected, setSelected] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const onCarousel = (cmd) => () => {
    if (isMoving) return;
    if (cmd === "prev") {
      setSelected((selected - 1 + N) % N);
    } else {
      setSelected((selected + 1 + N) % N);
    }
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 400);
  };

  return (
    <div className="carousel">
      <span className="name">Discover Other Places in Seoul</span>
      <div className="images">
        {dataList.map(({ img, structure, location }, i) => {
          const isSelected = selected === i;
          const currentIndex = ((i - selected + 1 + N) % N) + 1;
          const className = `img-card img-0${currentIndex} item-0${i}`;
          return (
            <div className={className} key={i}>
              <div className={`cover cover-0${currentIndex}`}></div>
              <img src={img} alt="no"></img>
              <div
                className="instruction"
                style={{ opacity: isSelected ? 1 : 0 }}
              >
                <span className="structure">{structure}</span>
                <span className="location">{location}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slide-box">
        <div className="mobile-images">
          {dataList.map(({ img, structure }, i) => (
            <div className="mobile-image-box" key={i}>
              <div className="cover">
                <span>{structure}</span>
              </div>
              <img src={img} alt="no"></img>
            </div>
          ))}
        </div>
      </div>

      <div className="controller">
        <span className="start">01</span>
        <div className="slider">
          <div
            className="slider-bar"
            style={{ width: 20 * (1 + selected) + "%" }}
          ></div>
        </div>
        <span className="end">05</span>
        <img
          src="images/icons/prev.png"
          alt="prev"
          className="prev btn"
          onClick={onCarousel("prev")}
        />
        <img
          src="images/icons/next.png"
          alt="next"
          className="next btn"
          onClick={onCarousel("next")}
        />
      </div>
    </div>
  );
};

export default Carousel;
