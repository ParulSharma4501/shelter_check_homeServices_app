import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, useParams } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import SignUpPage from "./pages/sign_up_page/sign_up_page.component";
import LoginPage from "./pages/login_page/login_page.component";
import ProfessionalPage from "./pages/professional_page/professional_page.component";
import SalonMainPage from "./pages/salon_main_page/salon_main_page.component";
import CleaningMainPage from "./pages/cleaning_main_page/cleaning_main_page.component";
import DecorMainPage from "./pages/decor_main_page/decor_main_page.component";
import GadgetMainPage from "./pages/gadget_main_page/gadget_main_page.component";

function App() {
  // const { salonType } = useParams();
  console.log("hey");

  return (
    <div className="App">
      {/*  SWITCH--  the moment it finds a match it stops there and does not render any other route component. */}
      {/* EXACT-- it has two things ={true}, ={false} default is true and it should be EXACTLY matched. */}
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/signup">
          {/* <NavbarElse /> */}
          <SignUpPage />
        </Route>
        <Route path="/login">
          {/* <NavbarElse /> */}
          <LoginPage />
        </Route>
        <Route path="/professional">
          {/* <NavbarElse /> */}
          <ProfessionalPage />
        </Route>
        <Route exact path="/salonmainpage">
          <SalonMainPage />
        </Route>
        {/* <Route path="/salonmainpage/:salonType" render>
     
          <SalonMainPage typee={salonType} />
        </Route> */}

        {/* Salon Routes------------------------------------------------------------ */}
        <Route path="/salonmainpage/Massage">
          <SalonMainPage
            typee="Massage"
            one="Full Body Massage"
            two="Face Massage"
            three="Accupressure"
            four="Fish Massage"
          />
        </Route>
        <Route path="/salonmainpage/Grooming">
          <SalonMainPage
            typee="Grooming"
            one="Waxing"
            two="Threading"
            three="Manicure/Padicure"
            four="Waxing"
          />
        </Route>
        <Route path="/salonmainpage/Skin">
          <SalonMainPage
            typee="Skin Care"
            one="Facial"
            two="Full Skin Refresher Skincare"
            three="Bridal Makeup"
            four="Normal Makeup"
          />
        </Route>
        <Route path="/salonmainpage/Salon">
          <SalonMainPage
            typee="Hair Care Salon"
            one="Haircut"
            two="Hair Styling"
            three="Hair Treatment"
            four="Waxing"
          />
        </Route>

        {/* Cleaning Routes------------------------------------------------------------ */}
        <Route path="/cleaningmainpage/Car">
          <CleaningMainPage
            typee="Car Cleaning"
            one="Waterless Car Wash. Rinseless Car Wash."
            two="Soft Touch Car Washes."
            three="Automated Car Washes."
            four="Machine Dryer Car Wash."
          />
        </Route>
        <Route path="/cleaningmainpage/Termite">
          <CleaningMainPage
            typee="Termite Control"
            one="Liquid soil-applied termiticides."
            two="Termite baits."
            three="Building materials impregnated with termiticides."
            four="Wood treatments."
          />
        </Route>
        <Route path="/cleaningmainpage/Furniture">
          <CleaningMainPage
            typee="Furniture Cleaning"
            one="Sofa Cleaning"
            two="Wooden Furniture Cleaning"
            three="Foam Cleaning of whole house"
            four="Dry Cleaning of whole house"
          />
        </Route>
        <Route path="/cleaningmainpage/Bathroom">
          <CleaningMainPage
            typee="Rooms Cleaning"
            one="Bathroom Cleaning"
            two="Kitchen Cleaning"
            three="Gel-Based Toilet Cleaning"
            four="Tile Cleaning"
          />
        </Route>

        {/* Decoration Routes------------------------------------------------------------ */}
        <Route path="/decormainpage/birthday">
          <DecorMainPage
            typee="Birthday Decor"
            one="Ballons Decor."
            two="Flowers Decor."
            three="Confetti Decor."
            four="Decor Custumized Specially for you."
          />
        </Route>
        <Route path="/decormainpage/wedding">
          <DecorMainPage
            typee="Wedding Decor"
            one="Contemporary style."
            two="Diyas and Candles Decor."
            three="Colourful drapes."
            four="Decor Custumized Specially for you."
          />
        </Route>
        <Route path="/decormainpage/gardening">
          <DecorMainPage
            typee="Gardening Decor"
            one="Formal Garden."
            two="Japanese Garden."
            three="Modern Garden."
            four="Gravel And Rock Garden."
          />
        </Route>
        <Route path="/decormainpage/wholehouse">
          <DecorMainPage
            typee="House Renovation"
            one="Scandinavian."
            two="Mid-century modern."
            three="Contemporary."
            four="Traditional."
          />
        </Route>

        {/* Decoration Routes------------------------------------------------------------ */}
        <Route path="/gadgetmainpage/led">
          <GadgetMainPage typee="LED Service" />
        </Route>
        <Route path="/gadgetmainpage/ac">
          <GadgetMainPage typee="AC Service" />
        </Route>
        <Route path="/gadgetmainpage/laptop">
          <GadgetMainPage typee="Laptop Service" />
        </Route>
        <Route path="/gadgetmainpage/washingmachine">
          <GadgetMainPage typee="Washing Machine Service" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
