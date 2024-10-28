import React, { useCallback, useState } from 'react';
import { Card, List, ListItem, CardContent } from '@mui/material';
import NewTaskCard from './NewTaskCard';
import TaskCard from './TaskCard/TaskCard';
import { FILTER, Task } from './types';
import FilterBar from './FilterBar/FilterBar';


const Todolist: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [activeFilter, setFilter] = useState<number>(FILTER.ALL);

    const getTasks = useCallback(() => {
        switch (activeFilter) {
            case FILTER.ACTIVE: return tasks.filter(task => !task.isCompleted);
            case FILTER.COMPLETED: return tasks.filter(task => task.isCompleted);
            default: return tasks;
        }
    }, [activeFilter, tasks]);

    const addTask = (text: string) => {
        if (text.trim() !== '') {
            console.log(text);
            setTasks([...tasks, {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                text: text,
                isCompleted: false
            }]);
        }
    };

    const filterHandle = (newFilter: FILTER) => setFilter(newFilter);

    const deleteTask = (taskIdToDelete: number) => {
        setTasks(tasks.filter(task => task.id !== taskIdToDelete));
    };

    const deleteCompletedTasks = () => {
        setTasks(tasks.filter(tasks => !tasks.isCompleted));
    }

    const completeTask = (taskIdToComplete: number) => {
        const updatedTasks = [...tasks];
        const index = tasks.findIndex(task => task.id === taskIdToComplete);
        if (index < 0) { return }
        updatedTasks[index].isCompleted = true;
        setTasks(updatedTasks);
    };

    return (
        <div className="todos-container">
            <h1>Todolist</h1>
            <Card variant="outlined" className="task-card">
                <CardContent>
                    <FilterBar filters={[FILTER.ALL, FILTER.ACTIVE, FILTER.COMPLETED]} activeFilter={activeFilter} onClickFilter={filterHandle} onClickDel ={deleteCompletedTasks}/>
                    <NewTaskCard addTask={addTask} />
                    <List>
                        {getTasks().map(task => (
                            <ListItem key={task.id}>
                                <TaskCard task={task} deleteTask={deleteTask} completeTask={completeTask} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

export default Todolist;
