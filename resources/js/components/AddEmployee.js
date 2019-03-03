import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EmployeeList from "./EmployeeList";


export default class AddEmployee extends Component {
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
        this.addEmployee = this.addEmployee.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    addEmployee() {
        axios.post('/api/employees', {
            employee_id: this.state.employee_id,
            name: this.state.name,
            year: this.state.year,
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
                <button　onClick={this.props.handleChangePage.bind(this, 'list')}>一覧に戻る</button>
                <div>
                    <label>
                        社員番号
                        <input name="employee_id" value={this.state.employee_id} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        名前
                        <input name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        勤続年数
                        <input name="year" value={this.state.year} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        部署
                        <input name="department_id" value={this.state.department_id} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        役職
                        <input name="position_id" value={this.state.position_id} onChange={this.handleChange} />
                    </label>
                </div>

                <button onClick={this.addEmployee}>社員を追加</button>
            </div>
        );
    }
}
