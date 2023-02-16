// import React from 'react';

import logo from "./../images/ironhack-logo-xs.png";
import menuTop from "./../images/menu-top-xs.png";
import { MDBBtn } from "mdb-react-ui-kit";

function HeroImage() {
  return (
    <div className="backgroundImg">
      <nav>
        <img src={logo} alt="" />
        <img className="menuTop" src={menuTop} alt="" />
      </nav>
      <div>
        <h1>
          Say hello to <br /> ReactJS
        </h1>
        <p>
          You will learn to use <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer
        </p>
      </div>
      <MDBBtn className="me-1" color="secondary">
        Awesome!
      </MDBBtn>
    </div>
  );
}

export default HeroImage;
