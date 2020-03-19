
import React from 'react';

const MyCommponet = props => {
    return (
        <div>
            {props.name} <br />
            {props.children}
        </div>
    );
};

MyCommponet.defaultProps = {
    name: 'default'
}

export default MyCommponet;
