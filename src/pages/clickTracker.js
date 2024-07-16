import React, { useState } from 'react';

const ClickTracker = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div style={styles.container}>
            <button onClick={handleClick}>Click Me</button>
            <p>Button clicked {clickCount} times</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
    }
};

export default ClickTracker;