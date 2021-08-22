import "./style.scss";

const ReporterCard = ({ face, name, about, id, mAbout }) => {
  const cardStyle = {
    left: `${(494 + 39) * id}px`,
  };
  return (
    <div className={`reporter-card`} style={cardStyle}>
      <img src={`images/src/${face}`} alt="profile" className="face" />
      <div className="field">
        <span className="name">{name}</span>
        <span className="about">{about}</span>
        <span className="mAbout">{mAbout}</span>
      </div>
    </div>
  );
};

export default ReporterCard;
