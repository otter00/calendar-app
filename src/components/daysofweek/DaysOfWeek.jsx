import React, {Children, useState} from "react";
import styled from 'styled-components';
import Month from '../month/Month';
import Date from '../day/Day';
import DaysStyles from './DaysOfWeek.module.scss';
import cn from 'classnames';

let checked;

const days = [{
    id: 1,
    date: 'M',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 2,
    date: 'T',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 3, 
    date: 'W',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 4,
    date: 'T',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 5,
    date: 'F',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 6, 
    date: 'S',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 7, 
    date: 'S',
    checked: checked = cn([`${DaysStyles.day__checked}`])
}];

const DaysWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 10px 50px;
    display: block;
    font-weight: 600;
`
const WeekDays = styled.div`
    background-color: #e8e8e8;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
`
const Days = styled.div`
    display: flex;
    font-weight: 800;
    font-size: 12px;
    justify-content: space-around;
    background-color: #e8e8e8;
`

export default function DaysOfWeek(props) {

    return (
        <DaysWrapper>
            {/* <WeekDays>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p>S</p>
                <p>S</p>
            </WeekDays> */}

            <Days> {
                        days.map((day, id) =>
                        <Date
                        key={id}
                        date={day.date}
                        checked={day.checked}
                        ></Date>
                        )}
            </Days>
            
            <Month />
        </DaysWrapper>
    )
}