import React from 'react';
import './counter.css';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.initialValue || 0 };
    }

    increment = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    }

    decrement = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
    }

    render() {
        return React.createElement(
            'div',
            { style: { textAlign: 'center', marginTop: '20px', color: 'white' } },
            React.createElement('h2', null, `Value: ${this.state.value}`),
            React.createElement(
                'button',
                { onClick: this.decrement, style: { marginRight: '10px' }, className: 'counter-button' },
                '-'
            ),
            React.createElement(
                'button',
                { onClick: this.increment, className: 'counter-button' },
                '+'
            )
        );
    }
}

export default Counter;
