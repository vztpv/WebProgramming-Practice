
import React from 'react';

const MyCommponent = props => {
    return (
        <div>
            {props.name} <br />
            {props.children}
        </div>
    );
};

MyCommponent.defaultProps = {
    name: 'default'
}

export default MyCommponent;
