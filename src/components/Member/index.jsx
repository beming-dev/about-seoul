import "./style.scss";

const Member = ({
  followers,
  following,
  name,
  post,
  photo,
  photo_img,
  img,
}) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (followers >= 1000) {
    followers = followers / 1000 + "K";
  }
  if (following >= 1000) {
    following = following / 1000 + "K";
  }
  post = numberWithCommas(post);
  photo = numberWithCommas(photo);

  return (
    <div className="member">
      <img src={`images/src/${photo_img}`} alt="back" className="back_img" />
      <div className="text">
        <div className="top">
          <div className="followers">
            <span className="num">{followers}</span>
            <span className="txt">Followers</span>
          </div>
          <img src={`images/src/${img}`} alt="" className="profile" />
          <div className="following">
            <span className="num">{following}</span>
            <span className="txt">Following</span>
          </div>
        </div>
        <div className="bottom">
          <span className="name">{name}</span>
          <button className="follow-btn">Follow</button>
          <div className="written">
            <span className="posts">{post} POSTS</span>
            <span className="photos">{photo} PHOTOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
