import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Text from "../styles/Heading";

export default function FooterLanding() {
  return (
    <Footer>
      <DivOne>
        <Text type="SemiBold" size="Body2">
          © 2021 - Find That Home
        </Text>
        <Text type="SemiBold" size="Body2">
          Source Code
        </Text>
        <Text type="SemiBold" size="Body2">
          Codeable - Cohort 3 Final Project
        </Text>
      </DivOne>

      <DivTwo>
        <Text type="SemiBold" size="Body2">
          Ruby on Rails REST API
        </Text>
        <Text type="SemiBold" size="Body2">
          React Responsive SPA
        </Text>
      </DivTwo>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${colors.Background};
  width: 100%;
  padding: 25px 0;
  border: 2px solid black;
`;

const DivOne = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DivTwo = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
