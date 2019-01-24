import React, { useState } from "react";
import TimerForm from "./TimerForm";
import AddTimerButton from "./AddTimerButton";

function TimerFormContainer(props) {
  const { reducers } = props;
  const [newTimer, toggleform] = useState(false);
  const toggleAdd = () => {
    toggleform(!newTimer);
  };
  return (
    <React.Fragment>
      {!newTimer ? (
        <AddTimerButton toggle={toggleAdd} />
      ) : (
        <TimerForm reducers={reducers} toggle={toggleAdd} />
      )}
    </React.Fragment>
  );
}
export default TimerFormContainer;
