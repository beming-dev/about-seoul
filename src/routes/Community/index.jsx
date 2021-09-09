import "./style.scss";

import Navigation from "../../components/Navigation";
import Detail from "../../components/Detail";
import Tip from "../../components/Tip";
import { detail, tip, member, popularPost } from "./info";
import Member from "../../components/Member";
import Footer from "../../components/Footer";
import PopularPost from "../../components/PopularPost";

const Community = () => {
  return (
    <div className="community">
      <Navigation />
      <div className="background-img">
        <div className="content-01 content">
          <span className="txt-01">Discover and share</span>
          <span className="txt-02">Connect with Fellow Travelers</span>
          <span className="txt-03">
            Ask questions. Get information. Discover, share and book authentic
            experiences. Exclusively for travel in smaller communities &
            lesser-known places.
          </span>
          <span className="txt-mobile">
            Ask questions. Get information. Discover, share and book authentic
            experiences.
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
        <img src="images/icons/scroll_down.png" alt="down" className="down" />
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
      <div className="content-03 content">
        <span className="title">Community Members</span>
        <span className="description">
          Discover and share authentic experiences
        </span>
        <div className="members">
          {member.map((info, i) => (
            <Member
              key={i}
              followers={info.follwers}
              following={info.following}
              name={info.name}
              post={info.post}
              photo={info.photo}
              photo_img={info.photo_img}
              img={info.img}
            />
          ))}
        </div>
      </div>
      <div className="ad">
        <span className="txt-01">DOWNLOAD OUR APP NOW</span>
        <span className="txt-02">
          Discover the diverse aspects of Seoul and share experiences
        </span>
        <img src="images/src/ad.png" alt="ad" className="back" />
        <img src="images/src/phone1.png" alt="phone" className="phone-01" />
        <img src="images/src/phone2.png" alt="ad" className="phone-02" />
      </div>
      <div className="content-04 content">
        <span className="title">Daily Posts</span>
        <span className="description">Update all posts in a loop everyday</span>
        <div className="posts">
          <div className="left">
            <img
              src="images/src/best_post.png"
              alt="best post"
              className="top"
            />
            <div className="bottom">
              <span className="txt-01">
                Everything You Need to Know Before Your Very First Trip to Seoul
              </span>
              <span className="txt-02">
                Seoul is an incredible city, brimming with mouth-watering food,
                exciting attractions and unforgettable shopping spots. The
                number of things to do...
              </span>
              <div className="about">
                <img src="images/src/writer_01.png" alt="profile" />
                <span className="name">Eleanor Pena</span>
                <img src="images/icons/dot.png" alt="dot" className="dot" />
                <span className="time">1 hours ago</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="buttons">
              <button className="btn-popular">Popular</button>
              <button className="btn-recent">Recent</button>
            </div>
            <div className="post">
              {popularPost.map((info, i) => (
                <PopularPost
                  key={i}
                  id={i}
                  title={info.title}
                  watch={info.watch}
                  time={info.time}
                  img={info.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
