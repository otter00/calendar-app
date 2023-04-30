import React, {Children, useState} from "react";
import styled from 'styled-components';
import Month from '../month/Month';
import Date from '../day/Day';
import DaysStyles from './DaysOfWeek.module.scss';
import cn from 'classnames';

let checked;

const days = [{
    id: 1,
    date: 25,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 2,
    date: 26,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 3, 
    date: 27,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 4,
    date: 28,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 5,
    date: 29,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 6, 
    date: 30,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}, {
    id: 7, 
    date: 31,
    checked: checked = cn([`${DaysStyles.day__checked}`])
}];

const DaysWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 10px 50px;
    display: block;
    font-weight: 600;
`
const WeekDays = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 12px;
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

            <Days> {
                        days.map((day, id) =>
                        <Date
                        key={id}
                        date={day.date}
                        checked={day.checked}
                        ></Date>
                        )}
                {/* <p className={DaysStyles.day__p}>25</p>
                <p className={DaysStyles.day__p}>26</p>
                <p className={DaysStyles.day__p}>27</p>
                <p className={DaysStyles.day__p}>28</p> */}
                {/* We can check the 29th of march as the example says */}
                {/* <p onClick={handleClick} className={isActive? DaysStyles.day__checked : DaysStyles.day__p}>29</p>
                <p className={DaysStyles.day__p}>30</p>
                <p className={DaysStyles.day__p}>31</p> */}

            </Days>
            <Month />
        </DaysWrapper>
    )
}