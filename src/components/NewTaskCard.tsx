import React, { useState } from 'react';
import { CardContent, TextField, Button } from '@mui/material';
import './NewTaskCard.css';

type TTaskCard = {
    addTask: (task: string) => void;
}

const NewTaskCard = ({ addTask }: TTaskCard) => {

    const [task, setTask] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };


    return (
        
            <CardContent>
                <TextField
                    label="Введите задачу"
                    variant="outlined"
                    value={task}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <div className="button-container">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddTask}
                        className="add-button"
                    >
                        Добавить
                    </Button>
                </div>
            </CardContent>
    );
};

export default NewTaskCard;
