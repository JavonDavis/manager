import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from "./common";
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser} from "../actions";

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({email, password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size={"small"}/>
            );
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={"Email"}
                        placeholder={"email@gmail.com"}
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label={"Password"}
                        placeholder={"password"}
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {

    const { email, password, error, loading } = state.auth;
    return {
        email,
        password,
        error,
        loading
    };
};

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

export default connect(
    mapStateToProps, {
        emailChanged,
        passwordChanged,
        loginUser
    })(LoginForm);
