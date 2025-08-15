import React from 'react';
import './genre-select.css';

class GenreSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(genre) {
        if (this.props.onSelect) {
            this.props.onSelect(genre);
        }
    }

    render() {
        const { genres, selectedGenre } = this.props;

        const buttons = genres.map((genre) =>
            React.createElement(
                'button',
                {
                    key: genre,
                    onClick: () => this.handleClick(genre),
                    style: {
                        borderBottom: selectedGenre === genre ? '4px solid #F65261' : '4px solid transparent',
                    },
                    className: 'genre-select-item',
                },
                genre
            )
        );

        return React.createElement(
            'div',
            { style: { display: 'flex', flexWrap: 'wrap', gap: '4px' } , className: 'genre-select-component' },
            ...buttons
        );
    }
}

export default GenreSelect;
