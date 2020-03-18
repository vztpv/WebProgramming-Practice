import React from 'react';

const MyComponent = props => {
    return <div className='react'> Hello my name is {props.name}  <br />
        children {props.children}
    </div>
};

MyComponent.defaultProps = {
    name: 'inintal name'
};

export default MyComponent;
