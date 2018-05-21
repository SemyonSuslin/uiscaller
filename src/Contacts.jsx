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

import Paper from 'material-ui/Paper';


import Contact from 'material-ui-icons/ContactPhone';
import Phone from 'material-ui-icons/Phone';
import CallEnd from 'material-ui-icons/CallEnd';

import {missedCallsListItems, otherMailFolderListItems} from './tileData';

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
    back: {
        filter: 'blur(5px)',
        height: '100%',
        //width: '100%',
        position: 'absolute',
        //background: 'url(http://cs14109.vk.me/c540103/v540103025/b8b3/Dum_uBTGjfk.jpg)'
        /*background: 'https://opt-1132759.ssl.1c-bitrix-cdn.ru/upload/iblock/543/hz6q0gq2.png?1511790708140382',
        backgroundSize: 'cover'*/
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
            </ExpansionPanel>
        );
    }
}


export default withStyles(styles)(History);
