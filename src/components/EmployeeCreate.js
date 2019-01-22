import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Picker, Text, StyleSheet } from 'react-native';
import {employeeUpdate, employeeCreate} from '../actions';
import {Button, Card, CardSection, Input} from './common';
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        console.log("Employee Create");
        console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;
    return {name, phone, shift };
}


export default connect(
    mapStateToProps,
    {
        employeeUpdate,
        employeeCreate
    }
)(EmployeeCreate);
