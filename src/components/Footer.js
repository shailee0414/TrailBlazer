import React from "react";

import './Footer.css'

const Footer = () => {
  
  const divStyle = { width: "15rem" };
  const ulStyle = { listStyleType: "none", };

  return (
    <footer style={{ borderTop: "grey 1px solid", paddingTop: "3em" ,}}>
      <div className="footer" style={{}}>
        <div className="ui container">
          <div className="ui grid">
            <div
              className="doubling three column row"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div style={divStyle}>
                <ul style={ulStyle}>
                  <li className="ui header">
                    <a href="/">Learn</a>
                  </li>
                  <li>
                    <a href="/">Trails</a>
                  </li>
                  <li>
                    <a href="/">Trailmixes</a>
                  </li>
                  <li>
                    <a href="/">Modules</a>
                  </li>
                  <li>
                    <a href="/">Projects</a>
                  </li>
                  <li>
                    <a href="/">Trailhead Academy</a>
                  </li>
                  <li>
                    <a href="/">Career Paths</a>
                  </li>
                </ul>
              </div>
              <div style={divStyle}>
                <ul style={ulStyle}>
                  <li className="ui header">
                    <a href="/">Credentials</a>
                  </li>
                  <li>
                    <a href="/">Superbadges</a>
                  </li>
                  <li>
                    <a href="/">Certifications</a>
                  </li>
                  <li>
                    <a href="/">Maintain Certifications</a>
                  </li>
                  <li>
                    <a href="/">Verify Certifications</a>
                  </li>
                  <li>
                    <a href="/">Take Free Certification Prep</a>
                  </li>
                </ul>
              </div>
              <div style={divStyle}>
                <ul style={ulStyle}>
                  <li className="ui header">
                    <a href="/">Community</a>
                  </li>
                  <li>
                    <a href="/">Trailblazer Community</a>
                  </li>
                  <li>
                    <a href="/">Events</a>
                  </li>
                  <li>
                    <a href="/">Quests</a>
                  </li>
                  <li>
                    <a href="/">Be a Multiplier (BAM)</a>
                  </li>
                  <li>
                    <a href="/">Salesforce Developers</a>
                  </li>
                  <li>
                    <a href="/">Salesforce Admins</a>
                  </li>
                  <li>
                    <a href="/">Trailblazer Connect</a>
                  </li>
                </ul>
              </div>
              <div style={divStyle}>
                <ul style={ulStyle}>
                  <li className="ui header">
                    <a href="/">Extras</a>
                  </li>
                  <li>
                    <a href="/">Sales Enablement</a>
                  </li>
                  <li>
                    <a href="/">Costumers Stories</a>
                  </li>
                  <li>
                    <a href="/">Trail Tracker</a>
                  </li>
                  <li>
                    <a href="/">Gallery</a>
                  </li>
                  <li>
                    <a href="/">Trailhead Store</a>
                  </li>
                  <li>
                    <a href="/">Trailhead help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ui container">
            <div className="ui grid" style={{}}>
              <div
                className="doubling two column row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft:'0.2em'
                }}
              >
                <div style={{ width: "30em" ,  }}>
                  <ul style={{listStyleType: "none",display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:"1em",alignItems:'center'}}>
                    <li >
                        <img alt='' height='45' src='https://trailhead.salesforce.com/assets/app_store/google-en-eff8e1fae5fcc29016c83b7416d5fff5779bb4a161e38f599b67473ca5f87f53.png'/>
                    </li>
                    <li
                    ><img alt='' height='45' src='https://trailhead.salesforce.com/assets/app_store/apple-en-4b20b272ef5bf05b9c1624b9582658d2a928428bc244514a4a97f2ae9fe00f47.svg'/></li>
                  </ul>
                </div>
                <div style={{ width: "30em",  }}>
                  <ul style={{listStyleType: "none",display:'flex',flexDirection:'row',justifyContent:"space-around",alignItems:'center'}}>
                    <li ><i className="  bi  bi-facebook"  style={{fontSize:'2em'}}></i></li>
                    <li><i className="  bi  bi-twitter"  style={{fontSize:'2em'}}></i></li>
                    <li><i className="  bi  bi-linkedin"  style={{fontSize:'2em'}}></i></li>
                    <li><i className="  bi  bi-align-top"  style={{fontSize:'2em'}}></i></li>
                    <li><i className="  bi  bi-headphones"  style={{fontSize:'2em'}}></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
