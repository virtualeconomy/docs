import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect  } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import  Drawer  from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideNav from './components/SideNav';
import MarkdownDoc from './components/MarkdownDoc';
import './App.css';
import FrameworkSelector from "./components/FrameworkSelector";
import * as EatonTheme from '@pxblue/themes/react';
import Hidden from '@material-ui/core/Hidden';
import HomeComponent from "./components/Home";
import ColorComponent from "./components/Color";
import IconographyComponent from "./components/Iconography";
import * as colors from '@pxblue/colors';

require('typeface-roboto-mono');

const siteConfig = require('../docs/site-config.json');

// Browser detection
var isFirefox = typeof InstallTrigger !== 'undefined';
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

const mapStateToProps = state => ({
  pagetitle: state.ui.get('pagetitle')
});

const mapDispatchToProps = dispatch => {
  return {};
};

const drawerWidth = 364;
const theme = createMuiTheme(Object.assign(EatonTheme.blue, {typography: {fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif', useNextVariants: true}}));

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
  },
  appBar: {
    position: 'fixed'
  },
  slidebaby: {
    transition: 'all 225ms ease-in-out'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    maxWidth: '90%',
    height: '100%'
  },
  container:{
    backgroundColor: colors.gray[50],
    flexDirection:'column',
    overflowY: 'auto',
    flexShrink: '1',
    marginLeft: drawerWidth,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  content: {
    padding: '24px',
    height: 'calc(100% - 56px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      maxWidth:'1100px',
      margin: 'auto'
    },
  },
  toolbar:{
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 1
    }
  }
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        framework: 'angular',
        mobileOpen: false,
        showFrameworkSelect: false,
        browser: (isFirefox ? 'firefox' : isIE ? 'ie' : isEdge ? 'edge' : isChrome ? 'chrome' : 'other')
    };
  }
    


  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  // closeDrawer = () => {
  //   console.log('closing drawer');
  //   this.setState({ mobileOpen: false});
  //   this.props.updateToolbarTitle();
  // };

  componentWillReceiveProps(newProps){
    this.setState({showFrameworkSelect:
      (window.location.pathname.match(/\/patterns\//) && !window.location.pathname.match(/\/patterns\/layout/))// ||
      //window.location.pathname.match(/\/getstarted\/themes/)
    });
    if(newProps.pagetitle && (newProps.pagetitle !== this.props.pagetitle)){
      if(this.scrollContainer && this.scrollContainer.scrollTop !== undefined){
        this.scrollContainer.scrollTop = 0;
      }
    }
  }

  getMobileNavigationDrawer(){
    const {classes} = this.props;
    return (
      <Drawer
        variant="temporary"
        open={this.state.mobileOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={this.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <SideNav pages={ siteConfig.pages }/>
      </Drawer>
    );
  }

  getDesktopNavigationDrawer(){
    const {classes} = this.props;
    return (
      <Drawer
        variant="permanent"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SideNav  pages={ siteConfig.pages }/>
      </Drawer>
    );
  }

  render() {
    const {classes} = this.props;
    return <MuiThemeProvider theme={theme}>
        <Hidden smUp implementation="css">
          {this.getMobileNavigationDrawer()}
        </Hidden>
        <div className={classes.root}>
          <Hidden smDown implementation="css">
            {this.getDesktopNavigationDrawer()}
          </Hidden>
          <div className={classes.container} ref={ref => (this.scrollContainer = ref)}>
            {/* Floating Icon Button for Menu on homepage */}
            {window.location.pathname === "/" && <div style={{ color: "white" }}>
                <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide} style={{ zIndex: "10" }}>
                  <MenuIcon />
                </IconButton>
              </div>}

            {/* Toolbar with Icon Button for Menu on non-homepage */}
            {window.location.pathname !== "/" && <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                  <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit">
                    {this.props.pagetitle}
                  </Typography>
                </Toolbar>
              </AppBar>}

            {/* Select Framework Toolbar */}
            {window.location.pathname !== "/" && <AppBar position="static" color="default" className={classes.slidebaby} style={{ marginTop: this.state.showFrameworkSelect ? "64px" : "-64px" }}>
                <Toolbar style={{ display: "flex", flexDirection: "row" }}>
                  <FrameworkSelector framework={this.state.framework} onSelectFramework={choice => this.setState(
                        state => ({ framework: choice })
                      )} />
                  <div style={{ flex: "1 1 0px", textAlign: "right" }}>
                    <Hidden xsDown>
                      <Typography color="inherit">
                        Selecting a framework will show code examples for
                        only that framework.
                      </Typography>
                    </Hidden>
                  </div>
                </Toolbar>
              </AppBar>}

            {!this.state.showFrameworkSelect && window.location.pathname !== "/" && <div style={{ marginTop: "64px" }} />}

            {/* Main Router for page content  */}
            <div className={window.location.pathname !== "/" ? classes.content : ""}>
              <Switch>
                <Route exact path="/" render={() => <HomeComponent />} />
                <Route exact path="/style/color" render={() => <ColorComponent />} />
                <Route exact path="/style/iconography" render={() => <IconographyComponent />} />
                <Route /*onChange={this.closeDrawer} no longer works in v4 */ path="/:doc*" render={props => <MarkdownDoc doc={props.match.params.doc} selectedFramework={this.state.framework} browser={this.state.browser} />} />
              </Switch>
            </div>
          </div>
        </div>
      </MuiThemeProvider>;
  }
}


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }),
  withStyles(styles,
    {name: 'App'}
  ),
  )(App);
