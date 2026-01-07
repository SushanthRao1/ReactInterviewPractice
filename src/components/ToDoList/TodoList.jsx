import React, { useState, useEffect } from 'react'
import CreateTask from '../../modals/ToDoLostModals/createTask.js'
import Card from './Card.jsx'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTasklist] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("TaskList", "Description")
        let obj = JSON.parse(arr) //JSON string to Array object
        if (obj) {
            setTasklist(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempTaskList = taskList
        tempTaskList.splice(index, 1)
        setTasklist(tempTaskList)
        localStorage.setItem("TaskList", JSON.stringify(tempTaskList))
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTasklist(tempList)
        window.location.reload()
    }
    // console.log("taskList New " + taskList)

    const toggle = () => {
        setModal(!modal);
        // console.log('dasdf' + !modal)
    }

    const saveTask = (taskobj) => {
        let tasklist = taskList
        tasklist.push(taskobj)
        localStorage.setItem("TaskList", JSON.stringify(taskList)) // convert to JSON string
        setTasklist(taskList)
        setModal(false)
    }


    return (<>
        <div className="header text-center">
            <h3>Todo List</h3>
            <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Click Here</button>
        </div>
        <div className="task-container">
            {taskList && taskList.map((taskobj, index) => <Card taskobj={taskobj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
        </div>
        <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </>)
}

export default TodoList;
