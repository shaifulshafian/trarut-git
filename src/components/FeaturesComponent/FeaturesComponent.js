import React, { Component } from "react";
import "./style.css";
// import "simple-line-icons/css/simple-line-icons.css";
import demoScreen1 from "../../../src/img/demo-screen-1.jpg";

export const FeaturesComponent = props => {
  return (
    <section className="features" id="features">
      <div className="container">
        {/* <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">
            Check out what you can do with this app theme!
          </p>
          <hr />
        </div> */}
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6 portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoScreen1} className="img-fluid" alt="" />
                  </div>
                  <div className="button" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary" />
                    <h3>No Hidden Costs</h3>
                    <p className="text-muted">
                      Our Solution is built on Open Source Technology
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary" />
                    <h3>Cloud Implementation</h3>
                    <p className="text-muted">
                      Access from everywhere around the world 24/7
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary" />
                    <h3>Migration by Excel file</h3>
                    <p className="text-muted">
                      Just only filled up our provided Excel file, then our solution will insert it into database.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
