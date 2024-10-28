import React, { useCallback, useState } from 'react';
import { Card, List, ListItem, CardContent, ButtonGroup, Button } from '@mui/material';
import NewTaskCard from './NewTaskCard';
import TaskCard from './Task';
import { FILTER, Task } from './types';
import FilterButton from './FilterButton';
import { FILTER_NAME } from './settings-filter';


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
                    <ButtonGroup fullWidth variant="contained" style={{ margin: '10px 0', gap: '8px', boxShadow: 'none', border: 'none' }}>
                        {
                            [FILTER.ALL, FILTER.ACTIVE, FILTER.COMPLETED].map(curFilter => {
                                return (<FilterButton filter={curFilter} activeFilter={activeFilter} onClick={() => filterHandle(curFilter)}>
                                    {FILTER_NAME[FILTER[curFilter]]}
                                </FilterButton>);
                            })
                        }
                        <Button size="small" variant="outlined" color="secondary" onClick={deleteCompletedTasks} style={{ borderRadius: '20px' }}>
                            Удалить выполненные
                        </Button>
                    </ButtonGroup>
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
