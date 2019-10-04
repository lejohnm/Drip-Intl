import React from 'react';

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
            <p>Drip Intl. brought to you by Le'John McNeeley, created to bring the most high class streetwear for the right
            prices
            </p>
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
          
          <ul class="icons">
          <li><a href="https://twitter.com/home"><i class="fa fa-twitter"></i></a></li>
          <div>
            <li><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
          </div>
            <li><a href="https://www.facebook.com/"><i class="fa fa-facebook-square"></i></a></li>
        </ul>
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