import React from "react";
import styled from "styled-components";
import { WHITE } from "../../css.settings";

const Wrapper = styled.header`;
  background-color: ${props => props.theme.palettes.primary.background}
  color: ${WHITE}
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
`;
const RightContent = styled.div``;

const Username = styled.h4`
  font-size: 1.3rem;
  font-weight: normal;
`;

const OSFLogo = styled.h4`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 0.7rem;
  width: 10em;
  > span {
    color: #fff;
    font-weight: bold;
    font-size: 2.5em;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 0.3em;
    margin-right: 0.25em;
    &:after {
      content: "";
      height: 1em;
      width: 0.05em;
      background-color: #fff;
      position: absolute;
      right: 0;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <LeftContent>
      <Username>Cícero Viana</Username>
    </LeftContent>
    <RightContent>Redux-Saga</RightContent>
  </Wrapper>
);
export default Header;
