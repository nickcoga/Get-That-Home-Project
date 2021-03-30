import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/UI/Button";
import UsersForm from "../components/features/users/UsersForm";

export default function Signup() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    if (user) {
      history.push("/login");
    }
  }, [user]);

  return (
    <div>
      <UsersForm id="signup-form" />
      <Link to="/login">Login</Link>
      <Button disabled={status === "loading"} type="submit" form="signup-form">
        {status === "loading" ? "Loading..." : "Sign-up"}
      </Button>
    </div>
  );
}
