import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom";
import styles from './Dropdown.module.css';

export default function DropdownStudent() {
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
                Студенту
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
                    <a className={styles.not_active} href={"https://www.vstu.ru/student/raspisaniya/zanyatiy/index.php?dep=fpik"}>Расписание</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Перевод из другого вуза
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Вакантные бюджетные места для перевода
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Восстановление
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                    }
                             to={'/'}>Полезная информация
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a className={styles.not_active} href={"https://drive.google.com/file/d/1NAgXRfECmz0sw1MCLO3m1XUYL3G1pY-H/view"}>Бланки заявлений</a>
                </MenuItem>
            </Menu>

        </div>
    );
}