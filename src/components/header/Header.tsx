import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Main from "../../pages/main/Main";
import {Button, IconButton} from "@mui/material";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Header.module.css";
import Directions from "../../pages/directions/Directions";
import DropdownServices from './DropdownServices';
import Abiturient from "./DropdownAbiturien";
import DropdownStudent from "./DropdownStudent";
import DropdownHighEducation from "./DropdownHighEducation";
import DropdownLibrary from "./DropdownLibrary";
import Modal from '../modal/Modal';
import PaymentIcon from '@mui/icons-material/Payment';
import Payment from "../../pages/headerPages/services/payment/Payment";

const pages = ['Сервисы', 'Поступающему', 'Студенту', 'Второе высшее', 'Библиотека'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <nav>
            <AppBar position="static">
                <div className={styles.head}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: {xs: "none", md: "flex"},
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none"
                                }}>

                                {/*LogoDesktop Icon*/}
                                <Link to="/*">
                                    <div className={styles.logoIco}></div>
                                </Link>


                            </Typography>

                            {/*Бургер меню*/}
                            <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>


                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: "block", md: "none"}
                                    }}
                                >
                                    {/*бургер меню*/}
                                    <MenuItem>
                                        <DropdownServices/>
                                    </MenuItem>
                                    <MenuItem>
                                        <Abiturient />
                                    </MenuItem>
                                    <MenuItem>
                                        <DropdownStudent />
                                    </MenuItem>
                                    <MenuItem>
                                        <DropdownHighEducation />
                                    </MenuItem>
                                    <MenuItem>
                                        <DropdownLibrary />
                                    </MenuItem>
                                </Menu>
                            </Box>
                            {/*Logo Icon*/}
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: {xs: "flex", md: "none"},
                                    flexGrow: 1,
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none"
                                }}
                            >
                                <Link to="/*">
                                    <div className={styles.logoIco}></div>
                                </Link>
                            </Typography>

                            {/*Links*/}
                            <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                                <DropdownServices />
                                <Abiturient />
                                <DropdownStudent />
                                <DropdownHighEducation />
                                <DropdownLibrary />
                            </Box>
                                <Button className={styles.payment_btn}
                                        style={{color: 'white', border: '1px solid white'}}
                                        variant="outlined"
                                        startIcon={<PaymentIcon />}
                                >
                                    <NavLink to={'/payment'}>Оплата онлайн</NavLink>
                                </Button>
                                <Modal />
                        </Toolbar>
                    </Container>
                </div>
            </AppBar>
            <Routes>
                <Route path="/*" element={<Main/>}/>
                <Route path={'/direct'} element={<Directions />} />
                <Route path={'/payment'} element={<Payment />} />
            </Routes>
        </nav>
    );
}

export default ResponsiveAppBar;
