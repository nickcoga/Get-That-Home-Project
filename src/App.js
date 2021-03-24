import React from "react";
import CardComponentProperty from "./components/CardComponentProperty/CardComponentProperty";
import Text from "./components/styles/Heading";
import FooterLanding from "./components/UI/FooterLanding";

function App() {
  return (
    <div>
      <CardComponentProperty />
      <CardComponentProperty />
      <CardComponentProperty />
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
