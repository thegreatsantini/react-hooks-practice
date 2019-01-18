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
  const [timer, toggleEdit] = useState(false);
  const closeForm = () => toggleEdit(false);
  const openForm = () => toggleEdit(true);
  if (timer) {
    return (
      <EditTimerForm
        id={id}
        title={title}
        description={description}
        limit={limit}
        time={time}
        toggle={closeForm}
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
      editTimer={openForm}
    />
  );
}

export default withStyles(styles)(EditableTimer);
