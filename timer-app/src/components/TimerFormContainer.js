import React, { useState } from "react";
import TimerForm from "./TimerForm";
import AddTimerButton from "./AddTimerButton";

function TimerFormContainer(props) {
  let [newTimer, toggleform] = useState(false);
  const toggleAdd = () => {
    toggleform(true);
  };
  return (
    <React.Fragment>
      {!newTimer ? <AddTimerButton toggle={toggleAdd} /> : <TimerForm />}
    </React.Fragment>
  );
}
export default TimerFormContainer;
