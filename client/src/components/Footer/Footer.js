import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Footer() {
  return (
    <div className="Footer">
       <section className="footer">
    <div className="footer-content">
        <div className="footer-section-about">
        <h1>
                <span className="logo-text">
                  DRIP
                </span>
                <span className="logo-text2">
                      INTL.
                </span>
        </h1>
            <p className="footer-text">DRIP INTL. BROUGHT TO YOU BY LE'JOHN McNEELEY, CREATED TO BRING YOU THE MOST HIGH CLASS STREETWEAR FOR THE RIGHT PRICE</p>
          <div className="conact">
            <span>
                <i className="phone">
                </i>
                     &nbsp; 313-244-5837 |  mlejohn21@gmail.com
            </span>
           </div>
          </div>
  
        
        <div className="footer-section-links">
      
          <br />
          
          <ul className="icons">
          <li><img src="https://i1.wp.com/www.transitionsta.org/wp-content/uploads/2016/12/twitter-black-round-icon.png?ssl=1" className="twitter"/></li>
          <div>
            <li><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_black-128.png" className="instagram"/></li>
          </div>
            <li><img src="http://simpleicon.com/wp-content/uploads/facebook-2-256x256.png" className="facebook"/></li>
        </ul>
      </div>


      <div className="footer-image">
        <img className="footer-image" src="https://pbs.twimg.com/media/ECb7PxiXUAAQQ8z?format=jpg&name=large"/>
      </div>
        <div className="footer-bottom">
          &copy; DRIP INTL. | Designed by Le'John McNeeley
        </div>
      </div>
        </section>
    </div>
  );
}

export default Footer;