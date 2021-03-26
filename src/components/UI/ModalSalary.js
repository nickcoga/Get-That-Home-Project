import { InputNumber } from "./Inputs";
import { useReducer, useState } from "react";
import styled from "@emotion/styled";
import formReducer from "../../reducers/formReducer";
//import '../CardComponentProperty/CardComponentProperty.css';

const ContainerSalary = styled.div`
  display: flex;
  gap: 4px;
  p {
    margin-top: 22px;
  }
`;

const ValidationsMinMaxStyles=styled.p`
  margin: 0;
  padding: 8px 0 0 8px;
  max-width: 180px;
  text-align: justify;
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 600;
  font-styles: normal;
  color: red;
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
      {cannotBeLetters && <ValidationsMinMaxStyles>This field can not read letter or words</ValidationsMinMaxStyles>}
      {testNumbers && <ValidationsMinMaxStyles>Maximum number: 9 999 999 999, please enter a number within the allowed range</ValidationsMinMaxStyles>}
    </>
  );
};

export default ModalSalary;
