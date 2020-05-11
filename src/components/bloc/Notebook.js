import React from 'react'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter";
import Table from "components/Table/Table.js";
import AddNote from "components/bloc/AddNote"
import { NotebookData } from "variables/general.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";



function Notebook() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Notebook</h4>
                    <p className={classes.cardCategoryWhite}>
                        Write whatever you want here to remember.
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                        tableHeaderColor="warning"
                        tableHead={["ID", " Title ", "Content"]}
                        tableData={NotebookData}
                    />
                </CardBody>
                <CardFooter>
                <AddNote/>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Notebook
