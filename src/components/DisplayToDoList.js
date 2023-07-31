import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import '../styling/todolist.css';

const DisplayToDoList = (props) => {
   
    // Function to handle marking a task as completed
    const completeTask = (index) => {
        const updatedTasks = [...props.tasks];
        updatedTasks[index].completed = true;
        props.setTasks(updatedTasks);
    };

    // Function to handle removing a task
    const removeTask = (index) => {
        const updatedTasks = [...props.tasks];
        updatedTasks.splice(index, 1);
        props.setTasks(updatedTasks);
    };

    const editTask = (index) => {
        props.setNewTask(props.tasks[index].text);
        props.setEditIndex(index);
      };

    return (
        <>
        
            <li key={props.index} className={props.task.completed ? 'complete' : ''}>
                <span style={{marginLeft: '10%', marginRight: '20%'}}>{props.task.text}</span>
                
                {!props.task.completed && (
                    <>
                        <EditIcon onClick={() => editTask(props.index)}/>
                        <CheckCircleOutlineIcon onClick={() => completeTask(props.index)}/>
                        
                       
                    </>
                    
                )}
                <CloseIcon onClick={() => removeTask(props.index)}/>
            
            </li>
     
        </>
    );
};

export default DisplayToDoList;