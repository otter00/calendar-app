import React from "react";
import styled from 'styled-components';

import MothStyles from './Month.module.scss';
import classnames from "classnames";
import * as calendar from './Calendar';

//let style = cn([`${MothStyles.day__center}`, `${"day"}`]);

const MonthWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 15px 50px;
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    align-items: center;
`

const MonthName = styled.select`
    font-size: 1.2em;
    font-weight: 600;
    border: none;
    background-color: #e8e8e8;
`

const Year = styled.select`
    font-size: 1.2em;
    font-weight: 600;
    border: none;
    background-color: #e8e8e8;
`

const DaysTable = styled.table`
background-color: white;
margin: auto;
display: flex;
flex-direction: column;
`
const Tbody = styled.tbody`
//height: 520px;
`
export default class Month extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2019, 2020, 2021, 2022, 2023],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDays: [ 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
        onChange: Function.prototype
    }

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    }

    get year() {
        return this.state.date.getFullYear();
    }
    get month() {
        return this.state.date.getMonth();
    }
    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonth = () => {
        const date = new Date(this.year, this.month - 1);
        console.log(date);
        this.setState({date});
    };

    handleNextMonth = ()=>{
        const date = new Date(this.year, this.month + 1);
        console.log(date);
        this.setState({date});
    };

    handleChange = ()=>{
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);
        this.setState({date});
    };

    handleDayClick = date => {
        this.setState({selectedDate: date});

        this.props.onChange(date);
    };

    render() {
        const {years, monthNames, weekDays} = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthDayDate = calendar.getMonthData(this.year, this.month);
    
        return(
        <>
        <DaysTable>
                {/* <thead>
                    <tr className={MothStyles.days__center}>
                        {weekDays.map(name =>
                            <th key={name}>{name}</th>)}
                    </tr>
                </thead> */}

                <MonthWrapper>
                <button 
                onClick={this.handlePrevMonth}
                className={MothStyles.month__p}>{'<'}</button>
                <MonthName
                ref={element => this.monthSelect = element}
                defaultValue={this.month}
                onChange={this.handleChange}
                >
                    {monthNames.map((name, index) =>
                    <option key={name} value={index}>{name}</option>
                    )}
                </MonthName>

                <Year
                ref={element => this.yearSelect = element}
                defaultValue={this.year}
                onChange={this.handleChange}
                >
                    {years.map(year =>
                        <option key={year} value={year}>{year}</option>
                        )}
                </Year>

                <button 
                onClick={this.handleNextMonth}
                className={MothStyles.month__p}>{'>'}</button>
            </MonthWrapper>

                <Tbody>
                        {monthDayDate.map((week, index) => 
                        <tr key={index}>
                            {
                                week.map((date, index) => date ?
                                <td 
                                key={index} 
                                className={classnames({
                                    'today': calendar.areEqual(date, currentDate),
                                    'selected': calendar.areEqual(date, selectedDate)
                                })}
                                onClick={()=> this.handleDayClick}
                                >{date.getDate()}</td>
                                :
                                <td key={index}></td>)
                            }
                        </tr>)}
                </Tbody>
            </DaysTable>
        </>
    )
    }
}