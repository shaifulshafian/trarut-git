import React, { Component } from "react";
import "./style.css";
import "../../../src/device-mockups/device-mockups.css";
import demoScreen1 from "../../../src/img/demo-screen-1.jpg";

export const HeroComponent = props => {
  return (
    <header id="home" className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Introducing QR Code Asset Tagging
              </h1>
              <a
                href="https://app.trarut.com"
                className="btn btn-dark btn-xl js-scroll-trigger"
              >
                Click Now for free demo
              </a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6 portrait gold">
                <div className="device">
                  <div className="screen">
                    <img src={demoScreen1} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
