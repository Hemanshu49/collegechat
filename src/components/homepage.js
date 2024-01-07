import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/homepage.css'

const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the Login page when the button is clicked
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Welcome to our website!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh
        sed sem fermentum lobortis ut et turpis. Nulla facilisi. Vestibulum ante
        ipsum primis in fau lbo ridunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleButtonClick}
        id="startbtn"
      >
        Get Started
      </button>
    </div>
  );
};

export default Homepage;
