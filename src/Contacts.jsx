import React from 'react';
import PropTypes from 'prop-types';


import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import ExpansionPanel from 'material-ui/ExpansionPanel';
import Tabs, {Tab} from 'material-ui/Tabs';
import List, {ListItem, ListItemText, ListSubheader, ListItemSecondaryAction} from 'material-ui/List';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';

import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Paper from 'material-ui/Paper';

import Contact from 'material-ui-icons/ContactPhone';

const styles = {
    root: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0
    },
    panel: {
        height: '100%'
    },
    avatarForContacts: {
        height: '100px',
        width: '100px'
    },
    back: {
        filter: 'blur(5px)',
        height: '100%',
        //width: '100%',
    },
    demo: {
        height: '1000px',
    },
    backWhite: {
        filter: 'blur(5px)',
        height: '100%',
        width: '100%',
        //position: 'absolute',
        background: '#e2e2e2',
        padding: '5px',
        opacity: '0.7',
    }, paper: {
        height: 'auto',
        width: '100%',
        height: '100%',
    },
    item: {
        padding: 10
    }
};


class History extends React.Component {
    state = {
        value: 'last'
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <ExpansionPanel defaultExpanded className={classes.panel}>
                <Grid>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={16}>
                            <Grid key='11' item xs className={classes.item}>
                                <Paper className={classes.paper}>

                                    <Tabs
                                        value={this.state.value}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        scrollable
                                        scrollButtons="auto"
                                        onChange={this.handleChange}
                                    >
                                        <Tab label="Последние" value="last"/>
                                        <Tab label="Запланированы" value="planned"/>
                                        <Tab label="Пропущенные" value="missed"/>
                                    </Tabs>
                                    {value === 'last' &&
                                    <div>
                                        <List component="nav">
                                            <ListItem className={classes.devider}>
                                                <span component="div">
                                                    Сегодня
                                                </span>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp" src="/qw.jpg"/>
                                                <ListItemText primary={`Дима Щукин`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Contact/>
                                                <ListItemText primary={`8-999-123-44-11`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp"
                                                        src="https://docs.uiscom.ru/download/attachments/10223853/user-avatar"/>
                                                <ListItemText primary={`Степан Дешевых`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Contact/>
                                                <ListItemText primary={`8-930-894-25-28`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Contact/>
                                                <ListItemText primary={`8-999-123-44-55`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem className={classes.devider}>
                            <span component="div">
                                Вчера
                            </span>
                                            </ListItem>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp"
                                                        src="https://docs.uiscom.ru/download/attachments/10223853/user-avatar"/>
                                                <ListItemText primary={`Степан Дешевых`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Contact/>
                                                <ListItemText primary={`8-930-894-25-28`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Contact/>
                                                <ListItemText primary={`8-999-123-44-55`}/>
                                            </ListItem>
                                            <Divider/>
                                        </List>
                                    </div>}
                                    {value === 'planned' && <div>
                                        <List component="nav">
                                            <Divider/>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp" src="/qw.jpg"/>
                                                <ListItemText primary={`Дима Щукин`}/>
                                            </ListItem>
                                            <Divider/>
                                            <ListItem button>
                                                <Contact/>
                                                <ListItemText primary={`8-999-123-44-11`}/>
                                            </ListItem>
                                            <Divider/>
                                        </List>
                                    </div>}
                                    {value === 'missed' && <div>
                                        <List component="nav">
                                            <Divider/>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp" src="/qw.jpg"/>
                                                <ListItemText primary={`Дима Щукин`}/>
                                            </ListItem>

                                        </List>
                                    </div>}
                                </Paper>
                            </Grid>
                            <Grid key='12' item xs className={classes.item}>
                                <Paper className={classes.paper}>
                                    <Paper>
                                        <ListItem>
                                            <Avatar className={classes.avatarForContacts} alt="Remy Sharp"
                                                    src="/qw.jpg"/>
                                            <ListItem>
                                                <ListItemText primary={`Дмитрий Щукин`}
                                                                  secondary={`Последний звонок 4ч назад`}/>
                                                <Button color="green" aria-label="Comments" className={classes.button}>
                                                    Позвонить
                                                </Button>
                                            </ListItem>
                                        </ListItem>
                                    </Paper>
                                    <Paper>
                                        <div>
                                            <List component="nav">
                                                <ListItem className={classes.devider}>
                                                <span component="div">
                                                    Сегодня
                                                </span>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`16:30`}
                                                                  secondary={`Продолжительность 1мин`}/>
                                                    <ArrowForward className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`13:30`}
                                                                  secondary={`Продолжительность 2мин`}/>
                                                    <ArrowForward className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`10:30`}
                                                                  secondary={`Продолжительность 30мин`}/>
                                                    <ArrowBack className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`02:30`}
                                                                  secondary={`Продолжительность 1мин`}/>
                                                    <ArrowForward className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`00:02`}
                                                                  secondary={`Продолжительность 3мин`}/>
                                                    <ArrowBack className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem className={classes.devider}>
                            <span component="div">
                                Вчера
                            </span>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`16:30`}
                                                                  secondary={`Продолжительность 1мин`}/>
                                                    <ArrowForward className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`13:30`}
                                                                  secondary={`Продолжительность 2мин`}/>
                                                    <ArrowForward className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button>
                                                    <ListItemText primary={`10:30`}
                                                                  secondary={`Продолжительность 30мин`}/>
                                                    <ArrowBack className={classes.arrow}/>
                                                    <Avatar alt="Remy Sharp"
                                                            src="https://docs.uiscom.ru/download/attachments/8388654/user-avatar"/>
                                                </ListItem>
                                                <Divider/>
                                            </List>
                                        </div>
                                    </Paper>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ExpansionPanel>
        );
    }
}


export default withStyles(styles)(History);
