import { useDispatch } from "react-redux";
import { fetchLogin } from "./sessionSlice";
import { InputText } from "../../UI/Inputs";
import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/ColorStyles";
import Button from "../../UI/Button";

const ContainerForm = styled.div`
  background-color: ${colors.White};
  padding: 15px 20px;
  width: 388px;
  height: 256px;
  border: 1px solid ${colors.black};
  color: ${colors.Gray};

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

const Header = styled.div``;

export default function LoginForm({ id }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} id={id}>
      <ContainerForm>
        <Header>
          <h1>Login</h1>
        </Header>
        <InputText
          label="Email"
          placeholder="user@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          label="Password"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" form="login-form">
          Login
        </Button>
      </ContainerForm>
    </form>
  );
}
