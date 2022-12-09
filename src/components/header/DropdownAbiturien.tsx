import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink, Route, Routes} from "react-router-dom";
import styles from './Dropdown.module.css';
import Incoming from '../../pages/headerPages/incoming/Incoming';

export default function DropdownAbiturien() {
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
                Поступающему
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
                        to={'/steps'}>Этапы поступления
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
                             to={'/привет3'}>Количество мест
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/привет3'}>Сроки подачи документов
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a className={styles.not_active} href={"https://welcome.vstu.ru/acceptance/platnoe-obrazovanie/"}>Платные образовательные услуги</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a className={styles.not_active} href={"https://welcome.vstu.ru/acceptance/Abitur/"}>Прием 2023</a>
                </MenuItem>
            </Menu>


        </div>

    );
}