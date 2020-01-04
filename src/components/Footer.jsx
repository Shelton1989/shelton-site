import React from 'react';

import cv from '../helpers/CV';

import Contact, { SocialLinks } from './SocialLinks'

import {
    Grid,
    Header,
    Icon
} from 'semantic-ui-react';

const style = {
    documentIcon: {
        fontSize: 36
    }
}

const Footer = () => (
    <Grid padded centered columns={5} >
        <Grid.Row>
            <Grid.Column textAlign="center">
                <Header as="h2" >
                    LIKE WHAT YOU SEE?
                </Header>
                <Header.Subheader>
                    GET IN TOUCH
                </Header.Subheader>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column textAlign="center">
                <Grid centered columns={5}>
                    <Grid.Row>
                        {SocialLinks}
                    </Grid.Row>
                    <Grid.Row>
                        <Header.Subheader>
                            <span>Tel</span> {`${cv.personal_profile.primary_contact} | ${cv.personal_profile.secondary_contact}`}
                        </Header.Subheader>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid centered columns={3}>
                <Grid.Row>
                    <Header.Subheader>
                        If you need a hard copy of my resume, please download the appropriate format below.
                    </Header.Subheader>
                </Grid.Row>
                <Grid.Row>
                    {cv.download_links.map((c, i) => (
                        <Grid.Column textAlign="center" key={i}>
                            <a href={c.link} target="blank">
                                <Icon style={style.documentIcon} name={`file ${c.type.toLowerCase()} outline`} />
                            </a>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </Grid.Row>
    </Grid>
)

export default Footer;