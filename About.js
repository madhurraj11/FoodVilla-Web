 import Food from "../assets/FoodImage.jpeg";
 import { useState } from "react";
 import { Link, Outlet } from "react-router-dom";

 const About = () => {
    const [show, setShow] = useState(false);
    return (
      <div className="about-container-main">
        <div className="about-profile-container">
          {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
          {show ? (
            <>
              <Link to={"/about"}>
                <button
                  className="about-profile-button"
                  onClick={() => setShow(false)}
                >
                  Hide My Profile
                </button>
              </Link>
              <Outlet />
            </>
          ) : (
            <Link to={"profile"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(true)}
              >
                Show My Profile
              </button>
            </Link>
          )}
        </div>
        <div className="about-container">
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />
              <span>Tasty & Fresh Food</span>
            </h1>
            <h4>
              "Better you will feel if you eat a Food<span>Villa</span> healthy
              meal"
            </h4>
          </div>
          <div className="about-right">
            <img src={Food} alt="Food Image" />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;