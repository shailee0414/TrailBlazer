import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <div id="smallNav" style={{ display: "" }}>
        <div id="smallLeft">
          <div id="left">
            <div className="ui  menu" style={{ borderColor: "transparent" }}>
              <div
                className="ui simple dropdown item"
                style={{ borderColor: "transparent" }}
              >
                <i className="bi bi-justify"></i>
                <div className="menu">
                  <div className="item">Home</div>
                  <div className="item">Learn</div>
                  <div className="item">Credentials</div>
                  <div className="item">Communities</div>
                  <div className="item">For Communities</div>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <img
                alt=""
                src="https://trailhead.salesforce.com/assets/trailhead-logo-no-text-a2df2574a49d32f9c6633a09d7bfabec743f88d43a76258cc185e709d3b917c4.svg"
                width="40"
              ></img>
            </div>
          </div>

          <div id="button">
            <button
              className="ui primary button"
              style={{ marginRight: "0.5rem" }}
            >
              Sign Up
            </button>
            <button className="ui blue basic button">Login</button>
          </div>
        </div>
        <div id="text">
          <div className="ui fluid icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div id="head">
        <div style={{}}>
          <img
            alt=""
            src="https://trailhead.salesforce.com/assets/trailhead-logo-5d3354441b4d8b97f21075b65e2aea266780d45943bbb36796ac25dc7cf4adc9.svg"
            width="100"
          ></img>
        </div>
        <div id="main">
          <div id="input" style={{}}>
            <div id="text">
              <div className="ui fluid icon input">
                <input type="text" placeholder="Search..." />
                <i className="search icon"></i>
              </div>
            </div>
            <div id="button">
              <button
                className="ui primary button"
                style={{ marginRight: "0.5rem" }}
              >
                Sign Up
              </button>
              <button className="ui blue basic button">Login</button>
            </div>
          </div>
          <div id="menu">
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/">Learn</a>
            </span>
            <span>
              <a href="/">Credentials</a>
            </span>
            <span>
              <a href="/">Community</a>
            </span>
            <span>
              <a href="/">For Companies</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
