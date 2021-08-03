import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class Container extends React.Component {
    render() {
        const { content, leftSide } = this.props;
        return (
            <React.Fragment>
                <Grid className="ls" item>
                    {leftSide}
                </Grid>
                <Grid className="rs" item>
                    {content}
                </Grid>
            </React.Fragment>
        );
    }
}
