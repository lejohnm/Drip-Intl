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
            
           </div>
          </div>
  
        
        <div className="footer-section-links">
      
          <br />
          
          <ul className="icons">
          <li><a href= "https://twitter.com/?logout=1572630120625"><img src="https://i1.wp.com/www.transitionsta.org/wp-content/uploads/2016/12/twitter-black-round-icon.png?ssl=1" alt= "twitter icon" className="twitter"/></a></li>
          
            <li><a href="https://www.instagram.com/?hl=en"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_black-128.png" alt= "instagram icon" className="instagram"/></a></li>
          
            <li><a href="https://www.facebook.com/?stype=lo&jlou=AfdPjPoCjgg5I_sE4NSu4o_3SuuhhbRdV-kc4tyvhYnpRvE-WaYVehxj2kuszkW9T6YiwgWlXe5kHC0plHal61QkA7k_C0_PLA5Qr80hk3VieQ&smuh=64183&lh=Ac-dQZ6gG7BfTTfO"><img src="https://simpleicon.com/wp-content/uploads/facebook-2-256x256.png" alt= "facebook icon" className="facebook"/></a></li>
        </ul>
      </div>

<div className="footerimage-container">
      <div className="footer-image">
        <img alt= "image of the author" className="footer-image" src="https://pbs.twimg.com/media/ECb7PxiXUAAQQ8z?format=jpg&name=large"/>
      </div>
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