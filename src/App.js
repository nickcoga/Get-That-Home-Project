import React from "react";
import Text from "./components/styles/Heading";
import Prueba from "./components/UI/Prueba";

function App() {
  // clear this commit
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
      <Prueba />
    </div>
  );
}

export default App;
