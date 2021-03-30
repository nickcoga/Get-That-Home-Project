import { fetchSignup } from "./UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { InputText, InputPassword, InputNumber } from "../../UI/Inputs";
import styled from "@emotion/styled";
import { colors } from "../../styles/ColorStyles";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  margin: 0;
  width: 388px;
  height: 256px;
  background-color: ${colors.White};
  border-radius: 8px;
  box-shadow: ${colors.boxShadow};
  color: ${colors.Gray};
  label {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    color: ${colors.DarkGray};
  }
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: "Roboto", sans serif;
    font-weight: 300;
    font-style: normal;
    color: ${colors.black};
    font-size: 24px;
    line-height: 32px;
  }
`;

export default function UsersForm({ id }) {
  const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignup({ email, password, phone, name }));
  };

  return (
    <form onSubmit={handleSubmit} id={id}>
      <ContainerForm>
        <h1>Login</h1>
        <InputText
          label="NAME"
          placeholder="Jhon Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          label="EMAIL"
          placeholder="user@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputNumber
          label="PHONE"
          placeholder="999-999-999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputPassword
          label="PASSWORD"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          footer="At least 6 characteres"
        />
        <InputPassword
          label="PASSWORD CONFIRMATION"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </ContainerForm>
    </form>
  );
}
