// import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import LandPage from "./components/LandPage/LandPage";
// import Random from "./pages/Random";
// import Login from "./pages/Login";
// import ChooseFile from "./components/UI/ChooseFile";
// import CardTeam from "./components/UI/CardTeam";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Text from "./components/styles/Heading";
// import Test from "./components/UI/Test";
// import FooterLanding from "./components/UI/FooterLanding";
// import Tabs from "./components/UI/Tabs";
// import CardComponentProperty from "./components/CardComponentProperty/CardComponentProperty";
// import ModalSalary from "./components/UI/ModalSalary";
// import ModalPropertyType from "./components/UI/ModalPropertyType";
// import NavbarWelcome from "./components/NavbarWelcome/NavbarWelcome";
// import SelectCategory from "./components/UI/SelectCategory";
// import CardComponentProperty from "./components/CardComponentProperty/CardComponentProperty";
// import ToggleOperation from "./components/UI/ToggleOperation";
// import SelectForm from "./components/UI/SelectForm";
// import ChooseImages from "./components/UI/ChooseImages";
// import Pagination from "./components/UI/Pagination";
// import Carrusel from "./components/UI/Carrusel";
// import SelectCategory from "./components/UI/SelectCategory";
function App() {


    const images = [
      "https://picsum.photos/205/200",
      "https://picsum.photos/206/200",
      "https://picsum.photos/207/200"
    ];
  return (
    <div>
      <LandPage />
      {/* <ToggleOperation />
      <Pagination />
      <Carrusel photos={images}/>
      <ToggleOperation />
      <Router>
        <div>
          <Route exact path="/" component={Random} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
      <ChooseImages />
      <SelectCategory categories={["education", "legal", "goverment", "manufacturing", "sales"]} />
      <SelectForm label="Beds"/>
      <ModalPropertyType />
      <CardTeam name="abel"/>
      {/*<NavbarWelcome />*/}

      {/* <Tabs tabs={["actives", "closed"]} />
      <Tabs tabs={["favorites", "contacted"]} />
      <CardComponentProperty />
      <Text type="SemiBold" size="H1">
        Heading1
      </Text>
      <Text type="Arial" size="H2">
        Heading2
      </Text>
      <Text type="Calabria" size="H3">
        Heading3
      </Text>
      {/* <FooterLanding /> */}

      {/* <Test /> */}
      {/* <ChooseFile name="image" label="label"/>
      <ChooseFile name="image" label="label" disabled  />
      <ModalSalary /> */}
      {/* <ModalSalary /> */}
    </div>
  );
}

export default App;

