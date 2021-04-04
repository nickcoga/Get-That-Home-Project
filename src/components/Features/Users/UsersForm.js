import { fetchSignup } from "./UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from '@emotion/styled';
import { useState } from "react";
import Button from '../../UI/Button';
import { colors } from '../../UI/ColorStyles';

export default function UsersForm({ id, typeUser }) {
  // const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    role: typeUser.toLowerCase()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(fetchSignup(form));
  };

  const { email, password, name, username } = form;

  return (
    <StyledForm onSubmit={handleSubmit} id={id}>
      <StyledHeader>
        <h2>Create Account</h2>
      </StyledHeader>
      <StyledContainerInputs>
        <StyledContainerInput>
          <label>Name</label>
          <StyledInput
            type="text"
            name="name"
            placeholder="Jhohn Doe"
            value={name}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          />
        </StyledContainerInput>
        <StyledContainerInput>
        <label>Username</label>
        <StyledInput
          type="text"
          name="username"
          placeholder="Jhohn Doe"
          value={username}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </StyledContainerInput>
        <StyledContainerInput>
          <label>Email</label>
          <StyledInput
            type="email"
            name="email"
            placeholder="users@mail.com"
            value={email}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          />
        </StyledContainerInput>
        <StyledContainerInput>
          <label>Password</label>
          <StyledInput
            type="password"
            name="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          />
        </StyledContainerInput>
        
      </StyledContainerInputs>
      <StyledContainerButton>
        <Button type="submit">CREATE ACCOUNT</Button>
      </StyledContainerButton>
      {/*<InputText
        label="NAME"
        placeholder="Jhon Doe"
        value={name}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <InputText
        label="EMAIL"
        placeholder="Jhon Doe"
        value={email}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <InputNumber
        label="PHONE"
        placeholder="999-999-999"
        value={phone}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <InputPassword
        label="PASSWORD"
        placeholder="******"
        value={password}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        footer="At least 6 characteres"
      />
      <InputPassword
        label="PASSWORD"
        placeholder="******"
        value={password}
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
  /> */}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 390px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap:16px;
  flex-direction: column;
`;


const StyledInput = styled.input`
  border: 1px solid ${colors.Pink};
  width: 100%;
  color: ${colors.DarkGray};
  padding: 4px;
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  margin-top: 4px;
  &:focus {
    outline: none;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  & > h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;


const StyledContainerInput = styled.div`

  & > label {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${colors.DarkGray};
  }

  
`;

const StyledContainerButton = styled.div`
  text-align: center;
`;
