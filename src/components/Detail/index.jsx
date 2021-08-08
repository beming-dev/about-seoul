import "./style.scss";

const Detail = ({ img, name, num }) => {
  return (
    <div className="detail">
      <img src={`images/icons/${img}`} alt="img" />
      <span className="name">{name}</span>
      <span className="num">{num}</span>
    </div>
  );
};

export default Detail;
