import { css } from "@emotion/react";
import React from "react";
import {
  RiMoneyDollarCircleLine,
  RiBuildingLine,
  RiCoinsLine,
  RiUserAddLine,
  RiUserReceived2Line,
  RiHome8Line,
  RiUploadLine,
} from "react-icons/ri";

import {
  BiBed,
  BiBath,
  BiArea,
  BiEdit,
  BiSearch,
  BiUser,
  BiLogOutCircle,
  BiCopyright,
} from "react-icons/bi";

import { MdPets } from "react-icons/md";

import { ImCancelCircle } from "react-icons/im";

import { FaHeart, FaGithub, FaReact } from "react-icons/fa";

import { DiRuby } from "react-icons/di";

import { IoMdClose, IoIosArrowUp } from "react-icons/io";

import { GrNext, GrPrevious } from "react-icons/gr";

import { AiOutlineDown, AiOutlineLinkedin } from "react-icons/ai";

const iconSet = {
  dollar: RiMoneyDollarCircleLine,
  department: RiBuildingLine,
  bed: BiBed,
  bath: BiBath,
  area: BiArea,
  pet: MdPets,
  price: RiCoinsLine,
  edit: BiEdit,
  cancel: ImCancelCircle,
  heart: FaHeart,
  github: FaGithub,
  ruby: DiRuby,
  react: FaReact,
  search: BiSearch,
  join: RiUserAddLine,
  login: RiUserReceived2Line,
  home: RiHome8Line,
  user: BiUser,
  logout: BiLogOutCircle,
  choosefile: RiUploadLine,
  close: IoMdClose,
  next: GrNext,
  previous: GrPrevious,
  down: AiOutlineDown,
  up: IoIosArrowUp,
  copyright: BiCopyright,
  linkeding: AiOutlineLinkedin,
};

const Icons = ({ type, color, className }) => {
  const ComponentToRender = iconSet[type];
  return (
    <ComponentToRender
      className={className}
      css={css`
        color: ${color};
      `}
    />
  );
};

export default Icons;
