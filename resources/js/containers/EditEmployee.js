import React, { Component } from 'react';
import apiClient from "../utils/apiClient";
import Input from "../components/Input";
import Button from '@material-ui/core/Button';
import SelectBox from "../components/SelectBox";

export default class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_id: '',
            name: '',
            age: '',
            department_id: '',
            position_id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        apiClient.get(`/api/employees/${this.props.selectedEmployeeId}`)
            .then(res => {
                this.setState({
                    employee_id: res.data.employee_id,
                    name: res.data.name,
                    age: res.data.age,
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
        apiClient.put(`/api/employees/${this.props.selectedEmployeeId}`, {
            employee_id: this.state.employee_id,
            name: this.state.name,
            age: this.state.age,
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

        apiClient.delete(`/api/employees/${this.props.selectedEmployeeId}`)
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
                <Input labelText="社員番号" name="employee_id" inputValue={this.state.employee_id} handleChange={this.handleChange} />
                <Input labelText="名前"　name="name" inputValue={this.state.name} handleChange={this.handleChange} />
                <Input labelText="年齢"　name="age" inputValue={this.state.age} handleChange={this.handleChange} />
                <SelectBox
                    labelText="部署"
                    name="department_id"
                    value={this.state.department_id}
                    handleChange={this.handleChange}
                    optionList={this.props.departmentList}
                />
                <SelectBox
                    labelText="役職"
                    name="position_id"
                    value={this.state.position_id}
                    handleChange={this.handleChange}
                    optionList={this.props.positionList}
                />
                <div style={{
                    marginLeft: 50,
                    width: '80%'
                }}>
                    <Button variant="contained" color="default" onClick={this.props.handleChangePage.bind(this, 'list')} style={{float: 'left'}}>一覧に戻る</Button>

                    <div style={{float: 'right'}}>
                        <Button variant="contained" color="default" onClick={this.deleteEmployee} style={{marginRight: 10}}>社員を削除</Button>
                        <Button variant="contained" color="default" onClick={this.editEmployee}>社員を編集</Button>
                    </div>
                </div>
            </div>
        );
    }
}
