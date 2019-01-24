import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TimeInput from "./TimeInput";

const styles = theme => ({
  container: {
    // display: "flex",
    // flexWrap: "wrap",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "8px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // height: 30,
    // padding: 5,
    fontSize: 12
    // width: 200,
  },
  form: {
    display: "flex"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: 2
  }
});

function TimerForm(props) {
  const { reducers } = props;
  const [formData, setValue] = useState({
    title: "",
    description: "",
    time: "00:00:00"
  });
  let [currentField, stepThrough] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    if (currentField < 2) {
      stepThrough(currentField + 1);
    } else {
      reducers({
        type: "add",
        payload: { formData }
      });
      stepThrough(0);
      toggle();
    }
  };
  const { classes, toggle } = props;
  return (
    <Paper elevation={1} className={classes.container}>
      <form
        className={classes.form}
        onSubmit={e => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        {currentField === 0 && (
          <TextField
            id="title"
            label="Title"
            onChange={e =>
              setValue({
                ...formData,
                [e.target.id]: e.target.value
              })
            }
            className={classes.textField}
          />
        )}
        {currentField === 1 && (
          <TextField
            id="description"
            label="Description"
            onChange={e =>
              setValue({
                ...formData,
                [e.target.id]: e.target.value
              })
            }
            className={classes.textField}
          />
        )}
        {currentField === 2 && (
          <TimeInput
            initialLimit={0}
            setLimit={newTime => {
              setValue({
                ...formData,
                limit: parseInt(newTime)
              });
            }}
          />
        )}
        {currentField < 2 ? (
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => stepThrough(currentField + 1)}
            >
              next
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => toggle()}
            >
              cancel
            </Button>
          </div>
        ) : (
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
            onSubmit={e => handleSubmit(e)}
            onClick={e => handleSubmit(e)}
          >
            add timer
          </Button>
        )}
      </form>
    </Paper>
  );
}

TimerForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimerForm);
