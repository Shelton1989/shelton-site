import React from 'react';
import {
    Card,
    Image,
    Header,
    Grid,
    Divider
} from 'semantic-ui-react'

import cv from '../helpers/CV';

const style = {
    container: {
        width: '80%',
        height: '100vh',
        margin: 'auto',
    },
    card: {
        marginTop: '15%',
        marginBottom: '20%'
    },
    header: {
        color: 'white',
        fontSize: 46,
        marginTop: '15%'
    },
    textAlignEnd: {
        justifyContent: 'flex-end'
    },
    justifyText: {
        textAlign: 'justify'
    },
    whiteSmoke: {
        color: 'white'
    }
}

const ProfileCard = () => (
    <Card className="profile-card" style={style.card} color='teal' >
        <Image src={cv.personal_profile.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{`${cv.personal_profile.first_name} ${cv.personal_profile.last_name}`}</Card.Header>
            <Card.Meta>{cv.personal_profile.age} years old</Card.Meta>
        </Card.Content>
    </Card>
)

const ProfileSummary = () => (
    <Grid>
        <Grid.Row textAlign='left' style={style.textAlignEnd}>
            <Header as='h1' style={style.header}>
                {cv.document_details.title.toUpperCase()}
            </Header>
        </Grid.Row>
        <Divider horizontal inverted ></Divider>
        <Grid.Row textAlign='justified' style={style.justifyText}>
            <p style={style.whiteSmoke}>
                {cv.personal_profile.summary}
            </p>
        </Grid.Row>
    </Grid>
)

const PersonalInformation = (props) => (
    <Grid stackable columns={2} >
        <Grid.Row centered>
            <Grid.Column width={4}>
                <ProfileCard />
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
                <ProfileSummary />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default PersonalInformation;