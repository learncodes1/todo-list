import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
 import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    
    return (
        <>
            <h2 className="text-center">Task List</h2>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Due Date</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    {tasks && tasks?.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell><Link to={`/task/${task.id}`}>
                                <span className="cursor-pointer text-blue-600">⚪ {task.title}</span>
                            </Link></TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell>{task.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <div className="py-3">
                <Button radius="sm">                    
            <Link to="/create">Create Another Task</Link>
                </Button> 
            </div>
        </>
    );
};

export default TaskList;
