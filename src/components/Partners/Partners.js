import styled from "@emotion/styled";
import Icons from "../UI/Icons";
import { colors } from "../UI/ColorStyles";
import { useState } from "react";
import Text from "../UI/Heading";

const team = [
  {
    image: "https://media-exp1.licdn.com/dms/image/C5603AQHneHTCK9dMYw/profile-displayphoto-shrink_200_200/0/1613845199476?e=1623283200&v=beta&t=r3Vid7-zdZtkXOJZIIY_655uhlClrEJv59t1oCOD1hQ",
    nickname: "Abel Arbildo",
    linkedin: "https://www.linkedin.com/in/abel-arbildo-jurupe/",
    github: "https://github.com/AbelJohn2020",
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQGye_epHFrMmA/profile-displayphoto-shrink_200_200/0/1611368680018?e=1623283200&v=beta&t=LkHKdpphNdHlX4jjrkzgxL8_gBm__FNXCjIzzfA2ok8",
    nickname: "Christian Tordoya",
    linkedin: "https://www.linkedin.com/in/christian-tordoya-suca/",
    github: "https://github.com/christianTordoya03",
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C5603AQFijqJXvnYXkQ/profile-displayphoto-shrink_200_200/0/1517355330560?e=1623283200&v=beta&t=s3sKRkv2D0awU9aH7o0_x7c9-7piCSZqsoCGWGNUqJM",
    nickname: "Nick Correa",
    linkedin: "https://www.linkedin.com/in/nickcorreagarcia/",
    github: "https://github.com/nickcoga",
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQEbDtbMC8cALg/profile-displayphoto-shrink_800_800/0/1613978917044?e=1623283200&v=beta&t=S0obev6mWqvcz6AAfD6if3cgSBEXNHOsB1o8-_6AexY",
    nickname: "Carlos Echevarria",
    linkedin: "https://www.linkedin.com/in/juancarlosechevarria/",
    github: "https://github.com/CarlosEnrique103",
  },
];
function Partners() {
  const partners = team;
  return (
    <StyledContainer>
      <div className="container">
        {partners.map((partner) => (
          <div key={partner.nickname} className="cardTeam">
            <div className="image">
              <img src={partner.image} alt={partner.nickname} />
            </div>
            <Text type="Montserrat" size="H6">
              {partner.nickname}
            </Text>
            <div className="buttons">
              <a href={partner.github} target="blank">
                <Icons type="github" className="github" />
              </a>
              <a href={partner.linkedin} target="blank">
                <Icons type="linkedin" className="linkedin" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  &  .image {
    width: 185px;
  }
  &  .image > img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
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

  .container {
    display: flex;
    margin: 26px 0 0 0;
    
  }

  .cardTeam {
    max-height: 262px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px 12px 8px;
    margin: 0 60px 0 0;
    .github {
      color=${colors.Gray}
    }
    
    .linkedin {
      color=${colors.Gray}
    }
  }
`;

export default Partners;
