import React from 'react'

const ConditionalMessage = ({ isLoggedIn }) => {
    return (
        <div style={styles.messageContainer}>
            {isLoggedIn ? <h1>Welcome back!</h1>: <h1>Please log in.</h1>}
        </div>
    );
};

const styles = {
    messageContainer: {
        padding: '16px',
        textAlign: 'center',
        margin: '20px 0 0'
    }
};

export default ConditionalMessage;