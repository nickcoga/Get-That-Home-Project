import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Text from "../styles/Heading";
import Icons from "../UI/Icons";
import GetThatHome from "../../assets/GetThatHome.svg";
export default function FooterProperty() {
  return (
    <Footer>
      <ContentMain>
        <ContentInfo>
          <img src={GetThatHome} alt="Aparment" />
          <Text type="SemiBold" size="Body2">
            © 2021 - Get That Job
          </Text>
          <Text type="SemiBold" size="Body2">
            Codeable - Cohort 3 Final Project
          </Text>
        </ContentInfo>

        <ContentMid>
          <Text type="SemiBold" size="Caption">
            Build with <Icons type="heart" className="heart" /> by:
          </Text>
          <ContentMembers>
            <Content>
              <Text type="SemiBold" size="Body2">
                <Icons type="github" />
                Ruby Ramirez
              </Text>
              <Text type="SemiBold" size="Body2">
                <Icons type="github" />
                Javier Escribano
              </Text>
            </Content>
            <Content>
              <Text type="SemiBold" size="Body2">
                <Icons type="github" />
                Raul Rubina
              </Text>
              <Text type="SemiBold" size="Body2">
                <Icons type="github" />
                Francisca Reategui
              </Text>
            </Content>
          </ContentMembers>
        </ContentMid>

        <div>
          <Text type="SemiBold" size="Caption">
            Source Code
          </Text>
          <ContentSource>
            <Text type="SemiBold" size="Body2">
              <Icons type="ruby" />
              Ruby on Rails REST API
            </Text>

            <Text type="SemiBold" size="Body2">
              <Icons type="react" />
              React Responsive SPA
            </Text>
          </ContentSource>
        </div>
      </ContentMain>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${colors.Background};
  width: 100%;
  border-top: 1px solid ${colors.DarkPink};
`;

const ContentMain = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  padding: 16px 32px;
`;

const ContentInfo = styled.div`
  width: 246px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ContentMembers = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const ContentSource = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ContentMid = styled.div`
  width: 364px;
  .heart {
    color: ${colors.red};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
