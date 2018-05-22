import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText, ListSubheader, ListItemSecondaryAction} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Phone from 'material-ui-icons/Phone';
import Typography from 'material-ui/Typography';



import Contact from 'material-ui-icons/ContactPhone';
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
        padding: '12px 0',
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
    },
});

function ListDividers(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItemText className={classes.header} primary={`Операторы`}/>
                <ListItem className={classes.devider}>
                    <span component="div">
                        В сети (3)
                    </span>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <div className={classes.agentItem}>
                        <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                        <div className={classes.status}></div>
                    </div>
                    <ListItemText primary={`Дима Голиков`}/>
                    <Button aria-label="Comments" className={classes.button}>
                        <Phone className={classes.buttonCall}/>
                    </Button>
                    <Typography component="p" className={classes.agentsStat}>
                        10 звонков<br/>
                        2ч.30мин. на линии
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <div className={classes.agentItem}>
                        <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/2228304/user-avatar"/>
                        <div className={classes.status}></div>
                    </div>
                    <ListItemText primary={`Дима Маслов`}/>
                    <Button aria-label="Comments" className={classes.button}>
                        <Phone className={classes.buttonCall}/>
                    </Button>
                    <Typography component="p" className={classes.agentsStat}>
                        104 звонка<br/>
                        23ч.30мин. на линии
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <div className={classes.agentItem}>
                        <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/5113578/user-avatar"/>
                        <div className={classes.status}></div>
                    </div>
                    <ListItemText primary={`Павел Тихачев`}/>
                    <Button aria-label="Comments" className={classes.button}>
                        <Phone className={classes.buttonCall}/>
                    </Button>
                    <Typography component="p" className={classes.agentsStat}>
                        пока нет звонков
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <div className={classes.agentItem}>
                        <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/688212/user-avatar"/>
                        <div className={classes.status}></div>
                    </div>
                    <ListItemText primary={`Хохлов Сергей`}/>
                    <Button aria-label="Comments" className={classes.button}>
                        <Phone className={classes.buttonCall}/>
                    </Button>
                    <Typography component="p" className={classes.agentsStat}>
                        пока нет звонков
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem className={classes.devider}>
                    <span component="div">
                        Не в сети (2)
                    </span>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/1769554/user-avatar"/>
                    <ListItemText primary={`Михелев Андрюха`}/>

                </ListItem>
                <Divider/>
                <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://docs.uiscom.ru/download/attachments/29950787/user-avatar"/>
                    <ListItemText primary={`Кисляков Димон`}/>
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
