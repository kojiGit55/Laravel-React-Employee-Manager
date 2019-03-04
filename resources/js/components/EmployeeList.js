import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: []
        }
    }


    componentDidMount() {
        axios.get('/api/employees').then(res => {
            this.setState({
                employeeList: res.data
            });
        });
    }

    handleClickRow(employeeId) {
        this.props.setSelectedEmployeeId(employeeId);
        this.props.handleChangePage('edit');
    }

    render() {
        return (
            <div>
                社員管理
                <button onClick={this.props.handleChangePage.bind(this, 'add')}>新規追加</button>

                <table>
                    <thead>
                        <tr>
                            <td>社員番号</td>
                            <td>名前</td>
                            <td>勤続年数</td>
                            <td>部署</td>
                            <td>役職</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeeList.map(employee => {
                                return (
                                    <tr key={employee.id} onClick={() => this.handleClickRow(employee.employee_id)}>
                                        <td>{employee.employee_id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.year}</td>
                                        <td>{employee.department_id}</td>
                                        <td>{employee.position_id}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
