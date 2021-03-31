import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "./ColorStyles";

const FieldContainer = styled.div(
  ({ cssProp }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${cssProp}
  `
);

const Caption = styled.span(
  (props) => css`
    font-size: 14px;
    line-height: 17px;
    color: ${props.error ? colors.red : colors.Gray};
  `
);

const ContainerNumber = styled.div(
  (props) => css`
    width: 90px;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.red : colors.Pink}`};
    box-sizing: border-box;
    border-radius: 8px;
    gap: 4px;
    height: fit-content;
    &:hover {
      border: ${`1px solid ${colors.ShallowPink}`};
    }
    &:focus-within {
      border: ${`1px solid ${colors.ShallowPink}`};
      box-shadow: ${`0px 0px 4px ${colors.ShallowPink}`};
    }
  `
);

const Container = styled.div(
  (props) => css`
    width: 356px;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.red : colors.Pink}`};
    box-sizing: border-box;
    border-radius: 8px;
    gap: 4px;
    height: fit-content;
    &:hover {
      border: ${`1px solid ${colors.ShallowPink}`};
    }
    &:focus-within {
      border: ${`1px solid ${colors.ShallowPink}`};
      box-shadow: ${`0px 0px 4px ${colors.ShallowPink}`};
    }
  `
);

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 25px;
  color: ${colors.DarkGray};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.LightGray};
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  color: ${colors.Gray};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.LightGray};
  }
`;

const StyledSelect = styled.select`
  border: none;
  width: 100%;
  background-color: ${colors.White};
  color: ${colors.Gray};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.LightGray};
  }
  option:first-of-type {
    color: red;
  }

`;

function InputText({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value = "",
  onChange,
  cssProp,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledInput
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        />
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function InputPassword({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value = "",
  onChange,
  cssProp,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledInput
          type="password"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        />
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function InputNumber({
  label = "",
  icon,
  error = false,
  placeholder = "",
  caption = "",
  name = "",
  value = "",
  onChange,
  cssProp,
  maxLength,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <ContainerNumber error={error}>
        <StyledInput
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          maxLength={maxLength}
          onChange={onChange}
        />
        {icon}
      </ContainerNumber>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function InputTextArea({
  label = "",
  caption = "",

  error = false,
  placeholder = "",
  name = "",
  value,
  onChange,
  footer = "",
}) {
  return (
    <FieldContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledTextArea
          rows="5"
          cols="30"
          maxlength="140"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        />
      </Container>
      {footer}
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function Select({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value,
  options = [],
  onChange,
}) {
  return (
    <FieldContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledSelect
          type="select"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

export { InputText, Select, InputTextArea, InputNumber, InputPassword };
