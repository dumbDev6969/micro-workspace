import { useState, useRef } from 'react'
import DynamicForm from '../components/Form';
import { TextField, Input, Label } from '@heroui/react';
import TaskList from '../components/TaskList';

const Task = () => {
    const [ newTask, setNewTask ] = useState('');
    // initalize the array
    const [tasks, setTasks] = useState([
        { id: 1, text: 'hello', isComplete: true }
    ]);
    
    
    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === '') return;

        //  Calculate the next ID dynamically
        const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        // create the new task
        const createdTask = {
            id: nextId,
            text: newTask,
            isComplete: false
        };

        setTasks([...tasks, createdTask]);
        setNewTask[''];
        
    }
    
    
    return (
        <>
            <DynamicForm
                title="Task From"
                description="This is form lolololol"
                variant="primary"
                btnText="Submit"
                btnType="submit"
                onSubmit={ addTask }
            >
                <TextField name="email" type="email">
                    <Label>Task name</Label>
                    <Input onChange={(e) => setNewTask(e.target.value)} value={ newTask } type="text" placeholder="task" variant="secondary" />
                </TextField>
            </DynamicForm>

            <TaskList items={tasks} />
        </>
    )
}

export default Task