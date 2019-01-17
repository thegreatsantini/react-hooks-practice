import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  fab: {
    position: 'absolute',
    zIndex: 1,
    bottom: 699,
    left: 250,
    right: 0,
    margin: '0 auto',
    fontSize: 8
  }
});

function AddTimerButton(props) {
  const { classes, toggle } = props;
  console.log(toggle)
  return (
    <div>
      <Fab 
      color="primary" 
      size='small'
       aria-label="Add" 
       className={classes.fab}
       onClick={()=> toggle()}
       >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default withStyles(styles)(AddTimerButton);
