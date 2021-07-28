import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    viewEmployee(id){
        this.props.history.push(`view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">
                    Employees List
                </h2>
                <div className = "row">
                    <button className = "btn btn-light" style =  {{width: "10%", marginBottom: "1rem"}} onClick = {this.addEmployee}> Add Employee </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Employee First Name
                                </th>
                                <th>
                                    Employee Last Name
                                </th>
                                <th>
                                    Employee Email Id
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>
                                            {employee.firstName}
                                        </td>
                                        <td>
                                            {employee.lastName}
                                        </td>
                                        <td>
                                            {employee.emailId}
                                        </td>
                                        <td>
                                            <button onClick = {() => this.editEmployee(employee.id)} className = "btn btn-outline-dark">Update</button>
                                            <button onClick = {() => this.deleteEmployee(employee.id)} className = "btn btn-outline-danger" style = {{marginLeft: "10px"}}>Delete</button>
                                            <button onClick = {() => this.viewEmployee(employee.id)} className = "btn btn-outline-info" style = {{marginLeft: "10px"}}>View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
