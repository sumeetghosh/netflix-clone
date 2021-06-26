import React from "react";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import "./Home.css";
import requests from "../Requests";
import Row from "../components/Row/Row";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Banner />
    </div>
  );
}

export default Home;
