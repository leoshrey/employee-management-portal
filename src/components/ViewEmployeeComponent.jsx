import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ViewEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">
                        View Employee Details
                    </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name:</label>
                            <label className = "badge bg-primary text-wrap" style = {{width: "20rem", marginLeft: "200px"}}>
                                {this.state.employee.firstName}
                            </label>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name:</label>
                            <div className = "badge bg-primary text-wrap" style = {{width: "20rem", marginLeft: "200px"}}>
                                {this.state.employee.lastName}
                            </div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID:</label>
                            <div className = "badge bg-primary text-wrap" style = {{width: "20rem", marginLeft: "200px"}}>
                                {this.state.employee.emailId}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
