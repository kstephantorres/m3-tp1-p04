import { ListGroup} from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = ({taskList, deleteTask}) => {
    return (
        <ListGroup>               
            {
                taskList.map((task, position)=><TaskItem key={position} taskName={task} deleteTask={deleteTask} ></TaskItem> )
               
            }
        </ListGroup>
    );
};

export default TaskList;