import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "./UI/ColorStyles";
import Icons from "./UI/Icons";

function Pagination({ pages = 10 }) {
  const numbersPages = [];
  for (let i = 1; i <= pages; i++) {
    numbersPages.push(i);
  }
  const [numbersList, setnumbersList] = useState(numbersPages);
  const previousPhoto = () => {
    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");
    btnNext.style.visibility = "visible";
    if (!(numbersList[0] === 1)) {
      setnumbersList([
        numbersList[numbersList.length - 1],
        ...numbersList.splice(0, numbersList.length - 1),
      ]);
    }
    if (numbersList[0] === 1) {
      btnPrev.style.visibility = "hidden";
    }
  };

  const nexPhoto = () => {
    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");
    btnPrev.style.visibility = "visible";
    if (!(numbersList[0] === pages - 4)) {
      setnumbersList([...numbersList.splice(1), numbersList[0]]);
    }

    if (numbersList[0] === pages - 5) {
      btnNext.style.visibility = "hidden";
    }
  };

  const handleClick = ({ target }) => {
    const pages = document.querySelectorAll(".pages");
    pages.forEach((page) => {
      page.classList.remove("active-page");
    });
    target.classList.add("active-page");

    //Current Page
    console.log(target.innerHTML);
  };
  return (
    <StyledContainer>
      <Icons className="prev" type="previous" onClick={previousPhoto} />
      <StyleContainerNumbers>
        {numbersList.map((number, index) => (
          <span key={index} onClick={handleClick} className="pages">
            {number}
          </span>
        ))}
      </StyleContainerNumbers>
      <Icons className="next" type="next" onClick={nexPhoto} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & > svg {
    cursor: pointer;
  }

  .prev {
    visibility: hidden;
  }
`;

const StyleContainerNumbers = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  font-family: sans-serif;
  width: 180px;
  overflow: hidden;
  & > span {
    box-sizing: border-box;
    width: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.Gray};
    padding: 5px 12px;
    border: 1px solid rgba(97, 97, 97, 0.15);
    border-radius: 4px;
    transition: all 300ms ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span:hover {
    cursor: pointer;
    background: rgba(244, 143, 177, 0.15);
    border: 1px solid ${colors.DarkPink};
  }

  .active-page {
    cursor: pointer;
    background: rgba(244, 143, 177, 0.15);
    border: 1px solid ${colors.DarkPink};
  }
`;

export default Pagination;
