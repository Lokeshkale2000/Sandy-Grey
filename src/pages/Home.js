import React from "react";
import Banner from "../Assets/Banner.jpg"; 
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="container1">
        <p className="PagTitle">
          THE <br></br>FINEST
          <br></br> QUALITY <br></br>WHISKY <br></br>& GIN.
        </p>
        <p className="subtitle">
          Our mission and obsession is to produce the finest <br></br>quality whisky and
          gin. We distill in extremely <br></br>small batches to focus on all processes
          to ensure <br></br>that our spirits are among the finest available.
        </p>
      </div>
      <div className="container2">
        <img src={Banner} alt="Banner" />
      </div>
    </div>
  );
};

export default Home;
