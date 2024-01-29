import React from 'react';
import { 
    Typography,
    Container,
    Box,
    Grid
} from '@mui/material';
import ProjectCard from '../../components/project-card/ProjectCard';
import { projectsList } from '../../data/projectsList';
import "./Projects.css";

const Projects = () => {
    return (
        <Container className="projects-page-container">
            <Typography component="h1" className="projects-page-title">Mes projets :</Typography>
            <Grid container spacing={2} className="projects-grid-container">
                {
                    projectsList.map((project, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} className="projects-grid-item">
                            <ProjectCard project={project} />
                        </Grid>
                    ))
                }
                <Grid item xs={12} sm={6} md={4} className="projects-grid-item">
                    <ProjectCard project={projectsList[projectsList.length - 1]} />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Projects;