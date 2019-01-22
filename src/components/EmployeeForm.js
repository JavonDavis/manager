import React, { Component } from 'react';
import {Card, CardSection, Input} from "./common";
import {Picker, StyleSheet, Text, View} from "react-native";
import {employeeUpdate} from '../actions';
import {connect} from 'react-redux';

class EmployeeForm extends Component {

    updateEmployee({ prop, value }) {
        this.props.employeeUpdate({prop, value})
    }

    renderPicker() {
        const days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];

        return (
            <Picker
                selectedValue={this.props.shift}
                onValueChange={value => this.updateEmployee({prop: "shift", value})} >
                {
                    days.map((day) => {
                        return <Picker.Item key={day} label={day} value={day}/>
                    })
                }
            </Picker>
        );
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label={"Name"}
                        placeholder={"Jane"}
                        value={this.props.name}
                        onChangeText={ value => this.updateEmployee({prop: "name", value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={"Phone"}
                        placeholder={"555-555-5555"}
                        value={this.props.phone}
                        onChangeText={ value => this.updateEmployee({prop: "phone", value})}
                    />
                </CardSection>

                <CardSection
                    style={{flexDirection: 'column'}}
                >
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    {this.renderPicker()}
                </CardSection>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        textAlign: 'center'
    }
});

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
