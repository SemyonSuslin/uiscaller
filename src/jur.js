import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AgentsWidget from './AgentsWidget';
import Contacts from './Contacts';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: 'auto',
        margin: 0
    },
    paper: {
        height: 'auto',
        width: '100%',
    },
    item: {
        padding: 10,
        height: '100%'
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class GuttersGrid extends React.Component {
    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const {classes} = this.props;
        const {spacing} = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={16}>
                        <Grid key='11' item xs className={classes.item}>
                            <Paper className={classes.paper}>
                                <Contacts/>
                            </Paper>
                        </Grid>

                        <Grid key='13' item xs className={classes.item}>
                            <Paper className={classes.paper}>
                                Информация о человеке, сколько звонил. Есть возможность позвонить.
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
