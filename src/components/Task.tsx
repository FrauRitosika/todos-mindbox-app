import { ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "./types";

type TTask = {
    task: Task;
    deleteTask: (taskId: number) => void;
    completeTask: (taskId: number) => void;
}


const TaskCard = ({ task, deleteTask, completeTask }: TTask) => {
    return (
        <>
            <Checkbox
                checked={task.isCompleted}
                onChange={() => completeTask(task.id)}
                color="primary"
            />
            <ListItemText
                primary={task.text}
                style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
                <DeleteIcon />
            </IconButton>
        </>
    );
};

export default TaskCard;
