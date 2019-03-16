import React, { Component } from 'react';
import apiClient from '../utils/apiClient';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Search from "../components/Search";

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
            page: 0,
            rowsPerPage: 10,
            searchText: ''
        };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
    }

    componentDidMount() {
        apiClient.get('/api/employees').then(res => {
            this.setState({
                employeeList: res.data
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchText !== this.state.searchText) {
            apiClient.get('/api/employees', {
                params: {
                    name: this.state.searchText
                }
            }).then(res => {
                this.setState({
                    employeeList: res.data
                });
            })
        }
    }

    handleClickRow(employeeId) {
        this.props.setSelectedEmployeeId(employeeId);
        this.props.handleChangePage('edit');
    }

    handleChangePage(e, page) {
        this.setState({
            page: page
        });
    }

    handleChangeSearchText(e) {
        this.setState({
            searchText: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Search searchText={this.state.searchText} handleChangeSearchText={this.handleChangeSearchText} />
                    <Button variant="contained" color="default" onClick={this.props.handleChangePage.bind(this, 'add')} >新規追加</Button>
                </div>

                <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>社員番号</TableCell>
                                <TableCell>名前</TableCell>
                                <TableCell>年齢</TableCell>
                                <TableCell>部署</TableCell>
                                <TableCell>役職</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.employeeList
                                    .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                    .map(employee => {
                                    const department = this.props.departmentList.find(dep => dep.id === employee.department_id);
                                    const position = this.props.positionList.find(dep => dep.id === employee.position_id);
                                    return (
                                        <TableRow key={employee.id} onClick={() => this.handleClickRow(employee.employee_id)}>
                                            <TableCell>{employee.employee_id}</TableCell>
                                            <TableCell>{employee.name}</TableCell>
                                            <TableCell>{employee.age}</TableCell>
                                            <TableCell>{department !== undefined && department.name}</TableCell>
                                            <TableCell>{position !== undefined && position.name}</TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        component="div"
                        count={this.state.employeeList.length}
                        rowsPerPage={this.state.rowsPerPage}
                        rowsPerPageOptions={[]}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                        }}
                        onChangePage={this.handleChangePage}
                    />
                </div>
            </div>
        );
    }
}
