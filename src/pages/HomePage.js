import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to Poll Party</h1>
      <Link to="/poll" className="homepage-link">
        Go to Poll
      </Link>
    </div>
  );
}

export default HomePage;