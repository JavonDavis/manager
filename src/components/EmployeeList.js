import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Text, FlatList } from 'react-native';
import { employeesFetch} from "../actions";
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();

    }

    renderRow(employee) {
        console.log("Render Row");
        console.log(employee.item);
        return <EmployeeListItem employee={employee.item} />
    }

    render() {
        console.log("Render");
        console.log(this.props);
        return (
            <FlatList
                renderItem={this.renderRow}
                data={this.props.employees}
                keyExtractor={(item) => item.uid}/>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("EmployeeList mapstatetoprops");
    console.log(state);
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });
    return {
        employees
    };
};

export default connect(mapStateToProps, {employeesFetch} )(EmployeeList);
