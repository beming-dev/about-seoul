import "./style.scss";

const PopularPost = ({ title, watch, time, img, id }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  watch = numberWithCommas(watch);
  return (
    <div className={`popular-post popular-0${id + 1}`}>
      <img src={`images/src/${img}`} alt="" className="left-img" />
      <div className="conf">
        <span className="title">{title}</span>
        <div className="about">
          <img src="images/icons/watch.png" alt="watch" />
          <span className="watch">{watch}</span>
          <span className="bar">|</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
