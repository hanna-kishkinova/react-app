import React from 'react';
import './search-box.css';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: props.initialQuery || ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleChange(event) {
        this.setState({ query: event.target.value });
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.triggerSearch();
        }
    }

    handleSearchClick() {
        this.triggerSearch();
    }

    triggerSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.query);
        }
    }

    render() {
        return React.createElement(
            'div',
            { style: { display: 'flex', gap: '8px', alignItems: 'center' }, className: 'search-container' },
            React.createElement('input', {
                className: 'search-input',
                type: 'text',
                value: this.state.query,
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'What do you want to watch?',
            }),
            React.createElement(
                'button',
                {
                    className: 'primary-button',
                    onClick: this.handleSearchClick,
                    style: { padding: '6px 12px', fontSize: '14px', cursor: 'pointer' }
                },
                'Search'
            )
        );
    }
}

export default SearchBox;
