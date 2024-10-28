import { Button } from '@mui/material';
import React from 'react';

type TFilterButton = {
    filter: number;
    activeFilter: number;
    onClick: () => void;
    children: React.ReactNode
}

const FilterButton = ({ filter, activeFilter, onClick, children }: TFilterButton) => {

    return (
        <Button size="small" aria-label="filter" onClick={onClick} variant={filter === activeFilter ? 'contained' : 'outlined'} style={{ borderRadius: '20px' }}>
            {children}
        </Button>
    );
};

export default FilterButton;
