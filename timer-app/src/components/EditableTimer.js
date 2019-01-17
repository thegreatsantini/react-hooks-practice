import React from "react";
import TimerForm from "./TimerForm";
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
  const { id, title, description, time, running } = props.timer;
//   const { editFormOpen } = this.state;

//   if (editFormOpen) {
//     return (
//       <TimerForm
//         id={id}
//         title={title}
//         description={description}
//         onFormSubmit={this.handleSubmit}
//         onFormClose={this.handleFormClose}
//       />
//     );
//   }
  return (
    <Timer
      id={id}
      title={title}
      description={description}
      time={time}
      running={running}
    //   onEditPress={this.handleEditPress}
    />
  );
}

export default withStyles(styles)(EditableTimer);
