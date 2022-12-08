import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link style={{color: '#1E3685', padding: '5px'}} to={'/'}>Привет я блядский костыль</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link style={{color: '#1E3685', padding: '5px'}} to={'/привет2'}>Привет я блядский костыль</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link style={{color: '#1E3685', padding: '5px'}} to={'/привет3'}>Привет я блядский костыль</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}