import React from 'react';
import {
	Box,
    Button,
	Container,
	Avatar,
	Paper,
	Typography
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import "./About.css";
import CV from "/CV-Nizar-Channane.pdf"

const About = () => {
	return (
		<Container className="about-page-container">
            <Box className="about-paper-container">
                <Paper elevation={3} className="about-paper">
                    <Box className="about-paper-header">
                        <Avatar src="/Profile_picture.jfif" className="about-avatar"/>
                        <Box>
                            <Typography component="h3" className="job-title">Développeur JS <br />Full-stack</Typography>
                            <Typography component="p" className="job-subtitle">(Node, React)</Typography>
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Bonjour, je m'appelle Nizar Channane et je suis développeur junior JS Full-stack (Node, React). Bienvenue sur mon portfolio, où vous pourrez retrouver mes dernières réalisations ainsi que des informations sur mon profil.<br /><br />
                        Titulaire d'un diplôme de "concepteur développeur d'applications", je me charge de la récolte des besoins clients/utilisateurs que je traduis ensuite en spécifications fonctionnelles et techniques ainsi que la conception de bases de données. J'assure également le développement et la livraison des fonctionnalités.<br /><br />
                        Je me spécialise sur les technologies suivantes :
                    </Typography>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }} >Backend</Typography>
                        <img src="https://skillicons.dev/icons?i=nodejs,express,php" />
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: "1rem" }} >Frontend</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }} >
                            <img src="https://skillicons.dev/icons?i=html" />
                            <img src="https://skillicons.dev/icons?i=css" />
                            <img src="https://skillicons.dev/icons?i=js" />
                            <img src="https://skillicons.dev/icons?i=react" />
                            <img src="https://skillicons.dev/icons?i=redux" />
                            <img src="https://skillicons.dev/icons?i=materialui" />
                            <img src="https://skillicons.dev/icons?i=vite" />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: "1rem" }} >Bases de données</Typography>
                        <img src="https://skillicons.dev/icons?i=mysql,mongodb" />
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: "1rem" }} >Tests</Typography>
                        <img src="https://skillicons.dev/icons?i=jest" />
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: "1rem" }} >Autres</Typography>
                        <img src="https://skillicons.dev/icons?i=git,github,linux,nginx,md" />
                    </Box>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Je suis passionné de nouvelles technologies et je pratique une veille régulière des technologies du web afin de fournir un service orienté vers la performance, une bonne expérience de développement et la scalabilité. Je fais toujours preuve d'attention aux détails et de rigueur dans mon code, applicant les dernières bonnes pratiques afin de créer des expériences utilisateurs de qualité et un code facilement exploitable par d'autres développeurs. .<br /><br />
                        Mon objectif aujourd'hui est de pouvoir intégrer une équipe dynamique où je pourrai m'épanouir et de travailler sur de nouveaux projets afin de parfaire mes compétences de développeur.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", px: "2rem" }}>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                            Si vous souhaitez en apprendre plus sur mon profil, vous pouvez :<br /><br />
                        </Typography>
                        <Typography variant="h6" >
                            - Consulter mon{" "}
                            <Link to="https://github.com/NizarChannane?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                                GitHub{" "}
                            </Link> 
                            <OpenInNewIcon sx={{ fontSize: "1rem" }} /> et parcourir le code source de ce site ou d'autres projets que j'ai réalisé.
                        </Typography>
                        <Typography variant="h6" >
                            - Consulter mon{" "} 
                            <Link to="https://linkedin.com/in/nizar-channane-51abb2131" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                            LinkedIn{" "}
                            </Link> 
                            <OpenInNewIcon sx={{ fontSize: "1rem" }} /> où vous trouverez des mises à jours sur l'avancée de mes futurs projets.
                        </Typography>
                        <Typography variant="h6" >
                            - Télécharger mon CV (<em>.pdf</em>) :
                        </Typography>
                    </Box>
                    <Link to={CV} download target="_blank" rel="noreferrer" >
                        <Button className="download-cv-button">Télécharger le CV</Button>
                    </Link>
                </Paper>
            </Box>
        </Container>
	)
};

export default About;