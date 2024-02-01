import { Button, ListGroupItem } from "react-bootstrap";

const TaskItem = ({taskName, deleteTask}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            {taskName}
            <Button variant="danger" onClick={()=>{deleteTask(taskName)}}>Borrar <i className="bi bi-trash-fill"></i></Button>            
        </ListGroupItem>
    );
};

export default TaskItem;