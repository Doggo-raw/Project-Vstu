import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom";
import styles from './Dropdown.module.css';

export default function DropdownServices() {
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
                    Сервисы
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
                        to={'/'}>Оплатить обучение онлайн
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a className={styles.not_active} href = "https://eos2.vstu.ru/login/index.php">Войти в Электронную информационную образовательную среду</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a className={styles.not_active} href={"http://dump.vstu.ru"}>Файловое хранилище ВолгГТУ</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a className={styles.not_active} href={"https://docs.google.com/forms/d/e/1FAIpQLSfab0k3eLiB1Bi7aMnNs0LO6PvyFeexe5S_5x2zHh0lIIycvg/viewform"}>Заказать справку - вызов</a>
                </MenuItem>
            </Menu>
        </div>
    );
}