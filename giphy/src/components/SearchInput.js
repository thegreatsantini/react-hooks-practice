import React, { useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

function SearchInput(props) {
  const { classes, handleChange } = props;
  const [value, setValue] = useState("");
  return (
    <TextField
      id="standard-name"
      label="Name"
      className={classes.textField}
      value={value}
      onChange={(e)=> {
          setValue(e.target.value)
          handleChange(e.target.value)
        }}
      margin="normal"
    />
  );
}

export default withStyles(styles)(SearchInput);
