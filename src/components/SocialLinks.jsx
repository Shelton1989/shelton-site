import React from 'react';

import { Grid } from 'semantic-ui-react';

import cv from '../helpers/CV';

const SocialLink = (props) => (
    <a href={props.url} target="blank">
        <i className={props.icon}></i>
    </a>
)

const SocialLinks = cv.links[0].social_links.map((c, i) => (
    <Grid.Column key={i} >
        <SocialLink 
            url={c.link}
            icon={c.icon}
        />
    </Grid.Column>
))

const Contact = () => (
    <Grid>
        <Grid.Row>
            {SocialLinks}
        </Grid.Row>
    </Grid>
)

export default Contact;