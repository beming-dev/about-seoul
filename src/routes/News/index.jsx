import { useState } from "react";

import ArticleCard from "../../components/ArticleCard";
import Navigation from "../../components/Navigation";
import ReporterCard from "../../components/ReporterCard";
import VideoCard from "../../components/VideoCard";
import Footer from "../../components/Footer";
import "./style.scss";
import { videoInfo, articleInfo, reporterInfo, articleCategory } from "./info";

const News = () => {
  const [selectedVideo, setSelectedVideo] = useState(1);
  const [reporter, setReporter] = useState(0);
  const [category, setCategory] = useState(0);

  const N = reporterInfo.length;
  const onReporterClick = (pos) => () => {
    if (pos === "prev") {
      if (reporter + 1 > 0) setReporter(0);
      else setReporter(reporter + 1);
    } else {
      if (reporter - 1 < -N + 1) setReporter(-N + 1);
      else setReporter(reporter - 1);
    }
  };
  const onCategoryClick = (pos) => () => {
    if (pos === "next") {
      if (category + 1 > articleCategory.length - 1)
        setCategory(articleCategory.length - 1);
      else setCategory(category + 1);
    } else {
      if (category - 1 < 0) setCategory(0);
      else setCategory(category - 1);
    }
  };

  return (
    <div className="news">
      <Navigation black={true} />
      <div className="content-01 content">
        <div className="cover"></div>
        <div className="left">
          <div className="txt-box">
            <span className="txt-01">Urban Planning News</span>
            <span className="txt-02">
              Seoul Architecture Festival 2021 Kicks Off
            </span>
            <span className="txt-03">
              Seoul was ranked 11th in the Liveable Cities Index 2021 by the
              global monthly magazine. Monocle, a global affairs and
              lifestyle...
            </span>
            <div className="post-info">
              <div className="clock"></div>
              <span className="txt-04 date">Dec 25, 2021</span>
              <span className="txt-04 bar">|</span>
              <div className="watch"></div>
              <span className="txt-04">19,627</span>
            </div>
          </div>
        </div>
        <img src="images/src/news_01.png" alt="news" className="right" />
      </div>
      <div className="content-02 content">
        <div className="head">
          <span className="latest-article">Latest Articles</span>
          <ul className="category">
            {articleCategory.map((item, i) => {
              return <li className={i === category ? "chosen" : ""}>{item}</li>;
            })}
            <div className="buttons">
              <button className="prev" onClick={onCategoryClick("prev")}>
                <img src="images/icons/prev2.png" alt="prev" />
              </button>
              <button className="next" onClick={onCategoryClick("next")}>
                <img src="images/icons/next2.png" alt="next" />
              </button>
            </div>
          </ul>
        </div>
        <div className="divider">
          <div className="inner"></div>
        </div>
        <div className="cards">
          {articleInfo.map((info, i) => (
            <ArticleCard
              id={i}
              key={i}
              img={info.img}
              title={info.title}
              description={info.description}
              date={info.date}
              watch={info.watch}
            />
          ))}
        </div>
      </div>
      <div className="content-03 content">
        <div className="grid">
          <span className="latest-video">Latest Video</span>
          <div className="divider"></div>
          <div className="video-box">
            <video src="images/video/lotteTower.mp4" controls></video>
            <div className="list">
              {videoInfo.map((info, i) => (
                <VideoCard
                  id={i}
                  key={i}
                  title={info.title}
                  watch={info.watch}
                  comment={info.comment}
                  length={info.length}
                  selected={i === selectedVideo ? true : false}
                  setSelected={setSelectedVideo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="content-04 content">
        <div className="head">
          <span className="citizen-reporter">Citizen Reporter</span>
          <div className="buttons">
            <button className="prev" onClick={onReporterClick("prev")}>
              <img src="images/icons/prev2.png" alt="prev" />
            </button>
            <button className="next" onClick={onReporterClick("next")}>
              <img src="images/icons/next2.png" alt="next" />
            </button>
          </div>
          <span className="view">View all</span>
        </div>
        <div className="divider">
          <div
            className="inner"
            style={{ width: 100 - (100 / N) * (reporter + 2) + "%" }}
          ></div>
        </div>
        <div className="reporter-box">
          {reporterInfo.map((info, index) => (
            <ReporterCard
              key={index}
              id={reporter + index}
              face={info.face}
              name={info.name}
              about={info.about}
              mAbout={info.mAbout}
            />
          ))}
        </div>
      </div>
      <div className="content-05 content">
        <img
          src="images/src/subscribe.png"
          alt="subscribe"
          className="subscribe-img"
        />
        <span className="subscribe">Subscribe</span>
        <span className="subscribe-ex">
          Sign up with your email address
          <br />
          to receive news and updates.
        </span>
        <input type="text" placeholder="Email address" />
        <img src="images/icons/send.png" alt="send" className="send" />
      </div>
      <Footer />
    </div>
  );
};

export default News;
