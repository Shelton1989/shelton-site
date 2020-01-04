import React from 'react';

import { Grid, Header } from 'semantic-ui-react';

import cv from '../helpers/CV';

const style = {
    icon: {
        fontSize: 36,
        color: cv.document_details.theme.black
    }
}

const SocialLink = (props) => (
    <a style={style.icon} href={props.url} target="blank">
        <i className={props.icon}></i>
    </a>
)

export const SocialLinks = cv.links[0].social_links.map((c, i) => (
    <Grid.Column key={i} >
        <SocialLink 
            url={c.link}
            icon={c.icon}
        />
    </Grid.Column>
))

const Contact = () => (
    <Grid columns={8}>
        <Grid.Row>
            {SocialLinks}
        </Grid.Row>
        <Grid.Row>
            <Header.Subheader>
                <span>Tel</span> {cv.personal_profile.primary_contact}
            </Header.Subheader>
        </Grid.Row>
    </Grid>
)

export default Contact;