import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';



import './TextBox.css';
const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    paddingLeft:215,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
   
    marginLeft: 20,
    width: 500,
    [theme.breakpoints.up('lg')]: {
      
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  
}));


export default function TextBox ()
{
    const classes = useStyles();
   
        
        return (

        <React.Fragment>
      
      <AppBar position="fixed" color="white" className={classes.appBar}>
        <Toolbar>
        <div className={classes.search}>
           
            <InputBase
              placeholder="Enter your message"
              className="inputInput"
            //   classes={{
            //     root: classes.inputRoot,
            //     input: classes.inputInput,
            //   }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton color="inherit">
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
      
    
}