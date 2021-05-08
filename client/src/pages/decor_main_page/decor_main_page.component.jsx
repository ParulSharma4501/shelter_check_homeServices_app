import React from "react";

import DecorBox from "../../components/decor_box/decor_box.component";
// import CleaningBoxRight from "../../components/salon_box_right/salon_box_right";

import "./decor_main_page.styles.css";

const DecorMainPage = (props) => {
  console.log(props);

  return (
    <div className="DecorMainPage">
      <div class="flex-containerd">
        <div>
          <DecorBox
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

export default DecorMainPage;
