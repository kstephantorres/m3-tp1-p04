import { Button, ListGroupItem } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'

const TaskItem = ({taskName, deleteTask}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between item">
            <span>{taskName}</span>
            <Button variant="danger" onClick={()=>{deleteTask(taskName)}}> Borrar <i className="bi bi-trash-fill mx-1"></i></Button>            
        </ListGroupItem>
    );
};

export default TaskItem;