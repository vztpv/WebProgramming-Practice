
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>
            Hello My Name is {name} <br />
            children value is {children}
            <br />
            number is {favoriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    kname: "default name"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;