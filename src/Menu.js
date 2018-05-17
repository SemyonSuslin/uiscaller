import React from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';

import Avatar from 'material-ui/Avatar';
import deepPurple from 'material-ui/colors/deepPurple';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    avatar: {
        margin: '10px auto',
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <div position="static" color="default"
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                      <Avatar className={classes.avatar} aria-owns={anchorEl ? 'simple-menu' : null}>
                        SS
                    </Avatar>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>В сети</MenuItem>
                    <MenuItem onClick={this.handleClose}>Нет на месте</MenuItem>
                    <MenuItem onClick={this.handleClose}>Не доступен</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(SimpleMenu)
