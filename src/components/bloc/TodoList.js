import React, { Component } from 'react'

// @material-ui/icons
import Work from "@material-ui/icons/Work";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Accessibility from "@material-ui/icons/Accessibility"
// core components
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { self_care, work, goals } from "variables/general.js";

export class TodoList extends Component {
    

    render() {
        return (
                <div>
                <CustomTabs
                    title="Tasks:"
                    headerColor="primary"
                    tabs={[
                    {
                        tabName: "Self care",
                        tabIcon: Accessibility,
                        tabContent: (
                        <Tasks
                            checkedIndexes={[0, 3]}
                            tasksIndexes={Object.keys(self_care)}
                            tasks={self_care}
                        />
                        )
                    },
                    {
                        tabName: "Work",
                        tabIcon: Work,
                        tabContent: (
                        <Tasks
                            checkedIndexes={[0]}
                            tasksIndexes={Object.keys(work)}
                            tasks={work}
                        />
                        )
                    },
                    {
                        tabName: "Goals",
                        tabIcon: CheckCircle,
                        tabContent: (
                        <Tasks
                            checkedIndexes={[1]}
                            tasksIndexes={Object.keys(goals)}
                            tasks={goals}
                        />
                        )
                    }
                    ]}
                />
            </div>
        )
    }
}

export default TodoList
