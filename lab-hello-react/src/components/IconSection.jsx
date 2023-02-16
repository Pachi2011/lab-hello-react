import React from "react";

import icon1 from "./../images/icon1.png";
import icon2 from "./../images/icon2.png";
import icon3 from "./../images/icon3.png";
import icon4 from "./../images/icon4.png";

const IconSection = () => {
  return (
            <div class="row">
      <div class="column"> <img src={icon1} alt="" />
      <br /><p className="iconTxt1">iconTxt1</p></div>
      <div class="column"><img src={icon2} alt="" /><br /><p className="iconTxt1">iconTxt1</p></div>
      <div class="column"><img src={icon3} alt="" /><br /><p className="iconTxt1">iconTxt1</p></div>
      <div class="column"><img src={icon4} alt="" /><br /><p className="iconTxt1">iconTxt1</p></div>
    </div>
    // <div className="d-flex justify-content-evenly flex-wrap">
    //   <img src={icon1} alt="" />
      
    //   <img src={icon2} alt="" />
    //   <img src={icon3} alt="" />
    //   <img src={icon4} alt="" />
    // </div>
  );
};

export default IconSection;
