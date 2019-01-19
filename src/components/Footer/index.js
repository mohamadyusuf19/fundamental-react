import React from "react";
import "./Footer.styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="reserved">
        © 2019 PT Supercamp Programmer. All Rights Reserved.
      </div>
      <div className="icon">
        <i className="fab fa-github icon-bottom" />
        <i className="fab fa-facebook icon-bottom" />
        <i className="fab fa-instagram icon-bottom" />        
        <i className="fab fa-linkedin icon-bottom" />
        <i className="fab fa-twitter icon-bottom" />
        <i className="fab fa-youtube icon-bottom" />
      </div>
    </div>
  );
}

export default Footer;
