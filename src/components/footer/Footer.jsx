import React from 'react';
import { 
    Box, 
    Container,
    Typography,
    IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return (
        <Box component="footer" className="footer-conteiner">
                <Typography component="p" className="footer-text">
                    <em>Copyright &#9400; 2024 Nizar Channane</em>
                </Typography>
                <Box className="footer-links-container">
                    <Link 
                        to="https://github.com/NizarChannane?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link"
                    >
                        <Typography component="p" className="footer-text">Voir code</Typography> 
                    </Link>
                    <Link 
                        to="https://github.com/NizarChannane?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-icon-links"
                    >
                        <IconButton aria-label="lien GitHub">
                            <GitHubIcon className="footer-icon" />
                        </IconButton>
                    </Link>
                    <Link 
                        to="https://linkedin.com/in/nizar-channane-51abb2131" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-icon-links"
                    >
                        <IconButton aria-label="lien LinkedIn">
                            <LinkedInIcon className="footer-icon" />
                        </IconButton>
                    </Link>
                </Box>
        </Box>
    )
};

export default Footer;