import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { millisecondsToHuman } from '../utils'
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

function TimeInput(props) {
  const { classes, setLimit, initialLimit } = props;
  const [value, setVal] = useState(initialLimit)
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{"current limit " + millisecondsToHuman(initialLimit)}</InputLabel>
        <Select
          native
          value={value}
          onChange={e => {
            setVal(e.target.value)
            setLimit(e.target.value);
          }}
          inputProps={{
            name: "age",
            id: "age-native-simple"
          }}
        >
          <option value="" />
          <option value={30000}>30 seconds</option>
          <option value={60000}>1 min</option>
          <option value={120000}>2 mins</option>
          <option value={300000}>5 mins</option>
          <option value={600000}>10 mins</option>
          <option value={600000}>10 mins</option>
          <option value={1.8e6}>30 mins</option>
        </Select>
      </FormControl>
    </div>
  );
}

TimeInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimeInput);
