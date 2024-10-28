import { render, fireEvent } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe(FilterButton, () => {
    it("filter element displays correct text", () => {
        const filter = Math.random() * 2;
        const children = "test";
        const onClickFilter = jest.fn();
        const result = render(<FilterButton filter={filter} activeFilter={0} onClick={onClickFilter} children={children} />)

        expect(result.getByLabelText("filter").textContent).toBe(children);
    });

    it("clicking the button calls changing functions", () => {
        const filter = Math.random() * 2;
        const children = "test";
        const onClickFilter = jest.fn();
        
        const result = render(<FilterButton filter={filter} activeFilter={0} onClick={onClickFilter} children={children} />);
        fireEvent.click(result.getByLabelText("filter"));

        expect(onClickFilter).toHaveBeenCalledTimes(1);
    });

})