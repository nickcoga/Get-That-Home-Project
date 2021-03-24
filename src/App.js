import Text from "./components/styles/Heading";

import Button from "./components/UI/Button";
import Tabs from "./components/UI/Tabs";

function App() {
  // clear this commit
  return (
    <div>
      <Tabs tabs={["actives", "closed"]}/>
      <Text type="SemiBold" size="H1">
        Heading1
      </Text>
      <Text type="Arial" size="H2">
        Heading2
      </Text>
      <Text type="Calabria" size="H3">
        Heading3
      </Text>
      <Button size="small">Button</Button>
    </div>
  );
}

export default App;
