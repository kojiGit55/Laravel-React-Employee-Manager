import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'list'
        }
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangePage(page) {
        this.setState({ page: page });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.page === 'list' && <EmployeeList handleChangePage={this.handleChangePage} />
                }
                {
                    this.state.page === 'add' && <AddEmployee handleChangePage={this.handleChangePage} />
                }
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}
