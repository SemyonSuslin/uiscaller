import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import QueueWidget from './queueWidget';
import ConversationWidget from './ConversationWidget';
import AgentsWidget from './AgentsWidget';
import Divider from 'material-ui/Divider';

import List, {ListItem, ListItemText, ListSubheader, ListItemSecondaryAction} from 'material-ui/List';

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
        padding: 10
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
                                <Grid container className={classes.demo} justify="center" spacing={16}>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Всего звонков
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            7
                                        </ListItem>
                                    </Grid>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Принято
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            3
                                        </ListItem>
                                    </Grid>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Пропущено
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            7
                                        </ListItem>
                                    </Grid>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Исходящих
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            3
                                        </ListItem>
                                    </Grid>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Длительность общая
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            60мин
                                        </ListItem>
                                    </Grid>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Средняя длительность звонка
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            3мин
                                        </ListItem>
                                    </Grid>
                                    <Grid key='11' item xs className={classes.item}>
                                        <ListItem>
                                            Сделки
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            3
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={16}>
                        <Grid key='11' item xs className={classes.item}>
                            <Paper className={classes.paper}>
                                <QueueWidget/>
                            </Paper>
                        </Grid>
                        <Grid key='12' item xs className={classes.item}>
                            <Paper className={classes.paper}>
                                <ConversationWidget/>
                            </Paper>
                        </Grid>
                        <Grid key='13' item xs className={classes.item}>
                            <Paper className={classes.paper}>
                                <AgentsWidget/>
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
