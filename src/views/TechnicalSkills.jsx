import React from 'react';

import { Grid, Header } from 'semantic-ui-react';

import cv from '../helpers/CV';

import Chart from 'react-apexcharts';

const styles = {
    headingH1: {
        fontSize: 46,
    },
    heading: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

const Charts = cv.technical_skills.map((i, k) => {
    let options = {
        chart: {
            id: i.type,
            toolbar: {
                show: false
            }
        },
        title: {
            text: i.type
        },
        xaxis: {
            categories: i.list.map(i => i.name)
        },
        plotOptions: {
            bar: {
                horizontal: true,
                endingShape: 'flat'
            }
        },
        fill: {
            colors: ['#006868'],
            type: 'gradient',
            gradient: {
                type: 'horizontal',
                shadeIntensity: 0.7,
                gradientToColors: [cv.document_details.theme.green]
            }
        }
    }
    let series = [
        {
            name: i.type,
            data: i.list.map(i => i.rating)
        }
    ]
    return (
        <Grid.Column
            key={k}
        >
            <Chart 
                type="bar"
                width="500"
                options={options}
                series={series}
                
            />
        </Grid.Column>
    )
})

const TechnicalSkillSection = () => (
    <Grid>
        <Grid.Row style={styles.heading} centered>
            <Header style={styles.headingH1} as="h1">
                TECHNICAL SKILLS
            </Header>
        </Grid.Row>
        <Grid.Row>
            <Grid columns={2} padded stackable>
                {Charts}
            </Grid>
        </Grid.Row>
    </Grid>
)

export default TechnicalSkillSection;