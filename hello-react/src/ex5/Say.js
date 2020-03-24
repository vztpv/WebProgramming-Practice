
import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("Hello");
    const onClickLeave = () => setMessage("bye");

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>in</button>
            <button onClick={onClickLeave}>out</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                Red
            </button>
            <button style={{ color: 'black' }} onClick={() => setColor('black')}>
                Black
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                Blue
            </button>
        </div>
    );
};

export default Say;