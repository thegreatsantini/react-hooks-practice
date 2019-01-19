import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    // ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
    // margin: "8px"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // height: 30,
    // padding: 5,
    fontSize: 12
    // width: 200,
  },
  form: {
    display: "flex",
    flewDirection: "column"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: 2
  }
});

function EditTimerForm(props) {
  const {
    classes,
    toggle,
    title,
    description,
    limit,
    time,
    edit,
    index,
    remove
  } = props;
  const [formData, setValue] = useState({
    title,
    description,
    time,
    limit,
    running: false,
    completed: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    edit(index, formData);
    toggle()
  };
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          component="h2"
          variant="h6"
          gutterBottom
        >
          Edit {title}
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <div className={classes.formContainer}>
            <TextField
              id="title"
              placeholder={title}
              onChange={e =>
                setValue({
                  ...formData,
                  [e.target.id]: e.target.value
                })
              }
              className={classes.textField}
              //   margin="normal"
            />

            <TextField
              id="description"
              placeholder={description}
              onChange={e =>
                setValue({
                  ...formData,
                  [e.target.id]: e.target.value
                })
              }
              className={classes.textField}
            />
            <TextField
              id="limit"
              placeholder={JSON.stringify(limit)}
              onChange={e =>
                setValue({
                  ...formData,
                  [e.target.id]: e.target.value
                })
              }
              className={classes.textField}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => toggle()}
            >
              cancel
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
              onSubmit={e => handleSubmit(e)}
              onClick={e => handleSubmit(e)}
            >
              save
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
              onClick={e =>  {
                remove(index)
                toggle()
              }}
            >
              delete
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(EditTimerForm);
