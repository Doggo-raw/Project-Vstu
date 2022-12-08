import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom";
import styles from './Dropdown.module.css';

export default function DropdownHighEducation() {
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
                Второе высшее
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
                        to={'/'}>Общая информация
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Этапы поступления
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/direct'}>Направления подготовки
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Расписание занятий
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Специалисты по работе со студентами                    </NavLink>
                </MenuItem>
            </Menu>

        </div>
    );
}