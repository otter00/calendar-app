import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  border-bottom: 1px solid black;
`
const HeaderSpan = styled.div`
    color: black;
    font-size: 1.5em;
`
const HeaderAddSign = styled.div`
    color: red;
    font-size: 3em;
    padding-bottom: 7px;
`

export default function Header(props) {
    return(
        <HeaderWrapper>
            <HeaderSpan>Interview Calendar</HeaderSpan>
            <HeaderAddSign>+</HeaderAddSign>
        </HeaderWrapper>
    )
}