import styled from "@emotion/styled";
import Icons from "./Icons";
import user1 from "../../assets/user1.svg";

const team = {
  abel: {
    image: user1,
    nickname: "Abel Arbildo",
    linkedin: "https://www.linkedin.com/in/abel-arbildo-jurupe/",
    github: "https://github.com/AbelJohn2020",
  },
  christian: {
    image: user1,
    nickname: "Christian Tordoya",
    linkedin: "https://www.linkedin.com/in/christian-tordoya-suca/",
    github: "https://github.com/christianTordoya03",
  },
  nick: {
    image: user1,
    nickname: "Nick Correa",
    linkedin: "https://www.linkedin.com/in/nickcorreagarcia/",
    github: "https://github.com/nickcoga",
  },
  juanCarlos: {
    image: user1,
    nickname: "Carlos Echevarria",
    linkedin: "https://www.linkedin.com/in/juancarlosechevarria/",
    github: "https://github.com/CarlosEnrique103",
  },
};
function CardTeam({ name }) {
  const { image, nickname, linkedin, github } = team[name];
  return (
    <StyledContainer>
      <div className="image">
        <img src={image} />
      </div>
      <h2>{nickname}</h2>
      <div className="buttons">
        <a href={github} target="blank">
          <Icons type="github" color="#616161" />
        </a>
        <a href={linkedin} target="blank">
          <Icons type="linkedin" color="#616161" />
        </a>
      </div>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
`;

export default CardTeam;
