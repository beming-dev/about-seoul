import "./style.scss";

const ArticleCard = ({ img, title, description, date, watch }) => {
  return (
    <div className="article-card">
      <img src={`images/src/${img}`} alt="news_card" className="news-img" />
      <div className="txt-box">
        <span className="txt-01">{title}</span>
        <span className="txt-02">{description}</span>
        <div className="post-info"></div>
        <div className="post-info">
          <img src="images/icons/clock.png" alt="clock" />
          <span className="txt-03 date">Dec 25, 2021</span>
          <span className="txt-03 bar">|</span>
          <img src="images/icons/watch.png" alt="watch" />
          <span className="txt-03">19,627</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
