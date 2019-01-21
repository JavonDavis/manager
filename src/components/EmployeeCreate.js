import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import {Button, Card, CardSection, Input} from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={"Name"}
                        placeholder={"Jane"}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={"Phone"}
                        placeholder={"555-555-5555"}
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(EmployeeCreate);
