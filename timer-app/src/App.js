import React, { useReducer } from "react";
import EditableTimer from "./components/EditableTimer";
import TimerFormContainer from "./components/TimerFormContainer";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { reducer } from "./reducers";
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

const initialState = [
  {
    title: "eggs",
    description: "runny yoke",
    time: "00:00:00",
    limit: 2000
  },
  {
    title: "chicken",
    description: "well done",
    time: "00:00:00",
    limit: 1000
  },
  {
    title: "run",
    description: "beat my PR",
    time: "00:00:00",
    limit: 5000
  }
];

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState, {
    type: "initial",
    payload: "initial payload"
  });

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
        <TimerFormContainer
          reducers={(type, payload) => dispatch(type, payload)}
        />
        {state.map((timer, i) => (
          <EditableTimer
            reducers={(type, payload) => dispatch(type, payload)}
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
