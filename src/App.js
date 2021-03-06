import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {mailFolderListItems, otherMailFolderListItems} from './tileData';
import Button from 'material-ui/Button';

import Desktop from './Desktop';
import Widget from './widget';
import WidgetInCall from './widgetInCall';
import Contacts from './Contacts';

import Dialpad from 'material-ui-icons/Dialpad';
import Call from 'material-ui-icons/Call';
import Close from 'material-ui-icons/Close';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

const themeb = createMuiTheme({
    palette: {
        primary: {
            light: '#606060',
            main: '#363636',
            dark: '#101010',
            contrastText: '#fff',
        },
        secondary: {
            light: '#1088b6',
            main: '#5bb8e8',
            dark: '#005b86',
            contrastText: '#000',
        },
    },
});

const drawerWidth = '100%';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    contentWidget: {
        background: 'url(./3704.jpg)',
        height: '100%',
        weight: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        //filter: 'blur(5px)',
        height: '100%',
        //background: 'url(http://cs14109.vk.me/c540103/v540103025/b8b3/Dum_uBTGjfk.jpg)',
        //background: '/346323.jpg',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: 'red',
        //padding: theme.spacing.unit * 3,
    },
    button: {
        position: 'fixed',
        bottom: 10,
        right: 10,
        zIndex: 1234
    },
    open: {
        display: 'block'
    },
    close: {
        display: 'none'
    }
});

class MiniDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, theme} = this.props;
        return (
            <MuiThemeProvider theme={themeb}>
                <div className={classes.root}>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, classes.drawerPaperClose),
                        }}
                        open={false}
                    >
                        <Divider/>
                        <List>{mailFolderListItems}</List>
                        <Divider/>
                    </Drawer>
                    <main className={classes.content}>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.contentWidget}>
                                <Desktop/>
                                <WidgetInCall open={this.state.open}/>
                            </div>
                        </Drawer>
                        <Button id='1231' variant="fab" color="secondary" aria-label="edit" className={classes.button}>
                            {
                                this.state.open ? <Close onClick={this.handleDrawerClose}></Close> :
                                    <Call onClick={this.handleDrawerOpen}></Call>
                            }
                        </Button>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MiniDrawer);
