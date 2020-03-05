import React from 'react'
import './ToDoListItem.css'

const ToDoListItem = ({ label, important = false }) => {

    const spanStyle = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <span className="ToDoListItem" style={spanStyle}>{label}</span>
    );
};

export default ToDoListItem;