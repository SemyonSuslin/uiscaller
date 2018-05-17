import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';

import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import ExpansionPanel from 'material-ui/ExpansionPanel';
import Tabs, {Tab} from 'material-ui/Tabs';

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
        width: '100%',
        position: 'absolute',
        background: 'url(http://cs14109.vk.me/c540103/v540103025/b8b3/Dum_uBTGjfk.jpg)'
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
    }
};


class History extends React.Component {
    state = {
        value: 'queue'
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <ExpansionPanel defaultExpanded className={classes.panel}>
                <div className={classes.back} id="11"></div>
                <div className={classes.backWhite} id="131"></div>
                <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                    onChange={this.handleChange}
                >
                    <Tab label="В очереди" value="queue"/>
                    <Tab label="Запланированы" value="planned"/>
                    <Tab label="Пропущенные" value="missed"/>
                </Tabs>
                {value === 'queue' &&
                <div>
                    <List>{otherMailFolderListItems}</List>
                </div>}
                {value === 'planned' && <div>
                    <List>вв</List>
                </div>}
                {value === 'missed' && <div>
                    <List>{missedCallsListItems}</List>
                </div>}
            </ExpansionPanel>
        );
    }
}


export default withStyles(styles)(History);
