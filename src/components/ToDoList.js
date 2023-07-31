import React from "react";
import AddToDoList from "./AddToDoList";
import '../styling/todolist.css';

const ToDoList = () => {
    return (
        <>
        <div className="main-div">
            <div className="sub-div">
                <h1 className="heading">To Do List</h1>
                <AddToDoList />
            </div>
        </div>
        </>
    );
};

export default ToDoList;