import { InputNumber } from "./Inputs";
import { useReducer } from "react";
import styled from "@emotion/styled";
import formReducer from "../../reducers/formReducer";

const ContainerSalary = styled.div`
  display: flex;
  gap: 4px;
  p {
    margin-top: 22px;
  }
`;

const ModalSalary = () => {
  const [state, dispatch] = useReducer(formReducer, {
    min: "",
    max: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  return (
    <ContainerSalary>
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
    </ContainerSalary>
  );
};

export default ModalSalary;
