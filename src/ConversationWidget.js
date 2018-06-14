import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText, ListSubheader, ListItemSecondaryAction} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import Typography from 'material-ui/Typography';


import Contact from 'material-ui-icons/ContactPhone';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';

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
        color: '#9ccc65',
        marginLeft: '-55px'
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
        padding: '33px 0',
        marginLeft: '24px'
    }, agentItem: {
        position: 'relative'
    }, status: {
        width: '10px',
        height: '10px',
        background: '#9ccc65',
        position: 'absolute',
        top: '31px',
        borderRadius: '100%',
        right: 0
    }, agentsStat: {
        fontSize: '11px',
        width: '100px',
        textAlign: 'left'
    }, icon: {
        float: 'left',
        marginRight: '10px'
    }, arrow: {
        marginRight: '10px'
    },
});

function ListDividers(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItemText className={classes.header} primary={`Разговоры`}/>
                <ListItem className={classes.devider}>
                    <span component="div">
                        Сейчас разговаривают
                    </span>
                    <ListItemSecondaryAction className={classes.avgTime}>
                        Среднее время разговора: <br/>
                        4мин
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <div className={classes.agentItem}>
                        <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                        <div className={classes.status}></div>
                    </div>
                    <ListItemText primary={`Дима Голиков`}/>
                    <ArrowBack className={classes.arrow}/>
                    <div>
                        <Contact className={classes.icon}/>
                        <ListItemText primary={`8-930-894-25-28`}/>
                        <Typography component="p" className={classes.agentsStat}>
                            5:30мин
                        </Typography>
                    </div>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <div className={classes.agentItem}>
                        <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/2228304/user-avatar"/>
                        <div className={classes.status}></div>
                    </div>
                    <ListItemText primary={`Дима Маслов`}/>
                    <ArrowForward className={classes.arrow}/>
                    <div>
                        <Contact className={classes.icon}/>
                        <ListItemText primary={`8-930-894-25-28`}/>
                        <Typography component="p" className={classes.agentsStat}>
                            3:40мин
                        </Typography>
                    </div>
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
