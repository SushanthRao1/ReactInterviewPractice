import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTask = ({ modal, toggle, updateTask, taskobj }) => {
    const [taskName, setTask] = useState("");
    const [des, setDes] = useState("");

    const handleChange = (e) => {
        // const { name, value } = e.targe; //not understood
        const name = e.target.name
        const value = e.target.value
        // console.log("test" + e.target.name + e.target.value)
        if (name === "TaskName") {
            setTask(value)
        }
        else {
            setDes(value)
        }
    }

    useEffect(() => {
        setTask(taskobj.Name)
        setDes(taskobj.Description)
    }, [taskobj.Name, taskobj.Description]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = des
        updateTask(tempObj)
    }
    /*    const handleSave = (e) => {
            e.preventDefault()
            let taskobject = {}
            taskobject["Name"] = taskName
            taskobject["Description"] = des
            //   save(taskobject)
        }*/

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="TaskName" />
                    </div><br />
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="5" className="form-control" value={des} onChange={handleChange} name="TaskDes">
                        </textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal >
    )
}

export default EditTask
