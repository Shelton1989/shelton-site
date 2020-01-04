import React from 'react';

import cv from '../helpers/CV';

import { Grid, Header, Container } from 'semantic-ui-react';

import ImageSlider from 'react-simple-image-slider';

const style = {
    projectSpacing: {
        padding: '30px 0'
    },
    heading: {
        fontSize: 46,
    }
}

const Project = (props) => (
    <Grid style={style.projectSpacing} centered>
        <Grid.Row>
            <div className="floating-project">
            <ImageSlider 
                images={props.images.map((c, i) => ({url: c}))}
                width={600}
                height={304}
            />
            </div>
            
        </Grid.Row>
        <Grid.Row>
            <Header as="h3">
                {props.name}
                {props.link?<Header.Subheader>
                    <a href={props.link} >Please click here to view.</a>
                </Header.Subheader>:null}
            </Header>
        </Grid.Row>
        <Grid.Row>
            <Container>
                {props.summary}
            </Container>
        </Grid.Row>
    </Grid>
)

const ProjectsList = cv.projects.map((c, i) => (
    <Project 
        name={c.name}
        images={c.images}
        link={c.link}
        summary={c.summary}
    />
))

const Projects = () => (
    <div>
        <Header as="h2" style={style.heading}>
            PROJECTS
        </Header>
        {ProjectsList}
    </div>
)

export default Projects;