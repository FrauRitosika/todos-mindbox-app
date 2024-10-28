import { render, fireEvent } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe(TaskCard, () => {
    it("task card displays correct text", () => {
        const task = {
            id: 1,
            text: 'test',
            isCompleted: false,
        };
        const deleteTask = jest.fn();
        const completeTask = jest.fn();
        const result = render(<TaskCard task={task} deleteTask={deleteTask} completeTask={completeTask} />)

        expect(result.getByLabelText("task-description").textContent).toBe(task.text);
    });


    it("task buttons call changing functions", () => {
        const task = {
            id: 1,
            text: 'test',
            isCompleted: false,
        };
        const deleteTask = jest.fn();
        const completeTask = jest.fn();
        const result = render(<TaskCard task={task} deleteTask={deleteTask} completeTask={completeTask} />)

        fireEvent.click(result.getByRole("checkbox"));
        expect(completeTask).toHaveBeenCalledTimes(1);
        expect(completeTask).toHaveBeenCalledWith(task.id);

        fireEvent.click(result.getByLabelText("delete"));
        expect(deleteTask).toHaveBeenCalledTimes(1);
    });
})