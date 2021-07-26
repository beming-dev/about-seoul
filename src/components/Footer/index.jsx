import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about">
        <img src="images/icons/logo.png" alt="logo" className="logo" />
        <span>Discover the diverse aspects of Seoul</span>
      </div>
      <div className="icons">
        <img src="images/icons/Facebook.png" alt="facebook" />
        <img src="images/icons/Twitter.png" alt="twitter" />
        <img src="images/icons/Instagram.png" alt="Instagram" />
      </div>
      <span className="copyright">
        © 2021 ABOUT SEOUL. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
