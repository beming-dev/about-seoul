import Navigation from "../../components/Navigation";
import "./style.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in">
      <Navigation />
      <div className="content">
        <span className="title">Welcome Back</span>
        <span className="description">Sign in with your email account</span>
        <div className="right">
          <svg viewBox="-5 -65 460 301">
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
              d="M582.27,252.79c-8.4-10.86-20.37-16.6-34.61-16.6h-410a2.5,2.5,0,0,0,0,5h410c28.17,0,41,24.63,41,47.5,0,12.55-3.67,24.22-10.35,32.85a37.51,37.51,0,0,1-30.65,14.89H163.56l-.33,0c-13.67.37-25.18,6.55-33.32,18-7.35,10.32-11.4,24.16-11.4,39s4,28.67,11.4,39c7.14,10,16.87,16,28.39,17.59l.77.11.28,0a34.16,34.16,0,0,0,4.31.28h350a33.75,33.75,0,0,0,0-67.5h-350a33.73,33.73,0,0,0-32.87,41.39c-4.91-9.17-7.28-20.24-7.28-30.9,0-13.62,3.68-26.29,10.35-35.66,7.42-10.41,18-16.31,30.65-16.31v0H547.87a42.37,42.37,0,0,0,34.4-16.82c7.34-9.51,11.39-22.26,11.39-35.91S589.61,262.29,582.27,252.79ZM163.66,387.94h350a28.75,28.75,0,0,1,0,57.5h-5.75l-.28,0H164.51a39.41,39.41,0,0,1-6.65-.56,28.75,28.75,0,0,1,5.8-56.91Z"
              transform="translate(-118.51 -236.19)"
            />
          </svg>
          <div className="form">
            <label for="email">Email</label>
            <input className="email" type="email" id="email" />
            <label for="password">Password</label>
            <input className="password" type="password" id="password" />
            <input type="submit" id="submit" value="Submit" />
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
