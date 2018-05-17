import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText, ListSubheader, ListItemSecondaryAction} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';


import Contact from 'material-ui-icons/ContactPhone';
import Phone from 'material-ui-icons/Phone';
import CallEnd from 'material-ui-icons/CallEnd';

const styles = theme => ({
    root: {
        width: '100%',
        height: '1000px',
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        minWidth: '36px',
        height: '36px',
        padding: '8px 5px'
    }, buttonCall: {
        color: '#9ccc65'
    }, buttonCallEnd: {
        color: '#ef5350'
    }, devider: {
        color: 'rgba(0, 0, 0, 0.54)',

        fontSize: '15px',
        backgroundColor: '#5bb8e8'
    }, avgTime: {

        fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)',
        textAlign: 'center',
    }, header: {
         fontSize: '17px',
        padding: '12px 0',
        marginLeft: '24px'
    },
});

function ListDividers(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItemText className={classes.header} primary={`В очереди`}/>
                <ListItem className={classes.devider}>
                    <span component="div">
                        Клиент
                    </span>
                    <ListItemSecondaryAction className={classes.avgTime}>
                        Среднее ожидания: <br/>
                        3:40мин
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Avatar alt="Remy Sharp" src="/qw.jpg"/>
                    <ListItemText primary={`Дима Щукин`}/>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Contact/>
                    <ListItemText primary={`8-999-123-44-11`}/>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Avatar alt="Remy Sharp" src="/33.jpg"/>
                    <ListItemText primary={`Степан Дешевых`}/>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Contact/>
                    <ListItemText primary={`8-930-894-25-28`}/>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Contact/>
                    <ListItemText primary={`8-999-123-44-55`}/>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </List>
        </div>
    );
}

ListDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);