import React, { useState } from 'react'

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    // e = event
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Input Value: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Enter text:
                    <input type='text' value={inputValue} onChange={handleChange} />
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;