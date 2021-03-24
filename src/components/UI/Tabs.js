import styled from '@emotion/styled';
import { colors } from '../styles/ColorStyles';

function Tabs({tabs}) {

  return (
    <StyledContainer>
      {tabs.map((tab, index) => (
        <li key={tab + index}>
            {tab}
        </li>
      ))}
    </StyledContainer>
  )
}


const StyledContainer = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap');
  margin: 0;
  padding: 0;
  display: flex;
  align-items: 0;
  gap: 24px;
  & > li {
    transition: all 300ms ease;
    letter-spacing: 1.25px;
    font-family: 'Montserrat', sans-serif;
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
    list-style: none;
    border-bottom: 2px solid ${colors.Pink};
  }

`

export default Tabs
