import React, {Component} from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key={"root"} hideNavBar >
                    <Stack key={"auth"}>
                        <Scene
                            key={"login"}
                            component={LoginForm}
                            title={"Please Login"}
                            initial
                        />
                    </Stack>
                    <Stack key={"main"}>
                        <Scene
                            rightTitle={"Add"}
                            onRight={() => { Actions.employeeCreate()}}
                            key={"employeeList"}
                            component={EmployeeList}
                            title={"Employees"}
                            initial
                        />
                        <Scene
                            key={"employeeCreate"}
                            component={EmployeeCreate}
                            title={"Create Employee"}
                        />
                    </Stack>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;
