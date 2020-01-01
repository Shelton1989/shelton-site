import React, { createRef } from 'react';

import {
    Grid,
    Rail,
    Ref,
    Sticky,
    Container,
    Header,
    Divider,
    List
} from 'semantic-ui-react';

import cv from '../helpers/CV';

import Contact from '../components/SocialLinks';

const style = {
    headingH1: {
        fontSize: 46,
    },
    workSection: {
        margin: '40px auto'
    },
    zIndex: {
        zIndex: -1
    }
}

export default class WorkHistory extends React.Component {
    contextRef = createRef()

    render() {
        const content = cv.work_experience.map((c, i) => (
            <Container style={style.workSection} textAlign="justified" key={i}>
                <Header as="h3">
                    {c.company}
                    <Header.Subheader>
                        {c.position}
                    </Header.Subheader>
                    <Header.Subheader>
                        {c.dates}
                    </Header.Subheader>
                    <Header.Subheader>
                        {c.location}
                    </Header.Subheader>
                </Header>
                <Divider></Divider>
                <List bulleted>
                    <List.Header>Responsibilities</List.Header>
                    {c.responsibilities.map((x, k) => (
                        <List.Item key={k}>
                            {x}
                        </List.Item>    
                    ))}
                </List>
                {c.achievements?
                <List bulleted>
                    <List.Header>Achievements</List.Header>
                    {c.achievements.map((x, k) => (
                        <List.Item key={k}>
                            {x}
                        </List.Item>    
                    ))}
                </List>
                :null}
            </Container>
        ))

        return (
            <Grid centered columns={3}>
                <Grid.Column>
                    <Ref innerRef={this.contextRef}>
                        <div>
                            <Header as='h1' style={style.headingH1}>
                                WORK HISTORY
                            </Header>
                            {content}
                            <Rail size="big" position="right">
                                <Sticky style={style.zIndex} context={this.contextRef} offset={100}>
                                    <div>
                                        <Contact />
                                    </div>
                                </Sticky>
                            </Rail>
                        </div>
                    </Ref>
                </Grid.Column>
            </Grid>
        )
    }
}