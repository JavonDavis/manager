import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Picker, Text, StyleSheet } from 'react-native';
import {employeeUpdate, employeeCreate} from '../actions';
import {Button, Card, CardSection, Input} from './common';

class EmployeeCreate extends Component {

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
                onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})} >
                {
                    days.map((day) => {
                        return <Picker.Item key={day} label={day} value={day}/>
                    })
                }
            </Picker>
        );
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        console.log("Employee Create");
        console.log(this.props.employee);
        return (
            <Card>
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

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
  pickerLabelStyle: {
      fontSize: 18,
      textAlign: 'center'
  }
});

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
