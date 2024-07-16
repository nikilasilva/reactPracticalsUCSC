import React from 'react';

const UserProfile = ({ name, age, email }) => {
    return (
        <div style={styles.profileCard}>
            <h1>User Profile</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

const styles = {
    profileCard: {
        border: '1px solid',
        borderRadius: '4px',
        padding: '16px',
        width: '50%',
        margin: '16px auto',
    }
};

export default UserProfile;