import React, { useState } from "react";
import EditTimerForm from "./EditTimerForm";
import Timer from "./Timer";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
  }
});

function EditableTimer(props) {
  const { title, description, time, limit } = props.timer;
  const { index, reducers } = props;
  const [bool, toggleEdit] = useState(false);

  if (bool) {
    return (
      <EditTimerForm
        reducers={reducers}
        index={index}
        title={title}
        description={description}
        limit={limit}
        time={time}
        toggle={() => toggleEdit(!bool)}
      />
    );
  }
  return (
    <Timer
      reducers={reducers}
      index={index}
      title={title}
      description={description}
      time={time}
      limit={limit}
      toggleEdit={() => toggleEdit(!bool)}
    />
  );
}

export default withStyles(styles)(EditableTimer);
