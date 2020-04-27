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

import { NotebookData } from "variables/general.js";
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


function AddNote() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const handleCilckOpen = (e) =>{
        setOpen(true);
    }
    const handleSave = (e) =>{
        NotebookData.push([NotebookData.length + 1,title,content]);
        console.log(NotebookData);
        setOpen(false);
    }
    return (
        <div>
            <Button onClick={handleCilckOpen}
                variant="contained"
                color= "warning"
                className={classes.button}
                startIcon={<Add/>}
            >
                Add note
            </Button>


            <Dialog disableBackdropClick disableEscapeKeyDown open={open} fullWidth>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Create a New note:</h4>
                    </CardHeader>
                    <CardBody>
                    <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                value={title}
                                onChange ={e => setTitle(e.target.value)}
                                id="note_title"
                                fullWidth
                                id="standard-textarea"
                                label="Title:"
                                placeholder="Placeholder"
                                multiline
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <TextField
                            value={content}
                            onChange ={e => setContent(e.target.value)}
                            id="note_Content"
                            fullWidth
                            id="standard-textarea"
                            label="Note:"
                            placeholder="Placeholder"
                            multiline
                        />
                    </form>
                    </DialogContent>
                
                    <DialogActions>
                        <Button color="warning" onClick={(e) =>{setOpen(false);}}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} color="warning">
                            Ok
                        </Button>
                    </DialogActions>
                    </CardBody>
                </Card>
            </Dialog>

        </div>
    )
}

export default AddNote
