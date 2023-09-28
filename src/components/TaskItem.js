import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
    return (
        <li>
            <Link to={`/task/${task.id}`}>
                <h3>{task.title}</h3>
            </Link>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
        </li>
    );
};

export default TaskItem;
