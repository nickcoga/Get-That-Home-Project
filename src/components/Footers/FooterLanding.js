import styled from "@emotion/styled";
import { colors } from "../UI/ColorStyles";
import Text from "../UI/Heading";
import Icons from "../UI/Icons";

export default function FooterLanding() {
  return (
    <Footer>
      <DivOne>
        <Text type="SemiBold" size="Body2">
          © 2021 - Find That Home
        </Text>
        <div>
          <DivTwo>
            <Text type="SemiBold" size="Body2">
              Source Code
            </Text>
          </DivTwo>
          <DivTree>
            <Icons type="ruby" />
            <Text type="SemiBold" size="Body2">
              Ruby on Rails REST API
            </Text>
            <Icons type="react" />
            <Text type="SemiBold" size="Body2">
              React Responsive SPA
            </Text>
          </DivTree>
        </div>

        <Text type="SemiBold" size="Body2">
          Codeable - Cohort 3 Final Project
        </Text>
      </DivOne>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 0;
  background: ${colors.Background};
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid ${colors.DarkPink};
`;

const DivOne = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const DivTwo = styled.div`
  width: 395px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivTree = styled.div`
  width: 395px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
