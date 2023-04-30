import React from "react";
import styled from 'styled-components';

import MothStyles from './Month.module.scss';

const MonthWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 0px 50px;
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    align-items: center;
    margin-top: 7px;
`

const MonthName = styled.div`
    font-size: 1.2em;
`

export default function Month(props) {
    return(
            <MonthWrapper>
                <p className={MothStyles.month__p}>&#60;</p>
                <MonthName>March 2019</MonthName>
                <p className={MothStyles.month__p}>&#62;</p>
            </MonthWrapper>
    )
}