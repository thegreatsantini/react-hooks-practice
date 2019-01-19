import React, { useState } from "react";
import EditableTimer from "./components/EditableTimer";
import TimerFormContainer from "./components/TimerFormContainer";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    margin: 0
  },
  paper: {
    backgroundColor: "#f2efe8",
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
  const [timers, timerForm] = useState([
    {
      title: "eggs",
      description: "runny yoke",
      time: 0,
      limit: 0,
      completed: false
    },
    {
      title: "chicken",
      description: "cook some chicken",
      time: 0,
      limit: 0,
      completed: false
    },
    {
      title: "run",
      description: "get healthy",
      time: 0,
      limit: 0,
      completed: false
    }
  ]);
  const addTimer = timer => {
    const newTimer = [...timers, timer];
    timerForm(newTimer);
  };
  const editTimer = (i, changes) => {
    const applyChanges = timers.map((val, index) => {
      if (index === i) {
        return changes;
      }
      return val;
    });
    timerForm(applyChanges);
  };
  const removeTimer = index => {
    const applyChanges = timers.filter((val, i) => i !== index);
    timerForm(applyChanges);
  };
  const updateTime = (index, newTime) => {
    const applyChanges = timers.map((val, i) => {
      if (index === i) {
        return {
          ...val,
          time: newTime
        };
      } else {
        return val;
      }
    });
    timerForm(applyChanges);
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={8}>
        <Typography
          className={classes.title}
          component="h2"
          variant="h3"
          gutterBottom
        >
          Timer
        </Typography>
        <Divider style={{ marginBottom: "20px" }} />
        <TimerFormContainer add={addTimer} />
        {timers.map((timer, i) => (
          <EditableTimer
            remove={i => removeTimer(i)}
            edit={(i, changes) => editTimer(i, changes)}
            updateTime={(i, time) => updateTime(i, time)}
            key={i}
            index={i}
            timer={timer}
          />
        ))}
      </Paper>
    </div>
  );
}

export default withStyles(styles)(App);
