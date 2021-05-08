import React from "react";

import SalonBox from "../../components/salon_box/salon_box.component";

import "./salon_main_page.styles.css";

const SalonMainPage = (props) => {
  console.log(props);

  return (
    <div className="SalonMainPage">
      <div class="flex-container">
        <div>
          <SalonBox
            typ={props.typee}
            one={props.one}
            two={props.two}
            three={props.three}
            four={props.four}
          />
        </div>
      </div>
    </div>
  );
};

export default SalonMainPage;
