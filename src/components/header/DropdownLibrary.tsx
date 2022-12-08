import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom";
import styles from './Dropdown.module.css';

export default function DropdownLibrary() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
                style={{color: 'white'}}
            >
                Библиотека
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
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.not_active
                        }
                        to={'/'}>История
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Зарегистрироваться
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/direct'}>Как работать с ЭБС
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Партнеры (ЭБС)
                    </NavLink>
                </MenuItem>
            </Menu>

        </div>
    );
}