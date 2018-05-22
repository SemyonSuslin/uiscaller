import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Grid from 'material-ui/Grid';
import List, {ListItem, ListItemText, ListSubheader, ListItemSecondaryAction} from 'material-ui/List';

import Divider from 'material-ui/Divider';
import InputNumber from './inputNumber.js';
import Avatar from 'material-ui/Avatar';
import Phone from 'material-ui-icons/Phone';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PersonAdd from 'material-ui-icons/PersonAdd';
import Forward from 'material-ui-icons/Forward';
import Dialpad from 'material-ui-icons/Dialpad';

const styles = theme => ({
    root: {
        width: '300px',
        height: '400px',
        position: 'fixed',
        bottom: 80,
        right: 10,
        marginTop: theme.spacing.unit * 3
    },
    demo: {
        width: '100%',
        height: '100%',
        marginLeft: 4,
    },
    item: {
        width: '100%',
        height: '100%',
        marginTop: '10px',
        textAlign: 'center',
        padding: 4
    },
    today: {
        margin: '5px'
    },
    devider: {
        height: '65px'
    },
    header: {
        height: '40px',
        backgroundColor: '#5bb8e8'
    },
    button: {
        fontSize: '30px'
    },
    buttonMain: {
        fontSize: '12px'
    },
    searchNumber: {
        background: '#ccc7c7'
    }, number: {
        fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)',
        position: 'absolute',
        top: '42px',
        left: '79px',
    }, numberCostyl: {
        fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)',
        position: 'absolute',
        top: '34px',
        left: '79px',
    }, contact: {
        marginLeft: '8px',
        marginRight: '8px'
    }, status: {
        width: '10px',
        height: '10px',
        background: '#9ccc65',
        position: 'absolute',
        top: '44px',
        left: '51px',
        borderRadius: '100%',
    },
    open: {
        display: 'block'
    },
    close: {
        display: 'none'
    },
    avatar: {
        margin: '130px auto 0',
        width: 170,
        height: 170
    },
    inner: {
        marginTop: 160
    },
    name: {
        position: 'absolute',
        top: 176,
        left: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    time: {
        marginTop: '-23px'
    }
});

function PaperSheet(props) {
    const {classes} = props;
    return (
        <div className={props.open ? classes.open : classes.close}>
            <Paper className={classes.root} elevation={4}>
                <List component="nav">
                    <ListItem className={classes.header}>
                        <Avatar className={classes.avatar} alt="Remy Sharp"
                                src="https://docs.uiscom.ru/download/attachments/2228304/user-avatar"/>
                    </ListItem>
                    <ListItem className={classes.name}>
                        <Typography component="div" variant="headline">+79308942528</Typography><br/>
                        <Typography className={classes.time} component="div" variant="body1">10:40</Typography>

                    </ListItem>
                    <Divider/>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid container className={classes.inner} justify="center" spacing={16}>
                                <Grid item xs className={classes.item}>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12}>
                                            <Grid container className={classes.demo} justify="center" spacing={16}>
                                                <Grid item xs className={classes.item}>
                                                    <Button aria-label="Comments" className={classes.buttonMain}>
                                                        <PersonAdd/>
                                                    </Button>
                                                </Grid><Grid item xs className={classes.item}>
                                                <Button aria-label="Comments" className={classes.buttonMain}>
                                                    Hold
                                                </Button>
                                            </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12}>
                                            <Grid container className={classes.demo} justify="center" spacing={16}>
                                                <Grid item xs className={classes.item}>
                                                    <Button aria-label="Comments" className={classes.buttonMain}>
                                                        <Forward/>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs className={classes.item}>
                                                    <Button aria-label="Comments" className={classes.buttonMain}>
                                                        <Dialpad/>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12}>
                                            <Grid container className={classes.demo} justify="center" spacing={16}>
                                                <Grid item xs className={classes.item}>
                                                    <Button background='red' aria-label="Comments" className={classes.buttonMain}>
                                                        <Phone className={classes.buttonCall}/>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </List>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
