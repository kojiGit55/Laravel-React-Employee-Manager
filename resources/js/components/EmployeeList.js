import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
                <Button color="primary" onClick={this.props.handleChangePage.bind(this, 'add')}>新規追加</Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>社員番号</TableCell>
                            <TableCell>名前</TableCell>
                            <TableCell>勤続年数</TableCell>
                            <TableCell>部署</TableCell>
                            <TableCell>役職</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.employeeList.map(employee => {
                                return (
                                    <TableRow key={employee.id} onClick={() => this.handleClickRow(employee.employee_id)}>
                                        <TableCell>{employee.employee_id}</TableCell>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.year}</TableCell>
                                        <TableCell>{employee.department_id}</TableCell>
                                        <TableCell>{employee.position_id}</TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}
