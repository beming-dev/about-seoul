import "./style.scss";

const ReporterCard = ({ face, name, about, id }) => {
  const cardStyle = {
    left: `${(494 + 39) * id}px`,
  };
  return (
    <div className="reporter-card" style={cardStyle}>
      <img src={`images/src/${face}`} alt="profile" className="face" />
      <span className="name">{name}</span>
      <span className="about">{about}</span>
    </div>
  );
};

export default ReporterCard;
