import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link, Route, Routes} from "react-router-dom";
import Main from "../../pages/main/Main";
import Student from "../../pages/student/Student";




const pages = ['Сервисы', 'Поступающему', 'Студенту', 'Второе высшее', 'Библиотека'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponciveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/*Logo Icon*/}
                    <Link to="/">
                        <div className="logoIco"></div>
                    </Link>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>

                    {/*Page Links*/}

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/*Profile button*/}

                    <Box sx={{flexGrow: 0}}>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                fontWeight: 400,
                                textDecoration: 'none',
                            }}
                        >
                            <Button size='large' className='.MuiButton-outlined' color="inherit" variant="contained">
                                Связаться
                            </Button>

                        </Typography>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="student" element={<Student/>} />
            </Routes>

            </div>
    );
}

export default ResponciveAppBar;
