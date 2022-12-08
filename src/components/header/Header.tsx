import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Main from "../../pages/main/Main";
import {Avatar, IconButton, Tooltip} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Header.module.css";
import Directions from "../../pages/directions/Directions";



const pages = ['Сервисы', 'Поступающему', 'Студенту', 'Второе высшее', 'Библиотека'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
                <div className={styles.head}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                // component="a"
                                // href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none"
                                }}>

                                {/*LogoDesktop Icon*/}
                                <Link to="/*">
                                    <div className="logoIco"></div>
                                </Link>



                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
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
                                        display: { xs: "block", md: "none" }
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                // component="a"
                                // href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: "flex", md: "none" },
                                    flexGrow: 1,
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none"
                                }}
                            >

                                {/*LogoMobile Icon*/}
                                <Link to="/*">
                                    <div className="logoIco"></div>
                                </Link>

                            </Typography>

                            {/*Links*/}
                            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

                                <Link to="/direct">
                                    <Button variant="text" sx={{color: "white"}}>{pages[0]}</Button>
                                </Link>

                                <Link to="/direct">
                                    <Button variant="text" sx={{color: "white"}}>{pages[1]}</Button>
                                </Link>

                                <Link to="/direct">
                                    <Button variant="text" sx={{color: "white"}}>{pages[2]}</Button>
                                </Link>

                                <Link to="/direct">
                                    <Button variant="text" sx={{color: "white"}}>{pages[3]}</Button>
                                </Link>

                                <Link to="/direct">
                                    <Button variant="text" sx={{color: "white"}}>{pages[4]}</Button>
                                </Link>


                                {/*backup*/}

                                {/*{pages.map((page) => (*/}
                                {/*        <Button*/}
                                {/*            key={page}*/}
                                {/*            onClick={handleCloseNavMenu}*/}
                                {/*            sx={{ my: 2, color: "white", display: "block" }}*/}
                                {/*        >*/}
                                {/*            {page}*/}
                                {/*        </Button>*/}
                                {/*))}*/}

                            </Box>

                        </Toolbar>
                    </Container>
                </div>
            </AppBar>

            <Routes>
                <Route path="/*" element={<Main/>} />
                <Route path="/direct" element={<Directions/>} />
                <Route path="/direct" element={<Directions/>} />
                <Route path="/direct" element={<Directions/>} />
                <Route path="/direct" element={<Directions/>} />
                <Route path="/direct" element={<Directions/>} />
            </Routes>







            </div>


    );
}

export default ResponciveAppBar;
