import React from "react";
import PropTypes from "prop-types";
import {Avatar, Badge} from "material-ui";
import mood1 from "./mood1.png";
import mood2 from "./mood2.png";
import mood3 from "./mood3.png";
import mood4 from "./mood4.png";
import mood5 from "./mood5.png";


const Mood = props => {

    const {value, moods, date, days, ...rest} = props;

    const smiley = <Avatar src={moods[value]} style={{width: 100, height: 100, margin: -27}}/>;

    return <div {...rest} >
        { date ?
            <Badge badgeContent={date && days[date.getDay()]} color="primary">
                {smiley}
            </Badge>
            :
            smiley
        }
    </div>

};

Mood.propTypes = {
    value: PropTypes.number,
    moods: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.instanceOf(Date),
    days: PropTypes.arrayOf(PropTypes.string)
};

Mood.defaultProps = {
    value: 0,
    moods: [mood1, mood2, mood3, mood4, mood5],
    days: ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

};

export default Mood;