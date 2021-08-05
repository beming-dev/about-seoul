import { useState } from "react";

import ArticleCard from "../../components/ArticleCard";
import Navigation from "../../components/Navigation";
import ReporterCard from "../../components/ReporterCard";
import VideoCard from "../../components/VideoCard";
import Footer from "../../components/Footer";
import "./style.scss";

const reporterInfo = [
  {
    face: "profile_01.png",
    name: "Leslie Alexander",
    about:
      "There is a figure who played a decisive role to promote the fierce independence movement of Korea and the brutality of Japan on March 1, 1919. It is Albert Wilder Taylor...",
  },
  {
    face: "profile_02.png",
    name: "Marvin McKinney",
    about:
      "A large number of relics from the Joseon dynasty have been excavated during construction work at Gwanghwamun Square. In particular, locations of major administrative offices of...",
  },
  {
    face: "profile_03.png",
    name: "Marvin McKinney",
    about:
      "There is a figure who played a decisive role to promote the fierce independence movement of Korea and the brutality of Japan on March 1, 1919. It is Albert Wilder Taylor...",
  },
];

const articleInfo = [
  {
    img: "news_02.png",
    title: "Seoul Introduces the Aged Infrastructure Forecasting",
    description:
      "The Seoul Metropolitan Government will implement the Seoul Infrastructure Next 100 Year Project to prepare for the...",
    date: "Dec 24, 2021",
    watch: "59,235",
  },
  {
    img: "news_03.png",
    title: "Music Festival in Hanok with 11 Different Pieces of Music",
    description:
      "This festival took place online for everyone’s safety and citizens who couldn’t go to music festivals this year due to COVID-19...",
    date: "Dec 23, 2021",
    watch: "31,621",
  },
  {
    img: "news_04.png",
    title: "Seoul Applies Universal Design to Public Restrooms",
    description:
      "The Seoul Metropolitan Government (SMG) will apply universal design to restrooms in Seoul to ensure the safe and convenient...",
    date: "Dec 23, 2021",
    watch: "19,824",
  },
];

const videoInfo = [
  {
    title: `Seoul Opens Additional 2.5Km Section on Gyeongchun Line Forest`,
    watch: "29,624",
    comment: "1,580",
    length: "24:53",
  },
  {
    title: "Yongsan Shopping Center to Rise as “Digital Maker City”",
    watch: "21,637",
    comment: "1,101",
    length: "12:32",
  },
  {
    title:
      "Second Extension of Eased Eligibility Criteria for Seoul-type Urgent Welfare",
    watch: "10,451",
    comment: "1,023",
    length: "16:04",
  },
];

const News = () => {
  const [selectedVideo, setSelectedVideo] = useState(1);

  return (
    <div className="news">
      <Navigation black={true} />
      <div className="content-01 content">
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
              <img src="images/icons/clock.png" alt="clock" />
              <span className="txt-04 date">Dec 25, 2021</span>
              <span className="txt-04 bar">|</span>
              <img src="images/icons/watch.png" alt="watch" />
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
            <li className="chosen">All</li>
            <li>City</li>
            <li>Urban Planning</li>
            <li>Economy</li>
            <li>Traffic </li>
            <div className="buttons">
              <button className="prev">
                <img src="images/icons/prev2.png" alt="prev" />
              </button>
              <button className="next">
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
      <div className="content-04 content">
        <div className="head">
          <span className="citizen-reporter">Citizen Reporter</span>
          <div className="buttons">
            <button className="prev">
              <img src="images/icons/prev2.png" alt="prev" />
            </button>
            <button className="next">
              <img src="images/icons/next2.png" alt="next" />
            </button>
          </div>
        </div>
        <div className="divider">
          <div className="inner"></div>
        </div>
        <div className="reporter-box">
          {reporterInfo.map((info, index) => (
            <ReporterCard
              key={index}
              id={index}
              face={info.face}
              name={info.name}
              about={info.about}
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
