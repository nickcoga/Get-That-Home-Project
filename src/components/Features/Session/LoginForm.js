import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "./SessionSlice";
import { InputText, InputPassword } from "../../Inputs";
import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../UI/ColorStyles";
import Button from "../../UI/Button";
import Icons from "../../UI/Icons";
import { useHistory } from "react-router-dom";
export default function LoginForm({ id="form-login" }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.session.status);
  const token = useSelector((state) => state.session.token);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };

  if (status === "succeced" || token) {
    history.push("listproperties");
  }

  return (
    <form onSubmit={handleSubmit} id={id}>
      <ContainerForm>
        <h1>Login</h1>
        <InputText
          label="EMAIL"
          placeholder="user@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputPassword
          label="PASSWORD"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit" form="login-form">
            <Icons type="login" className="login" />
            {status === "loading" ? " LOADING" : "LOGIN"}
          </Button>
        </ButtonContainer>
      </ContainerForm>
    </form>
  );
}

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

const ButtonContainer = styled.div`
  margin-top: 2%;
  .login {
    font-size: 26px;
    padding-top: 4px;
    padding-right: 4px;
  }
`;
