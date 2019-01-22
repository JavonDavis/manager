import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import {Card, CardSection, Button, Confirm} from "./common";

class EmployeeEdit extends Component {
    state = { showModal: false};
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const  {name, phone, shift} = this.props;
        console.log(name, phone, shift);

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress() {
        const {phone, shift} = this.props;
        console.log("Texting");
        console.log(phone);
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        this.props.employeeDelete({uid: this.props.employee.uid});
        this.setState({showModal: false})
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire!
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={() => this.setState({showModal: false})}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(
    mapStateToProps,
    {
        employeeUpdate,
        employeeSave,
        employeeDelete
    }
)(EmployeeEdit);
