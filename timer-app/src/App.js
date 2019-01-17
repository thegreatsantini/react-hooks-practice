import React, {useState} from "react";
import EditableTimer from './components/EditableTimer'
import TimerFormContainer from './components/TimerFormContainer'
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider'
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "8px"
  },
  title: {
    width: "100%",
    maxWidth: 500,
    display: "flex",
    justifyContent: "center"
  }
});

function App(props) {
  const [ timers, timerForm ] = useState([
    {
      id: 0,
      title:"eggs",
      description: 'runny yoke',
      time: "0:00:00",
      running: false,
      isEditing: false,
      completed: false
    },
    {
      id : 1,
      title:"chicken",
      description: 'cook some chicken',
      time: "0:00:00",
      running: false,
      isEditing: false,
      completed: false
    },
    {
      id: 2,
      title:"run",
      description: 'get healthy',
      time: "0:00:00",
      running: false,
      isEditing: false,
      completed: false
    }
  ])
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography
        className={classes.title}
        component="h2"
        variant="h3"
        gutterBottom
      >
        Timer
      </Typography>
      <Divider/>
      <TimerFormContainer />
      {
        timers.map( (timer, i ) => <EditableTimer key={i} timer={timer}/>)
      }
    </Paper>
  );
}

export default withStyles(styles)(App);
