import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import LoginForm from "../features/session/LoginForm";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 880px;
  background-color: ${colors.gray6};
`;

export default function Login() {
  const history = useHistory();
  const token = useSelector((state) => state.session.token);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
      history.push("/");
    }
  }, [token]);

  return (
    <div>
      <ContainerForm>
        <LoginForm id="login-form" />
      </ContainerForm>
    </div>
  );
}
