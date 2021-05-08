import React from "react";

import GadgetBox from "../../components/gadget_box/gadget_box.component";
// import CleaningBoxRight from "../../components/salon_box_right/salon_box_right";

import "./gadget_main_page.styles.css";

const GadgetMainPage = (props) => {
    console.log(props);

    return (

    <div className="GadgetMainPage">
        <div class="flex-containerg">
            <div>
                    <GadgetBox typ={props.typee}/>
            </div>
</div>
       
       
    </div>
)}

export default GadgetMainPage;