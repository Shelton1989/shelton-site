import React from 'react';

import {
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';

import cv from '../helpers/CV';

const style = {
    container: {
        width: '80%',
        margin: 'auto'
    },
    heading: {
        fontSize: 38,
        color: cv.document_details.theme.green
    },
    heading2: {
        color: cv.document_details.theme.green
    },
    link: {
        color: cv.document_details.theme.green
    },
    mutedText: {
        color: cv.document_details.theme.white
    },
    educationItem: {
        padding: '15px 0 15px 0',
    }
}

const EducationSummary = (props) => (
    <Header style={style.educationItem} as="h2">
        <Icon style={style.heading2} name="certificate" />
        <Header.Content style={style.heading2}>
            {props.institution}
            <Header.Subheader style={style.mutedText}>
                {props.qualification}
            </Header.Subheader>
            <Header.Subheader style={style.mutedText}>
                {props.date}
            </Header.Subheader>
            {props.url?<Header.Subheader>
                <a className="link" style={style.link} href={props.url} target="blank">Please Click here to view.</a>
            </Header.Subheader>:null}
        </Header.Content>
    </Header>
)

const Qualifications = cv.education.map((c, i) => (
    <Grid.Column 
        key={i}
    >
        <EducationSummary 
            institution={c.institution}
            qualification={c.qualification}
            date={c.dates}
            url={c.url}
        />
    </Grid.Column>
))

const EducationSection = () => (
    <div style={style.container} >
        <Grid.Row>
            <Header style={style.heading} as="h1">
                EDUCATION AND CERTIFICATION
            </Header>
        </Grid.Row>
        <Grid centered stackable columns={3} padded>
            {Qualifications}
        </Grid>
    </div>
);

export default EducationSection;