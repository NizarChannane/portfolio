import React from 'react';
import { 
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Skeleton
} from '@mui/material';
import { Link } from 'react-router-dom';
import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
    console.log(project);
    return (
        <Card className="project-card">
                {
                    project.name !== "" ?
                    (
                        <Link to={project.link} target="_blank" rel="noopener noreferrer" className="card-media-link">
                            <CardMedia component="img" alt={`image du projet`} image="/Post_1_thumbnail.PNG" className="card-media"/>
                        </Link>
                    ) : (
                        <Box>
                            <Skeleton variant="rectangular" animation="wave" >
                                <img src="/Post_1_thumbnail.PNG" alt="fausse image annonçant les projets futurs" className="card-media" />
                            </Skeleton>
                        </Box>
                    )
                }
            <CardContent className="card-content">
                {
                    project.name !== "" ? 
                    (
                        <Link to={project.link} target="_blank" rel="noopener noreferrer" className="project-name-link">
                            <Typography component="h5" className="project-name">
                                {project.name}
                            </Typography>
                        </Link>
                    ) : (
                        <Typography component="h5" className="project-name">
                            <Skeleton />
                        </Typography>
                    )
                }
                <Typography component="p" className="project-description">
                        {project.description !== "" ? project.description : <><Skeleton /><Skeleton /><Skeleton /></>}
                </Typography>
                <Typography component="p" className="project-stack">
                        {project.stack !== "" ? <em>{`Stack : ${project.stack}`}</em> : <Skeleton />}
                </Typography>
            </CardContent>
            <CardActions className="card-actions">
                {
                    project.name !== "" ? (
                        <>
                            <Link to={project.link} target="_blank" rel="noopener noreferrer" className="card-action-link">
                                <Button className="card-action-button">Voir demo</Button>
                            </Link>
                            <Link to={project.codeLink} target="_blank" rel="noopener noreferrer" className="card-action-link">
                                <Button className="card-action-button">Voir code</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Skeleton variant="rectangular" animation="wave" >
                                <Button className="card-action-button">Skeleton</Button>
                            </Skeleton>
                            <Skeleton variant="rectangular" animation="wave" >
                                <Button className="card-action-button">Skeleton</Button>
                            </Skeleton>
                        </>
                    )
                }
            </CardActions>
        </Card>
    )
};

export default ProjectCard;