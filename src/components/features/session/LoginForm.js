import { useDispatch } from "react-redux";
import FormField from "../../UI/FormField";
import { fetchLogin } from "./sessionSlice";
import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/ColorStyles";

const ContainerForm = styled.div`
  background-color: ${colors.White};
  padding: 32px 58px;
  width: 376px;
  min-height: 812px;
  color: ${colors.Gray};

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: "Roboto", sans serif;
    font-weight: 400;
    font-style: normal;
    font-size: 35px;
    line-height: 40px;
  }

  p {
    margin: 32px 0;
    padding: 0;
    text-align: center;
    font-family: "Roboto", sans serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;
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
          <h1>Welcome to Expensable</h1>
          <p>Please login to start using the app</p>
        </Header>
        <FormField>
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormField>
        <FormField>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormField>
      </ContainerForm>
    </form>
  );
}
