import React, { Component } from 'react';
import apiClient from '../utils/apiClient';
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
            position_id: '',
            formErrorMessageMap: new Map()
        };
        this.handleChange = this.handleChange.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validate() {
        const formErrorMessageMap = new Map();
        if (this.state.employee_id === '') {
            formErrorMessageMap.set('employee_id', '社員番号を入力してください')
        }
        if (this.state.name === '') {
            formErrorMessageMap.set('name', '名前を入力してください')
        }
        if (this.state.age === '') {
            formErrorMessageMap.set('age', '年齢を入力してください')
        }
        if (this.state.department_id === '') {
            formErrorMessageMap.set('department_id', '部署を選択してください')
        }
        if (this.state.position_id === '') {
            formErrorMessageMap.set('position_id', '役職を選択してください')
        }

        this.setState({
            formErrorMessageMap: formErrorMessageMap
        });

        return formErrorMessageMap.size === 0;
    }

    addEmployee() {
        if (!this.validate()) return;

        apiClient.post('/api/employees', {
            employee_id: this.state.employee_id,
            name: this.state.name,
            age: this.state.age,
            department_id: this.state.department_id,
            position_id: this.state.position_id,
        }).then(res => {
            this.props.setSnackBarMessage('社員の追加に成功しました')
        }).catch(err => {
            this.props.setSnackBarMessage('社員の追加に失敗しました')
        }).finally(() => {
            this.props.handleChangePage('list');
        })
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Input
                    labelText="社員番号"
                    name="employee_id"
                    inputValue={this.state.employee_id}
                    handleChange={this.handleChange}
                    errorMessage={this.state.formErrorMessageMap.get("employee_id")}
                />
                <Input
                    labelText="名前"　
                    name="name"
                    inputValue={this.state.name}
                    handleChange={this.handleChange}
                    errorMessage={this.state.formErrorMessageMap.get("name")}
                />
                <Input
                    labelText="年齢"　
                    name="age"
                    inputValue={this.state.age}
                    handleChange={this.handleChange}
                    errorMessage={this.state.formErrorMessageMap.get("age")}
                />
                <SelectBox
                    labelText="部署"
                    name="department_id"
                    value={this.state.department_id}
                    handleChange={this.handleChange}
                    optionList={this.props.departmentList}
                    errorMessage={this.state.formErrorMessageMap.get("department_id")}
                />
                <SelectBox
                    labelText="役職"
                    name="position_id"
                    value={this.state.position_id}
                    handleChange={this.handleChange}
                    optionList={this.props.positionList}
                    errorMessage={this.state.formErrorMessageMap.get("position_id")}
                />
                <div style={{
                    margin: '20px auto',
                    width: '80%'
                }}>
                    <Button onClick={this.props.handleChangePage.bind(this, 'list')} variant="contained" color="default" style={{float: 'left'}}>一覧に戻る</Button>
                    <Button onClick={this.addEmployee} variant="contained" color="default" style={{float: 'right'}}>社員を追加</Button>
                </div>
            </div>
        );
    }
}
