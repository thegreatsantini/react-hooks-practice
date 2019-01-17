import React, { useState } from "react";
import TimerForm from "./TimerForm";
import AddTimerButton from "./AddTimerButton";

function TimerFormContainer(props) {
  const [newTimer, toggleform] = useState(false);
  const toggleAdd = () => {
    console.log('clicked')
    toggleform(!newTimer);
  };
  return (
    <React.Fragment>
      {!newTimer ? <AddTimerButton toggle={toggleAdd} /> : <TimerForm toggle={toggleAdd}/>}
    </React.Fragment>
  );
}
export default TimerFormContainer;
