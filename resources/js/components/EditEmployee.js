import React, { Component } from 'react';
import axios from 'axios';
import Input from "./Input";
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_id: '',
            name: '',
            year: '',
            department_id: '',
            position_id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/employees/${this.props.selectedEmployeeId}`)
            .then(res => {
                this.setState({
                    employee_id: res.data.employee_id,
                    name: res.data.name,
                    year: res.data.year,
                    department_id: res.data.department_id,
                    position_id: res.data.position_id
                });
            }).catch(err => {

            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    editEmployee() {
        axios.put(`/api/employees/${this.props.selectedEmployeeId}`, {
            employee_id: this.state.employee_id,
            name: this.state.name,
            year: this.state.year,
            department_id: this.state.department_id,
            position_id: this.state.position_id,
        }).then(res => {
            alert('社員の編集に成功しました');
        }).catch(err => {
            alert('社員の編集に失敗しました');
        }).finally(() => {
            this.props.handleChangePage('list');
        })
    }

    deleteEmployee() {
        if (!window.confirm('本当にこの社員を削除しますか？')) return;

        axios.delete(`/api/employees/${this.props.selectedEmployeeId}`)
            .then(res => {
                alert('社員の削除に成功しました');
            }).catch(err => {
                alert('社員の削除に失敗しました');
            }).finally(() => {
                this.props.handleChangePage('list');
            })
    }

    render() {
        return (
            <div>
                <Button　onClick={this.props.handleChangePage.bind(this, 'list')}>一覧に戻る</Button>
                <Input labelText="社員番号" name="employee_id" inputValue={this.state.employee_id} handleChange={this.handleChange} />
                <Input labelText="名前"　name="name" inputValue={this.state.name} handleChange={this.handleChange} />
                <Input labelText="勤続年数"　name="year" inputValue={this.state.year} handleChange={this.handleChange} />
                <InputLabel htmlFor="department_id">部署</InputLabel>
                <Select
                    inputProps={{
                        name: 'department_id',
                        id: 'department_id',
                    }}
                    value={this.state.department_id}
                    onChange={this.handleChange}
                >
                    {
                        this.props.departmentList.map(department => {
                            return <MenuItem value={department.id} key={department.id}>{department.name}</MenuItem>;
                        })
                    }
                </Select>
                <InputLabel htmlFor="department_id">役職</InputLabel>
                <Select
                    inputProps={{
                        name: 'position_id',
                        id: 'position_id',
                    }}
                    value={this.state.position_id}
                    onChange={this.handleChange}
                >
                    {
                        this.props.positionList.map(position => {
                            return <MenuItem value={position.id} key={position.id}>{position.name}</MenuItem>;
                        })
                    }
                </Select>

                <Button onClick={this.deleteEmployee}>社員を削除</Button>
                <Button onClick={this.editEmployee}>社員を編集</Button>
            </div>
        );
    }
}
