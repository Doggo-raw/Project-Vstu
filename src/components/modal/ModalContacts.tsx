import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import styles from './Modal.module.css';
import {AccessTime, LocalPhone, Email, House} from '@mui/icons-material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={styles.modal} style ={{width: '10vw',minWidth: '100px' , color: 'white',background: 'linear-gradient(77deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' , margin: '0 10px'}} onClick={handleOpen}>Связаться</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className={styles.box} sx={{ ...style, width: '40vw' }}>
                    <h2 id="parent-modal-title" style={{margin: '15px 0'}}>Как можно с нами связаться?</h2>
                    <p id="parent-modal-description">
                        <Chip className={styles.chip} icon={<LocalPhone />} label="+7 8442 74-05-61" variant="outlined" />
                        <Chip className={styles.chip} icon={<LocalPhone />} label="+7 8442 29-29-34" variant="outlined" />
                        <Chip className={styles.chip} icon={<Email />} label="tfpic@vstu.ru" variant="outlined" /> <br/>
                        <Chip className={styles.chip} icon={<House />} label="ул. Дегтярёва, 2." variant="outlined" /> <br/>
                        <p className={styles.work_time}>Время работы:</p> <br/>
                        <Chip className={styles.chip} icon={<AccessTime />} label="Понедельник, Среда, Пятница.: 8:30-17:00." variant="outlined" /> <br/>
                        <Chip className={styles.chip} icon={<AccessTime />} label="Вторник, Четверг: 8:30-18:30." variant="outlined" />
                        <Chip className={styles.chip} icon={<AccessTime />} label="Суббота: 10:00-14:00." variant="outlined" />
                        <Chip className={styles.chip} icon={<AccessTime />} label="Воскресенье: выходной." variant="outlined" />
                    </p>
                </Box>
            </Modal>
        </div>
    );
}