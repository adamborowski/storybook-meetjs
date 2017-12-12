import React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs, array, boolean, number, date, button} from "@storybook/addon-knobs";
import withPropsCombinations from 'react-storybook-addon-props-combinations'
import Mood from './Mood';

const defaultDate = new Date();

function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue)
    return new Date(stringTimestamp)
}


class AutomaticDemo extends React.Component {

    state = {
        counter: 0
    };

    componentDidMount() {
        this.start();
    }


    compontnWillUnmount() {
        this.stop();
    }

    start = ()=> {
        this.stop();
        this.interval = setInterval(()=>this.setState({counter: (this.state.counter + 1) % 5}), 400);
    };

    stop = () => {
        clearInterval(this.interval);
        delete this.interval;
    };

    render() {

        button('start playing', this.start);
        button('stop playing', this.stop);

        return <div style={{margin: 100}}>
            <Mood
                value={this.state.counter}
            />
        </div>;
    }

}

storiesOf('Mood', module)
    // config

    .addDecorator(withKnobs)

    // stories

    .add('default', () => <div style={{margin: 100}}>
        <Mood
            value={number('value', 0, {range: true, min: 0, max: 4, step: 1})}
            date={myDateKnob('date', defaultDate)}
        />
    </div>)

    .add('automatic mood change', () => <AutomaticDemo/>)

    .add('props combinations', withPropsCombinations(Mood, {
        value: [0, 1, 2, 3, 4], date: [1, 2, 3, 4, 5, 6, 7].map(n=>new Date(`2017-11-0${n}`))
    }, {showSource: false}))

;
