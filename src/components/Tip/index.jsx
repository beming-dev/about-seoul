import "./style.scss";

const Tip = ({ id, img, title, name, time }) => {
  return (
    <div className={`tip tip-0${id}`}>
      <img src={`images/src/${img}`} alt="tip" className="tip-img" />
      <div className="cover"></div>
      <span className={`txt-0${id}`}>{title}</span>
      <div className={`profile profile-0${id}`}>
        <img src={`images/src/com_0${id}.png`} alt="dot" className="dot" />
        <span className="txt">{name}</span>
        {time ? (
          <img src="images/icons/dot.png" alt="dot" className="dot" />
        ) : (
          <></>
        )}
        <span className="txt">{time}</span>
      </div>
    </div>
  );
};

export default Tip;
