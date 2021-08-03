import ArticleCard from "../../components/ArticleCard";
import Navigation from "../../components/Navigation";
import "./style.scss";

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

const News = () => {
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
          {articleInfo.map((info) => (
            <ArticleCard
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
          <iframe
            title="seoul"
            width="45%"
            height="100%"
            src="https://youtu.be/f8GPs4Pmlvo?autoplay=1&mute=1"
            frameborder="0"
          ></iframe>
          <div className="list"></div>
        </div>
      </div>
      <div className="content-04 content"></div>
      <div className="content-05 content"></div>
    </div>
  );
};

export default News;
