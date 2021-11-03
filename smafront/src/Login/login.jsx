import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">VET NET</h3>
          <span className="loginDesc">
            Grow your Network by connecting with Veterans and Businesses from all over the world. 
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <button className="loginRegisterButton">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}