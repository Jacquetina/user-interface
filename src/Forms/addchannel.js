import React,{ useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { Input } from '@material-ui/core';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignContent:'center',
    alignSelf:'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CreateChannel() {
  const classes = useStyles();
  const [channel, setChannel] = useState('general');
  return (
    <div className={classes.root}>
      <b>Create new Channel</b>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Input placeholder='Enter the Channel Name' >Name</Input>
        </Grid>
        <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button} 
          >
            <Link to='/' style={{textDecoration:'none',color:'#ffffff'}}>Create </Link>
          </Button>
        
          </Grid>
      </Grid>
    </div>
  );
}
