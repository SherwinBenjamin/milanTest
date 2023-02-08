import React from "react";
import "./footerStyles.css";
import { Link } from "react-router-dom";
import logo from "./DSAWhite-06-2.png";

const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="container grid grid-four-column grid-footer">
        <div className="footer-left">
          <div>
            <div>
              <img src={logo} alt="" height="70px" width="80px" />
            </div>
            <div>
            Directorate of Student Affairs
              <br />
              <br />
             Milan is a four-day festival that features several music, dance, and art performances in addition to a wide range of athletic events. 

            </div>
          </div>
        </div>

        <div className="footer-center1">
          <div>
            {" "}
            <Link to='/' className="footer-center1-items">
              Home
            </Link>
          </div>
          <div>
            {" "}
            <Link to='/event' className="footer-center1-items">
              Events
            </Link>
          </div>
          <div>
            {" "}
            <Link to='/comingsoon' className="footer-center1-items">
              Spotlight
            </Link>
          </div>
          <div>
            {" "}
            <Link to='/comingsoon' className="footer-center1-items">
              Team
            </Link>
          </div>
        </div>
        <div className="footer-center2">
          <div>
            {" "}
            <Link to='/comingsoon' className="footer-center2-items">
              Timeline
            </Link>
          </div>
          <div>
            {" "}
            <Link to='/comingsoon' className="footer-center2-items">
              Tickets
            </Link>
          </div>
          <div>
            {" "}
            <Link to='/comingsoon' className="footer-center2-items">
              Sponsors
            </Link>
          </div>
          <div>
            {" "}
            <Link to='/comingsoon' className="footer-center2-items">
              FAQs
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <div className="container grid grid-five-column grid-socials">
            <div>
              <a
                href="https://instagram.com/srmist_milan?igshid=Yzg5MTU1MDY="
                className="footer-insta fa fa-instagram fa-lg"
                target="_blank"
                rel="noreferrer"
              >
                {/* anything */}
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/srmmilan/"
                className="footer-facebook fa fa-facebook fa-lg"
                target="_blank"
                rel="noreferrer"
              >
                {/* <FontAwesomeIcon icon={fafacebook} /> */}
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/srmmilan/"
                className="footer-linkedin fa fa-linkedin fa-lg"
                target="_blank"
                rel="noreferrer"
              >
                {/* anything */}
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/srmist"
                className="footer-youtube fa fa-youtube-play fa-lg"
                target="_blank"
                rel="noreferrer"
              >
                {/* anything */}
              </a>
            </div>
            <div>
              <a
                href="mailto: Culturalsecretary.sa@srmist.edu.in"
                className="footer-gmail fa fa-envelope fa-lg"
                target="_blank"
                rel="noreferrer"
              >
                {/* anything */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        ©2023 | Crafted with ♡ by the Tech Team, Directorate of Student Affairs,
        SRMIST
      </div>
    </div>
  );
};

export default Footer;
