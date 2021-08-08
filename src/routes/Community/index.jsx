import "./style.scss";

import Navigation from "../../components/Navigation";
import Detail from "../../components/Detail";
import Tip from "../../components/Tip";
import { detail, tip } from "./info";

const Community = () => {
  return (
    <div className="community">
      <Navigation />
      <img
        src="images/background/community_back.png"
        alt="bg"
        className="background-img"
      />
      <div className="content-01 content">
        <span className="txt-01">Discover and share</span>
        <span className="txt-02">Connect with Fellow Travelers</span>
        <span className="txt-03">
          Ask questions. Get information. Discover, share and book authentic
          experiences. Exclusively for travel in smaller communities &
          lesser-known places.
        </span>
        <div className="details">
          {detail.map((detail, i) => (
            <Detail
              key={i}
              img={detail.img}
              name={detail.name}
              num={detail.num}
            />
          ))}
        </div>
      </div>

      <div className="content-02 content">
        <span className="title">Best Travel Tips</span>
        <span className="description">Advice from a professional traveler</span>
        <div className="tips">
          <div className="left">
            <Tip
              id="1"
              img={tip[0].img}
              title={tip[0].title}
              name={tip[0].name}
              time={tip[0].time}
            />
          </div>
          <div className="right">
            <div className="top">
              <Tip
                id="2"
                img={tip[1].img}
                title={tip[1].title}
                name={tip[1].name}
                time={tip[1].time}
              />
            </div>
            <div className="bottom">
              <Tip
                id="3"
                img={tip[2].img}
                title={tip[2].title}
                name={tip[2].name}
              />
              <Tip
                id="4"
                img={tip[3].img}
                title={tip[3].title}
                name={tip[3].name}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-03 content"></div>
      <div className="content-04 content"></div>
    </div>
  );
};

export default Community;
