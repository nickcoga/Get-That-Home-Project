import { InputNumber } from "./Inputs";
import { useReducer, useState } from "react";
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
  const [cannotBeLetters, setCannotBeLetters] = useState(false);
  const [testNumbers, setTestNumbers] = useState(false);
  const [state, dispatch] = useReducer(formReducer, {
    min: "",
    max: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const onlyNumbers = /^[0-9]*$/;
    if(!(onlyNumbers.test(e.target.value))) {
      return setCannotBeLetters(true);
    } else {
     setCannotBeLetters(false);
    }

    if(e.target.value.length===10) {
      return setTestNumbers(true);
    } else {
      setTestNumbers(false);
    }

    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  return (
    <>
      {cannotBeLetters && <p>This field can not read letter or words</p>}
      {testNumbers && <p>You cannot exceed the maximum number, please enter a number within the allowed range</p>}
      <ContainerSalary>
        <InputNumber
          label="min"
          placeholder="min"
          name="min"
          value={state.min}
          onChange={handleChange}
          maxLength="10"
        />
        <p>-</p>
        <InputNumber
          label="max"
          placeholder="max"
          name="max"
          value={state.max}
          onChange={handleChange}
          maxLength="10"
        />
      </ContainerSalary>
    </>
  );
};

export default ModalSalary;
