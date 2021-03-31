import styled from "@emotion/styled";
import { colors } from "./UI/ColorStyles";
import { useLocation } from "react-router-dom";

function Tabs({ tabs }) {
  //const location = useLocation();
  //const path = location.pathname;
  const path = `/${tabs[0]}`;
  return (
    <StyledContainer>
      {tabs.map((tab, index) => (
        <li
          className={path === `/${tab}` ? "active-tab" : ""}
          key={tab + index}
        >
          {tab}
        </li>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: 0;
  gap: 24px;
  & > li {
    transition: all 300ms ease;
    letter-spacing: 1.25px;
    font-family: "Montserrat", sans-serif;
    color: ${colors.LightGray};
    list-style: none;
    padding-bottom: 4px;
    border-bottom: 2px solid ${colors.gray4};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
  }
  & > li:hover {
    cursor: pointer;
    color: ${colors.DarkGray};
    border-bottom: 2px solid ${colors.Pink};
  }
  .active-tab {
    color: ${colors.DarkGray};
    list-style: none;
    border-bottom: 2px solid ${colors.Pink};
  }
`;

export default Tabs;
