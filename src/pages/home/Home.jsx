import { useRef } from 'react';
import {
	Avatar,
	Box,
	Grid,
	Typography,
	IconButton,
	Paper
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeroIllustrationSvg from '../../components/svg/HeroIllustrationSvg';
import { Link } from 'react-router-dom';
import "./Home.css";

const heroListText = ["Conception", "Développement", "Déploiement", "Maintenance"]

const Home = () => {
	const heroListRef = useRef(null);
	const aboutSectionRef = useRef(null);
	
	const handleClick = (e, someRef) => {
		e.preventDefault();
		if (someRef && someRef.current) {
			someRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

    return (
        <Box className="content-container">
			<Grid container className="content-grid-container">
				<Grid item xs={12} md={6}  className="content-grid-item">
					<HeroIllustrationSvg />
					<IconButton onClick={(e) => handleClick(e, heroListRef)} className="mobile-scrolldown-button">
						<ExpandMoreIcon  />
					</IconButton>
				</Grid> 
				<Grid item xs={12} md={5} ref={heroListRef} className="content-grid-item">
					<ul className="hero-list">
						{
							heroListText.map((text, index) => (
								<li key={index}>
									<Typography component="h1">{text}</Typography>
								</li>
							))
						}
					</ul>
					<IconButton onClick={(e) => handleClick(e, aboutSectionRef)} className="mobile-scrolldown-button">
						<ExpandMoreIcon />
					</IconButton>
				</Grid>
				<IconButton onClick={(e) => handleClick(e, aboutSectionRef)} className="scrolldown-button">
					<ExpandMoreIcon />
				</IconButton>
			</Grid>
			<Box ref={aboutSectionRef} className="about-section">
				<Paper className="about-container">
					<Typography component="h5" className="about-title">À propos :</Typography>
					<Avatar src="/Profile_picture.jfif" className="about-avatar" />
					<Typography component="p" className="about-paragraph">
						Bonjour, je m'appelle Nizar Channane et je suis développeur web full-stack. Ce site me sert de portfolio, il a été codé principalement en Javascript et est complètement responsive. Si vous souhaitez en apprendre plus sur mon profil, n'hésitez pas à visiter la page <em>"À propos"</em>.
					</Typography>
					<Link to="/about" className="about-link">{"À propos >"}</Link>
				</Paper>
			</Box>
		</Box>
    )
};

export default Home;