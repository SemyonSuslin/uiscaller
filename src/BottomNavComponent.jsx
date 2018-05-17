import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ContactsIcon from 'material-ui-icons/Contacts';
import DialpadIcon from 'material-ui-icons/Dialpad';
import GroupIcon from 'material-ui-icons/Group';
import TextField from 'material-ui/TextField';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Contacts from './Contacts';

const styles = {
    root: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    panel: {
        height: '832px'
    },
    back: {
        //background: 'red'
    }
};


class TabContainer extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <ExpansionPanel defaultExpanded className={classes.panel}>
                <div component="div" className={classes.back} id="123">
                    {this.props.children}
                </div>
            </ExpansionPanel>
        );
    }
}

let TabContainerNH = withStyles(styles)(TabContainer);


class LabelBottomNavigation extends React.Component {
    state = {
        value: 'recents',
        number: ''
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    _handleInput(input) {
        this.setState({number: input});
    }

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        const {number} = this.state;
        const textField = (
            <TextField
                id="field"
                value={number}
                floatingLabelText="Click for a Keyboard"/>
        );

        return (
            <div className={classes.root}>
                {value === 'recents' && <TabContainerNH><Contacts/></TabContainerNH>}
                {value === 'contacts' && <TabContainerNH>Item Two</TabContainerNH>}
                {value === 'number' && <TabContainerNH> ws</TabContainerNH>}
                {value === 'agents' && <TabContainerNH>Item Four</TabContainerNH>}
                <BottomNavigation value={value} onChange={this.handleChange}>
                    <BottomNavigationAction label="Вызовы" value="recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Контакты" value="contacts" icon={<ContactsIcon/>}/>
                    <BottomNavigationAction label="Клавиши" value="number" icon={<DialpadIcon/>}/>
                    <BottomNavigationAction label="Операторы" value="agents" icon={<GroupIcon/>}/>
                </BottomNavigation></div>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LabelBottomNavigation);
