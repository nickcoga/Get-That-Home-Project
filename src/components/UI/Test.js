import { useReducer } from "react";
import { InputText, InputTextArea, Select } from "./Inputs";
import formReducer from "../../reducers/formReducer";

const Test = () => {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    big: "",
    country: { code: "" },
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  return (
    <div>
      <InputText
        label="Label"
        placeholder="placeholder"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      {/* <ContainerSalary>
        <InputNumber
          label="min"
          placeholder="min"
          name="min"
          value={state.min}
          onChange={handleChange}
        />
        <p>-</p>
        <InputNumber
          label="max"
          placeholder="max"
          name="max"
          value={state.max}
          onChange={handleChange}
        />
      </ContainerSalary> */}
      <InputTextArea
        label="Label"
        placeholder="placeholder"
        name="big"
        value={state.big}
      />
      <Select
        label="Players"
        placeholder="Select an option"
        name="country"
        value={state.country.code}
        onChange={handleChange}
        options={[
          { value: "pj1", text: "Abel" },
          { value: "pj2", text: "Juan Carlos" },
          { value: "pj3", text: "Nick" },
          { value: "pj4", text: "Christian" },
        ]}
      />
    </div>
  );
};

export default Test;
