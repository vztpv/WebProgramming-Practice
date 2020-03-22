import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                Hello MyName is {name}<br />
                children is {children} <br />
                number is {favoriteNumber}
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: "default Name"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};


export default MyComponent;