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

export default class Month extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2018, 2019, 2020],
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

    handleChange = ()=>{};

    handleDayClick = date => {
        this.setState({selectedDate: date});

        this.props.onChange(date);
    };

    render() {
        const {years, monthNames, weekDays} = this.props;
    
        const monthDayDate = [
            [undefined, undefined, new Date(), new Date(), new Date(), new Date(), new Date()],
            [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
            [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
            [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
            [new Date(), new Date(), new Date(), new Date(), undefined, undefined, undefined]
        ];{}
    
        return(
        <>
            <MonthWrapper>
                <button 
                onClick={this.handlePrevMonth}
                className={MothStyles.month__p}>{'<'}</button>
                <MonthName>
                    {monthNames.map((name, index) =>
                    <option key={name} value={index}>{name}</option>
                    )}
                </MonthName>
                <Year>
                    {years.map(year =>
                        <option key={year} value={year}>{year}</option>
                        )}
                </Year>
                <button 
                onClick={this.handleNextMonth}
                className={MothStyles.month__p}>{'>'}</button>
            </MonthWrapper>

            <table>
                <tbody>
                        {monthDayDate.map((week, index) => 
                        <tr key={index} className="week">
                            {
                                week.map((date, index) => date ?
                                <td 
                                key={index} 
                                className="day"
                                onClick={()=> this.handleDayClick}
                                >{date.getDate()}</td>
                                :
                                <td key={index}></td>)
                            }
                        </tr>)}
                </tbody>
            </table>
        </>
    )
    }
}