import React from "react";
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 15px 50px;
    align-items: center;
    border-top: 1px solid black;
`
const FooterDay = styled.div`
    color: red;
    font-size: 1.5em;
`

export default function Footer(props) {
    return(
        <FooterWrapper>
            <FooterDay>Today</FooterDay>
        </FooterWrapper>
    )
}