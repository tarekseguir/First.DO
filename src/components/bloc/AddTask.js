import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Add from "@material-ui/icons/Add";

import Card from 'components/Card/Card';
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { bugs, website, server } from "variables/general.js";
const styles = makeStyles((theme) => ({
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

function AddTask() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [taskContent, setTask] = React.useState('');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
        
      };
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (e) => {
        bugs.push(taskContent);
        console.log(bugs)
        setOpen(false);
      };



    return (
        <div>
            <Button onClick={handleClickOpen}
                variant="contained"
                color= "primary"
                className={classes.button}
                startIcon={<Add/>}
            >
                Add Task
            </Button>






        
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} fullWidth>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Create a New Task:</h4>
                </CardHeader>
                <CardBody>
                <DialogContent>
                <form className={classes.container}>
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-dialog-native">Project</InputLabel>
                    <Select
                        native
                        value={age}
                        onChange={handleChange}
                        input={<Input id="project_id" />}
                    >
                        <option aria-label="None" value="" />
                        <option value={1}>Self Care</option>
                        <option value={2}>Work</option>
                        <option value={3}>Goals</option>
                    </Select>
                    </FormControl>
                    <br/>
                    <br/>
                    <TextField
                        value={taskContent}
                        onChange ={e => setTask(e.target.value)}
                        id="task_create"
                        fullWidth
                        id="standard-textarea"
                        label="Your Task:"
                        placeholder="Placeholder"
                        multiline
                    />
                </form>
                </DialogContent>
                
                <DialogActions>
                <Button color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Ok
                </Button>
                </DialogActions>
                </CardBody>
        </Card>
      </Dialog>
        </div>
    )
}

export default AddTask
