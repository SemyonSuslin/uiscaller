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
import Contact from 'material-ui-icons/ContactPhone';

const styles = theme => ({
    root: {
        width: '600px',
        height: '400px',
        position: 'fixed',
        bottom: 80,
        right: 10,
        marginTop: theme.spacing.unit * 3
    },
    demo: {
        width: '100%',
        height: '100%'
    },
    item: {
        width: '100%',
        height: '100%',
        marginTop: '10px'
    },
    today: {
        margin: '5px'
    },
    devider: {
        height: '65px'
    },
    header: {
        height: '40px'
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
    }
});

function PaperSheet(props) {
    const {classes} = props;
    console.log(props.open)
    return (
        <div className={props.open ? classes.open : classes.close}>
            <Paper className={classes.root} elevation={4}>
                <List component="nav">
                    <ListItem className={classes.header}>

                        <Grid container className={classes.root} spacing={16}>
                            <Grid item xs>
                                <Typography variant="subheading" className={classes.today}>
                                    3 совпадения
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <InputNumber id='111'/>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid container className={classes.demo} justify="center" spacing={16}>
                                <Grid item xs className={classes.item}>
                                    <ListItem button>
                                        <div className={classes.agentItem}>
                                            <Avatar alt="Remy Sharp"
                                                    src="https://docs.uiscom.ru/download/attachments/2228304/user-avatar"/>
                                            <div className={classes.status}></div>
                                            <Typography component="p" className={classes.number}>
                                                <span className={classes.searchNumber}>8944</span>56
                                            </Typography>
                                        </div>
                                        <ListItemText primary={`Дима Маслов`}/>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem button>
                                        <div className={classes.agentItem}>
                                            <Contact className={classes.contact}/>
                                            <Typography component="p" className={classes.numberCostyl}>
                                                8930<span className={classes.searchNumber}>8944</span>848
                                            </Typography>
                                        </div>
                                        <ListItemText primary={`Павел Тихачев`}/>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem button>
                                        <div className={classes.agentItem}>
                                            <Contact className={classes.contact}/>
                                            <Typography component="p" className={classes.numberCostyl}>
                                                8910333<span className={classes.searchNumber}>8944</span>
                                            </Typography>
                                        </div>
                                        <ListItemText primary={`Неизвес`}/>
                                    </ListItem>
                                    <Divider/>
                                </Grid>
                                <Grid item xs className={classes.item}>
                                    <ListItem className={classes.devider}>
                                        <Button aria-label="Comments" className={classes.button}>
                                            1
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            2
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            3
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.devider}>
                                        <Button aria-label="Comments" className={classes.button}>
                                            4
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            5
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            6
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.devider}>
                                        <Button aria-label="Comments" className={classes.button}>
                                            7
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            8
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            9
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.devider}>
                                        <Button aria-label="Comments" className={classes.button}>
                                            *
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            0
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            #
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.devider}>
                                        <Button aria-label="Comments" className={classes.buttonMain}>
                                            Контакты
                                        </Button>
                                        <Button aria-label="Comments" className={classes.button}>
                                            <Phone className={classes.buttonCall}/>
                                        </Button>
                                        <Button aria-label="Comments" className={classes.buttonMain}>
                                            Журнал
                                        </Button>
                                    </ListItem>
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
