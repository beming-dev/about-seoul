import "./style.scss";

const VideoCard = ({
  title,
  watch,
  comment,
  length,
  selected,
  setSelected,
  id,
}) => {
  const onClick = () => {
    console.log(id);
    setSelected(id);
  };
  return (
    <div
      className={selected ? "video-card selected" : "video-card"}
      onClick={onClick}
    >
      <span className="title">{title}</span>
      <div className="info">
        <div className="wc">
          <img src="images/icons/watch2.png" alt="" className="watch-img" />
          <span className="watch">{watch}</span>
          <span className="bar">|</span>
          <img src="images/icons/comment.png" alt="" className="comment-img" />
          <span className="comment">{comment}</span>
        </div>
        <span className="length">{length}</span>
      </div>
    </div>
  );
};

export default VideoCard;
