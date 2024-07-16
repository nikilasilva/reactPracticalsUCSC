import React from 'react'

const Card = ({ title, content }) => {
    return (
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid',
        borderRadius: '4px',
        padding: '16px',
        width: '50%',
        margin: '16px auto',
        
    }
};

export default Card;