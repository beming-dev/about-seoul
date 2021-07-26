import { Link } from "react-router-dom";
import "./style.scss";

const Scroll = () => {
  return (
    <Link className="mouse-scroll">
      <span className="mouse">
        <span className="mouse-movement"></span>
      </span>
      <span className="mouse-message fadeIn">scroll</span>
    </Link>
  );
};

export default Scroll;
