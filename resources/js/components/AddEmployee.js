import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EmployeeList from "./EmployeeList";


export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <button　onClick={this.props.handleChangePage.bind(this, 'list')}>一覧に戻る</button>
                <label>
                    名前
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
            </div>
        );
    }
}
