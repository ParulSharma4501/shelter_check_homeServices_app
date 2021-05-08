import React from "react";

import CleaningBox from "../../components/cleaning_box/cleaning_box.component";
// import CleaningBoxRight from "../../components/salon_box_right/salon_box_right";

import "./cleaning_main_page.styles.css";

const CleaningMainPage = (props) => {
    console.log(props);

    return (

    <div className="CleaningMainPage">
        <div class="flex-containerc">
            <div>
                    <CleaningBox typ={props.typee} one={props.one} two={props.two} three={props.three} four={ props.four}/>
            </div>
          
</div>
       
       
    </div>
)}

export default CleaningMainPage;