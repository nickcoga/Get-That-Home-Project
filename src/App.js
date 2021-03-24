import React from "react";
import Text from "./components/styles/Heading";
import FooterLanding from "./components/UI/FooterLanding";
import Tabs from "./components/UI/Tabs";
import CardComponentProperty from "./components/UI/CardComponentProperty";

function App() {
  return (
    <div>
      <Tabs tabs={["actives", "closed"]} />
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
      <FooterLanding></FooterLanding>
    </div>
  );
}

export default App;
