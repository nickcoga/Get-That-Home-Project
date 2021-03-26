import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import GetThatHome from "../../assets/GetThatHome.svg";
import Button from "./Button";
import Icons from "./Icons";

export default function NavbarLanding() {
  return (
    <Navbar>
      <Container>
        <Logo>
          <img src={GetThatHome} alt="Aparment" />
        </Logo>

        <Div>
          <Find>
            <Button size="medium">
              <Icons type="search" className="search" />
              FIND A HOME
            </Button>
          </Find>
          <Join>
            <Button size="medium">
              <Icons type="userplus" className="userplus" /> JOIN
            </Button>
          </Join>
          <Login>
            <Button size="medium">
              <Icons type="userplus" className="userplus" /> LOGIN
            </Button>
          </Login>
        </Div>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
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

const Join = styled.li`
  button {
    display: flex;
    align-items: center;
    background: ${colors.White};
    color: ${colors.Gray};
    font-family: Inter;
    font-size: 14px;
    gap: 9px;
  }
  .userplus {
    font-size: 19px;
  }
`;

const Find = styled.li`
  button {
    display: flex;
    align-items: center;
    background: ${colors.White};
    color: ${colors.Gray};
    font-family: Inter;
    font-size: 14px;
    gap: 9px;
    border: none;
  }
  .search {
    font-size: 20.31px;
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
