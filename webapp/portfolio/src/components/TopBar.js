import {AppBar, Box, Button, Chip, Container, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip}
    from "@mui/material";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {useNavigate} from "react-router-dom";
import {URLS} from "../constants/URLS";



const pages = {
    "Home": {
        "link": URLS.HOME
    },
    "About": {
        "link": URLS.ABOUT
    }
}


const TopBar = () => {

    const navigate = useNavigate()

    // Responsive App Bar
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
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
                            {Object.keys(pages).map((k) => (
                                <MenuItem key={k} onClick={handleCloseNavMenu}>
                                    <Link onClick={() => navigate(pages[k].link)} textAlign="center" underline="none">{k}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {Object.keys(pages).map((k) => (
                            <Button
                                key={k}
                                onClick={() => navigate(pages[k].link)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {k}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopBar;