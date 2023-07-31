import React from "react";
import '../styling/todolist.css';
import DisplayToDoList from "./DisplayToDoList";

const AddToDoList = () => {
    const [tasks, setTasks] = React.useState([]);

    const [newTask, setNewTask] = React.useState('');
    const [editIndex, setEditIndex] = React.useState(null);

    const addTask = () => {
        if (newTask.trim() !== '') {
            if (editIndex !== null) {
              const updatedTasks = [...tasks];
              updatedTasks[editIndex].text = newTask;
              setTasks(updatedTasks);
              setEditIndex(null);
            } else {
              setTasks([...tasks, { text: newTask, completed: false }]);
            }
            setNewTask('');
          }
    };

    // Load tasks from local storage on initial render
    React.useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setTasks(storedTasks);
    }, []);

    // Save tasks to local storage whenever the tasks state changes
    React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter To Do"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="inputField" />

                <button
                    className="button"
                    onClick={() => addTask()}>+</button>

                <ol>
                    {tasks.map((task, index) => {
                        return <DisplayToDoList key={index} task={task} index={index} setTasks={setTasks} tasks = {tasks} setNewTask = {setNewTask} setEditIndex = {setEditIndex}/>
                    })}
                </ol>
            </div>
        </>
    );
};

export default AddToDoList;