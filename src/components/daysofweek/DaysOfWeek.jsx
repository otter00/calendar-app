import React from "react";
import styled from 'styled-components';
import Month from '../month/Month';
import DaysStyles from './DaysOfWeek.module.scss';

const DaysWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 10px 50px;
    display: block;
    font-weight: 600;
`
const WeekDays = styled.div`
    display: flex;
    justify-content: space-around;
`
const Days = styled.div`
    display: flex;
    justify-content: space-around;
`
export default function DaysOfWeek(props) {
    return (
        <DaysWrapper>
            <WeekDays>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p>S</p>
                <p>S</p>
            </WeekDays>
            <Days>
                <p className={DaysStyles.day__p}>25</p>
                <p className={DaysStyles.day__p}>26</p>
                <p className={DaysStyles.day__p}>27</p>
                <p className={DaysStyles.day__p}>28</p>
                <p className={DaysStyles.day__p}>29</p>
                <p className={DaysStyles.day__p}>30</p>
                <p className={DaysStyles.day__p}>31</p>
            </Days>
            <Month />
        </DaysWrapper>
    )
}