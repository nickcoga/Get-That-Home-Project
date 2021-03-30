import styled from "@emotion/styled";
import Icons from "./Icons";
import user1 from "../../assets/user1.svg";
import { colors } from "../styles/ColorStyles";
import { useState } from "react";


const team = [
  {
    image: user1,
    nickname: "Abel Arbildo",
    linkedin: "https://www.linkedin.com/in/abel-arbildo-jurupe/",
    github: "https://github.com/AbelJohn2020",
  },
  {
    image: user1,
    nickname: "Christian Tordoya",
    linkedin: "https://www.linkedin.com/in/christian-tordoya-suca/",
    github: "https://github.com/christianTordoya03",
  },
  {
    image: user1,
    nickname: "Nick Correa",
    linkedin: "https://www.linkedin.com/in/nickcorreagarcia/",
    github: "https://github.com/nickcoga",
  },
  {
    image: user1,
    nickname: "Carlos Echevarria",
    linkedin: "https://www.linkedin.com/in/juancarlosechevarria/",
    github: "https://github.com/CarlosEnrique103",
  },
];
function CardTeam() {
  console.log(team)
  const [partners, setpartners] = useState(team)
  console.log(partners)

  return (
    <StyledContainer>
        {
          partners.map((partner) => (
            <div key={partner.nickname} className="cardTeam">
              <div className="image">
                <img src={partner.image} alt={partner.nickname}/>
              </div>
              <h2>{partner.nickname}</h2>
              <div className="buttons">
                <a href={partner.github} target="blank">
                  <Icons type="github" className="github" />
                </a>
                <a href={partner.linkedin} target="blank">
                  <Icons type="linkedin" className="linkedin" />
                </a>
              </div>
            </div>
          ))
        }
    </StyledContainer>
  );
}
const StyledContainer = styled.div`

box-sizing: border-box;
  padding: 0px 24px 10px 24px;
  min-width: 240px;
  width: 270px;
  height: 290px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  & > .image {
    width: 185px;
  }
  & > .image > img {
    height: 180px;
    width: 180px;
  }

  & > h2 {
    margin: 0;
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #616161;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  a {
    text-decoration: none;
    color: ${colors.Gray};
    font-size: 24px;
  }
  
  a:hover {
    color: ${colors.DarkGray};
  }

  a:visited {
    color: ${colors.Gray};
  }


  .cardTeam {
    .github {
      color=${colors.Gray}
    }
    
    .linkedin {
      color=${colors.Gray}
    }
  }
`;

export default CardTeam;
