import CountUp from "react-countup";

import "./style.scss";

const Detail = ({ img, name, num }) => {
  return (
    <div className="detail">
      <img src={`images/icons/${img}`} alt="img" />
      <span className="name">{name}</span>
      <CountUp start={0} end={num} delay={0} duration={2} separator=",">
        {({ countUpRef }) => (
          <div>
            <span className="num" ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Detail;
