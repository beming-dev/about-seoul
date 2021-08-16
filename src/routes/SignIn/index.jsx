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
          <div className="form">
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="password">Password</label>
            <input type="password" id="password" />
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
