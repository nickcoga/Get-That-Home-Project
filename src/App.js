
import ChooseFile from "./components/UI/ChooseFile";
import CardComponentProperty from "./components/UI/CardComponentProperty";
import React from "react";
import CardTeam from "./components/UI/CardTeam";
// import Text from "./components/styles/Heading";
// import Test from "./components/UI/Test";
// import FooterLanding from "./components/UI/FooterLanding";
// import Tabs from "./components/UI/Tabs";
// import CardComponentProperty from "./components/UI/CardComponentProperty";
import ModalSalary from "./components/UI/ModalSalary";
import ModalPropertyType from "./components/UI/ModalPropertyType";

function App() {
  return (
    <div>
      <ModalPropertyType />
      <CardTeam name="abel"/>
      <CardComponentProperty />
      <CardComponentProperty />
      <CardComponentProperty />
      <CardComponentProperty />

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
      <ChooseFile name="image" label="label"/>
      <ChooseFile name="image" label="label" disabled  />
      <ModalSalary />
    </div>
  );
}

export default App;
