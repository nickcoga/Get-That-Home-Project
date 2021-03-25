import React from "react";
import Text from "./components/styles/Heading";
// import FooterLanding from "./components/UI/FooterLanding";
import FooterProperty from "./components/UI/FooterProperty";

function App() {
  return (
    <div>
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
      <FooterProperty />
    </div>
  );
}

export default App;
