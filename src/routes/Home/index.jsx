import Carousel from "../../components/Carousel";
import Navigation from "../../components/Navigation";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="bg-cover"></div>
      <Navigation />
      <div className="content">
        <div className="wrap">
          <span className="title">Seongsan Bridge</span>
          <span className="description">
            The Seongsan Bridge is the 12th bridge that crosses the Han River in
            South Korea. The bridge was completed in 1980.
          </span>
          <div className="icons">
            <button>Learn more</button>
            <div className="bookmark-out">
              <img src="images/icons/bookmark.png" alt="bookmark" />
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
