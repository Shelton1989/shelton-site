import React from 'react';

import { 
    Grid,
    Icon,
    Header,
    Container
} from "semantic-ui-react";

import cv from "../helpers/CV";

const style={
    text: {
        color: cv.document_details.theme.black
    },
    p: {
        color: cv.document_details.theme.black,
        fontSize: 17,
    },
    span: {
        color: 'red'
    }
}

const ProfileContact = (props) => (
    <Header style={style.text} as="h2" icon>
        <Icon name={props.icon} />
        {props.heading}
    </Header>
)

const PersonalInfoCTC = () => (
    <Grid stackable centered columns={4} divided>
        <Grid.Row>
            <Container>
                <p style={style.p}><span style={style.span}>If</span> the three sentences above caught your attention then contact me... <span style={style.span}>else</span> please browse my profile below.</p>
            </Container>
        </Grid.Row>
        <Grid.Row centered>
            <Grid.Column textAlign="center">
                <ProfileContact 
                    icon="at"
                    heading={`${cv.personal_profile.primary_email}`}
                />
            </Grid.Column>
            <Grid.Column textAlign="center">
                <ProfileContact 
                    icon="phone"
                    heading={`${cv.personal_profile.primary_contact} | ${cv.personal_profile.secondary_contact}`}
                />
            </Grid.Column>
            <Grid.Column textAlign="center">
                <ProfileContact 
                    icon="location arrow"
                    heading={`${cv.personal_profile.city}`}
                />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default PersonalInfoCTC;