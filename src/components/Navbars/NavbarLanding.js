import styled from "@emotion/styled";
import { colors } from "../UI/ColorStyles";
import GetThatHome from "../../assets/GetThatHome.svg";
import Button from "../UI/Button";
import Icons from "../UI/Icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { killToken } from "../Features/Session/SessionSlice";

export default function NavbarLanding({ login, setLogin }) {
  const token = useSelector((state) => state.session.token);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  const handleLogout = () => {
    dispatch(killToken());
    window.location.reload();
  }

  return (
    <Navbar>
      <Container>
        <Logo>
          <Link to={`/`}>
            <img src={GetThatHome} alt="Aparment" />
          </Link>
        </Logo>

        <Div>
          <Link to={`/listproperties`}>
            <Button size="medium">
              <Icons type="search" className="search" />
              FIND A HOME
            </Button>
          </Link>
          {token && user.role === "admin" ? (
            <>
            <Join>
              <Button onClick={handleLogout}>
                <Icons type="logout" className="userplus" /> Logout
              </Button>
            </Join>
            <Join>
              <Link to="/propertyform" className="link">
                <Icons type="userplus" className="userplus" /> Create Property
              </Link>
            </Join>
            </>
          ) : (
            ""
          )}
          {token && user.role === "user" ? (
            <>
            <Join>
              <Button onClick={handleLogout}>
                <Icons type="logout" className="userplus" /> Logout
              </Button>
            </Join>
            <Join>
              <Link to="/listproperties" className="link">
                <Icons type="userplus" className="userplus" /> {user.username}
              </Link>
            </Join>
            </>
          ) : (
            ""
          )}

          {!token && (
            <>
              <Join>
                <Link to="/signup" className="link">
                  <Icons type="userplus" className="userplus" /> JOIN
                </Link>
              </Join>
              <Login>
                <Button size="medium" onClick={(e) => handleClick(e)}>
                  <Icons type="userplus" className="userplus" /> LOGIN
                </Button>
              </Login>
            </>
          )}
        </Div>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${colors.White};
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const Login = styled.li`
  button {
    display: flex;
    align-items: center;
    background: ${colors.Pink};
    color: ${colors.White};
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    gap: 9px;
  }
  .userplus {
    font-size: 19px;
  }
`;

const Join = styled.div`
  display: flex;
  align-items: center;
    .link{
      display: flex;
      gap: 4px;
      align-items: center;
      background: ${colors.White};
      color: ${colors.Gray};
      font-family: Inter;no such file or directory
      display: flex;
      align-items: center;
      text-decoration: none;
      border: solid 1px ${colors.Pink};
      border-radius: 16px;
      padding:10px 18px;
    }
`;

const Logo = styled.li`
  button {
    display: flex;
    align-items: center;
    background: ${colors.Pink};
    color: ${colors.White};
    font-family: Inter;
    font-size: 14px;
    gap: 9px;
  }
`;
