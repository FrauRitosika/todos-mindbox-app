import { Button, ButtonGroup } from '@mui/material';
import FilterButton from '../FilterButton/FilterButton';
import { FILTER_NAME } from '../settings-filter';
import { FILTER } from '../types';

type TFilterFilterBar = {
    filters: Array<number>;
    activeFilter: number;
    onClickFilter: (filter: number) => void;
    onClickDel: () => void;
}

const FilterBar = ({ filters, activeFilter, onClickFilter, onClickDel }: TFilterFilterBar) => {

    return (
        <ButtonGroup fullWidth variant="contained" style={{ margin: '10px 0', gap: '8px', boxShadow: 'none', border: 'none' }}>
            {
                filters.map(curFilter => {
                    return (<FilterButton filter={curFilter} activeFilter={activeFilter} onClick={() => onClickFilter(curFilter)}>
                        {FILTER_NAME[FILTER[curFilter]] ?? ''}
                    </FilterButton>);
                })
            }
            <Button size="small" variant="outlined" color="secondary" onClick={onClickDel} style={{ borderRadius: '20px' }}>
                Удалить выполненные
            </Button>
        </ButtonGroup>
    );
};

export default FilterBar;
