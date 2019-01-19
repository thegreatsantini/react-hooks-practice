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
  const { id, title, description, time, running, limit } = props.timer;
  const {edit, index} = props
  const [bool, toggleEdit] = useState(false);
  const toggleForm = () => toggleEdit(!bool)
  
  if (bool) {
    return (
      <EditTimerForm
        index={index}
        edit={edit}
        title={title}
        description={description}
        limit={limit}
        time={time}
        toggle={toggleForm}
      />
    );
  }
  return (
    <Timer
      id={id}
      title={title}
      description={description}
      time={time}
      running={running}
      editTimer={toggleForm}
    />
  );
}

export default withStyles(styles)(EditableTimer);
