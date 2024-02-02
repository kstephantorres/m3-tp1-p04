import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";

const FormularioTarea = () => {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    
    // handle+algo nombre de funciones para el manejo de states 
    const handleSubmit=(e)=>{
        e.preventDefault()
        // &&  si la primer expresion es verdadera hace lo que le sigue sino no hace nada
        !taskList.includes(task.toUpperCase()) && task.trim() !== "" && setTaskList([...taskList,task.trim()])
        setTask('')
    }
    const deleteTask=(taskName)=>{
        const tareasFiltradas = taskList.filter((task)=> task !== taskName)
        setTaskList(tareasFiltradas)
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" >
                    <Form.Control 
                        type="text" 
                        placeholder="Ej: Tarea 1" 
                        minLength={3} 
                        maxLength={80}
                        value={task}
                        onChange={(e)=>setTask(e.target.value.toUpperCase())}
                    />
                    <Button variant="dark" className="ms-2" type="submit" > Agregar </Button>
                </Form.Group>
            </Form>
            <TaskList taskList={taskList} deleteTask={deleteTask}></TaskList>
            
        </section>
    );
};

export default FormularioTarea;