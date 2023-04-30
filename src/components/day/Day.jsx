import React, {useState} from "react";
import DayOriginal from './Day.module.scss';

export default function Day(props) {
    const [isActive, setIsActive] = useState(false);
    const {checked} = props;

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return(
        <p onClick={handleClick} className={isActive? checked : DayOriginal.day__p} >{props.date}</p>
    )
}