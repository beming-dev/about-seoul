import Navigation from "../../components/Navigation";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [offset, setOffset] = useState(0);
  const [dashArray, setDashArray] = useState("415 1650");

  let style = {
    strokeDasharray: dashArray,
    strokeDashoffset: offset,
  };

  let btnStyle = {
    border: "2.5px solid rgba(153, 153, 153, 0.3)",
  };

  const onEmailClick = () => {
    setOffset(0);
    setDashArray("415 1650");
  };

  const onPWClick = () => {
    setOffset(-559);
    setDashArray("415 1650");
  };
  const onSubmitClick = () => {
    setOffset(-1154);
    setDashArray("925 1650");
  };

  return (
    <div className="sign-in">
      <Navigation />
      <div className="content">
        <span className="title">Welcome Back</span>
        <span className="description">Sign in with your email account</span>
        <div className="right">
          <svg viewBox="0 -65 510 333">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD951" offset="0" id="stop876" />
                <stop stopColor="#FF5858" offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path
              d="M145.83,125.39h412.5c58,0,58,100,0,100H145.65c-58,0-58,110,0,110H524.39s24.22-.29,30.05-23.22a31.5,31.5,0,0,0-.13-16.44c-2.42-8.42-9.21-20.67-28.29-22.94a27.5,27.5,0,0,0-3.28-.17H174.39s-18.26-.43-27.42,14.79a31.32,31.32,0,0,0-3.44,22.25c2.2,11.14,9.33,21.83,26.36,25.14"
              transform="translate(-99.65 -122.89)"
              style={style}
            />
          </svg>
          <div className="form">
            <label for="email">Email</label>
            <input
              className="email"
              type="email"
              id="email"
              onFocus={onEmailClick}
            />
            <label for="password">Password</label>
            <input
              className="password"
              type="password"
              id="password"
              onFocus={onPWClick}
            />
            <input
              type="submit"
              id="submit"
              value="Submit"
              onFocus={onSubmitClick}
              style={offset !== -1154 ? btnStyle : style}
            />
          </div>
        </div>

        <span className="continue">Or continue with social media</span>
        <div className="other-login">
          <button className="google">
            <img src="images/icons/google.png" alt="google" />
            Google
          </button>
          <button className="facebook">
            <img src="images/icons/Facebook2.png" alt="google" />
            facebook
          </button>
          <button className="apple">
            <img src="images/icons/apple.png" alt="google" />
            Apple
          </button>
        </div>
        <div className="to-sign-up">
          <span className="to-sign-up">Don’t have an account? </span>
          <Link to="/signup">
            <span className="txt">Sign up now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
