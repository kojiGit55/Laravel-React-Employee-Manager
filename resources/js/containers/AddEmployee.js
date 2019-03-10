import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from "../components/Input";
import SelectBox from "../components/SelectBox";

export default class AddEmployee extends Component {
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
        this.addEmployee = this.addEmployee.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    addEmployee() {
        axios.post('/api/employees', {
            employee_id: this.state.employee_id,
            name: this.state.name,
            age: this.state.age,
            department_id: this.state.department_id,
            position_id: this.state.position_id,
        }).then(res => {
            alert('社員の追加に成功しました');
        }).catch(err => {
            alert('社員の追加に失敗しました');
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
                <Button　onClick={this.props.handleChangePage.bind(this, 'list')}>一覧に戻る</Button>

                <Button onClick={this.addEmployee}>社員を追加</Button>
            </div>
        );
    }
}
