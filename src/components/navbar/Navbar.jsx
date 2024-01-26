import { useState } from 'react';
import {
	AppBar,
	Box,
	Container,
	Toolbar,
	Button,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Popover
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
	{
		path: "",
		text: "Accueil"
	},
	{
		path: "/about",
		text: "À propos"
	},
	{
		path: "",
		text: "Projets"
	},
]

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

	const handleClose = () => {
        setAnchorEl(null);
	};

	const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
	};

    return (
        <AppBar component="nav" position="static" className="navbar">
				<Toolbar variant="dense" className="nav-container">
					<Container className="nav-centered">
						<IconButton onClick={handleMenu} className="mobile-menu-icon">
							<MenuIcon />
						</IconButton>
						<Popover
							open={open}
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "left"
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							onClose={handleClose}
							className="menu-container"
						>
							<IconButton onClick={handleClose} className="menu-close-icon">
								<CloseIcon />
							</IconButton>
							{
								navItems.map((item, index) => (
									<Link key={index} to={item.path} onClick={handleClose} className="menu-link">
										<Button  className="menu-button">{item.text}</Button>
									</Link> 
								))
							}
						</Popover>
						<Avatar alt="Photo de Nizar Channane" src="/Profile_picture.jfif" className="avatar-picture"/>
						<Box className="nav-button-box">
							{
								navItems.map((item, index) => (
									<Link key={index} to={item.path} className="nav-link">
										<Button key={index} className="nav-button">
											<span>{item.text}</span>
										</Button>
									</Link>
								))
							}
						</Box>
						<IconButton className="dark-theme-button">
							<LightModeIcon />
						</IconButton>
					</Container>
				</Toolbar>
			</AppBar>
    )
};

export default Navbar;