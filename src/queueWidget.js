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

import Typography from 'material-ui/Typography';

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
    }, geo: {
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.54)',
    },
    avgTime: {

        fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)',
        textAlign: 'right'
    }, header: {
        fontSize: '17px',
        padding: '33px 0',
        marginLeft: '24px'
    },name: {
        marginLeft: '10px'
    },number: {
        marginLeft: '8px',
        marginRight: '8px'
    },
});

function ListDividers(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItemText className={classes.header} primary={`В очереди`}/>
                <ListItem className={classes.devider}>
                    <div>
                        Клиент
                    </div>
                    <ListItemSecondaryAction className={classes.avgTime}>
                        Среднее ожидания: <br/>
                        3мин
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Avatar alt="Remy Sharp" src="/qw.jpg"/>
                    <div className={classes.name}>
                        <ListItemText primary={`Дима Щукин`}/>
                        <Typography component="p" className={classes.geo}>
                            Москва
                        </Typography>
                    </div>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                        <Typography component="p" className={classes.avgTime}>
                            2:30мин
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Contact className={classes.number}/>
                    <div className={classes.name}>
                        <ListItemText primary={`8-999-123-44-11`}/>
                        <Typography component="p" className={classes.geo}>
                            Москва
                        </Typography>
                    </div>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                        <Typography component="p" className={classes.avgTime}>
                            2:30мин
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/10223853/user-avatar"/>
                    <div className={classes.name}>
                        <ListItemText primary={`Степан Дешевых`}/>
                        <Typography component="p" className={classes.geo}>
                            Москва
                        </Typography>
                    </div>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                        <Typography component="p" className={classes.avgTime}>
                            2:30мин
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Contact className={classes.number}/>
                    <div className={classes.name}>
                        <ListItemText primary={`8-930-894-25-28`}/>
                        <Typography component="p" className={classes.geo}>
                            Москва
                        </Typography>
                    </div>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                        <Typography component="p" className={classes.avgTime}>
                            2:30мин
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Contact className={classes.number}/>
                    <div className={classes.name}>
                        <ListItemText primary={`8-930-894-25-28`}/>
                        <Typography component="p" className={classes.geo}>
                            Москва
                        </Typography>
                    </div>
                    <ListItemSecondaryAction>
                        <Button aria-label="Comments" className={classes.button}>
                            <Phone className={classes.buttonCall}/>
                        </Button>
                        <Button aria-label="Comments" className={classes.button}>
                            <CallEnd className={classes.buttonCallEnd}></CallEnd>
                        </Button>
                        <Typography component="p" className={classes.avgTime}>
                            2:30мин
                        </Typography>
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
