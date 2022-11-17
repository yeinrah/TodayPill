import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import CustomBtn from "./CustomBtn";
function Main() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <img src={"/Assets/images/web-background.png"} alt="" className="back" />
      <img
        src={"/Assets/images/prototype2.png"}
        alt=""
        className="main-screen"
      />

      <div className="right-side">
        <div className="download-btn">
          <CustomBtn />
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        
      </header> */}
    </div>
  );
}

export default Main;
