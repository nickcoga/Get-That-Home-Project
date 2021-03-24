import React from 'react';
// import CardChooseUser from './components/UI/CardChooseUser';
import CardComponentProperty from './Components/CardComponentProperty/CardComponentProperty';
import Text from "./Components/styles/Heading";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
