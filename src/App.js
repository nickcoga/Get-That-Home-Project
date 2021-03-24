import Text from "./components/styles/Heading";
import CardComponentProperty from './Components/CardComponentProperty/CardComponentProperty';
import Text from "./Components/styles/Heading";
import Button from "./components/UI/Button";
import Tabs from "./components/UI/Tabs";

function App() {
  return (
    <div>
      <Tabs tabs={["actives", "closed"]}/>
      <Tabs tabs={["favorites", "contacted"]}/>
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
      <Button size="small">Button</Button>
    </div>
  );
}

export default App;
