import React from 'react';

const TodoList = ({ items }) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;