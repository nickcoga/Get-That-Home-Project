import { fetchSignup } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { InputNumber, InputPassword, InputText } from "../../Inputs";

export default function UsersForm({ id }) {
  const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    for (let key in form) {
      fd.append(key, form[key]);
    }
    dispatch(fetchSignup(fd));
  };

  const { email, password, name, phone } = form;

  return (
    <form onSubmit={handleSubmit} id={id}>
      <InputText
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
      />
    </form>
  );
}
