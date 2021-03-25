import React from "react";
import CardComponentProperty from "./components/UI/CardComponentProperty";
import CardTeam from "./components/UI/CardTeam";
// import Text from "./components/styles/Heading";
// import Test from "./components/UI/Test";
// import FooterLanding from "./components/UI/FooterLanding";
// import Tabs from "./components/UI/Tabs";
// import CardComponentProperty from "./components/UI/CardComponentProperty";
import ModalSalary from "./components/UI/ModalSalary";

function App() {
  return (
    <div>
      <CardTeam name="juanCarlos"/>
      <CardTeam name="abel"/>
      <CardTeam name="nick"/>
      <CardTeam name="christian"/>
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
      <ModalSalary />
    </div>
  );
}

export default App;
