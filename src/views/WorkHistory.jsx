import React, { createRef } from 'react';

import {
    Grid,
    Rail,
    Ref,
    Sticky
} from 'semantic-ui-react';

import cv from '../helpers/CV';

import Contact from '../components/SocialLinks';

export default class WorkHistory extends React.Component {
    contextRef = createRef()

    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Ref innerRef={this.contextRef}>
                        <Rail position="right">
                            <Sticky context={this.contextRef} offset={100}>
                                <div>
                                <Contact />
                                </div>
                            </Sticky>
                        </Rail>
                    </Ref>
                </Grid.Column>
            </Grid>
        )
    }
}