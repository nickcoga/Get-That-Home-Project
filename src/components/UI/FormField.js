import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";

const StyledDiv = styled.div`
  width: 330px;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  label {
    fpadding: 0;
    margin: 0;
    font-family: "Roboto", sans serif;
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.Gray};
  }
  input {
    width: 100%;
    height: 40px;
    outline: none;
    border: ${colors.Pink} solid 1px;
    padding: 8px 16px;
    font-family: "Roboto", sans serif;
    font-weight: normal;
    font-style: normal;
    border-radius: 8px;
    padding: 0;
    margin: 4px 0 16px 0;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.Gray};
  }
`;

export default function FormField({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
