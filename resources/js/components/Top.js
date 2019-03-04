import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'list',
            selectedEmployeeId: ''
        };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.setSelectedEmployeeId = this.setSelectedEmployeeId.bind(this);
    }

    handleChangePage(page) {
        this.setState({ page: page });
    }

    setSelectedEmployeeId(id) {
        this.setState({
            selectedEmployeeId: id
        });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.page === 'list' &&
                    <EmployeeList
                        handleChangePage={this.handleChangePage}
                        setSelectedEmployeeId={this.setSelectedEmployeeId}
                    />
                }
                {
                    this.state.page === 'add' && <AddEmployee handleChangePage={this.handleChangePage} />
                }
                {
                    this.state.page === 'edit' &&
                    <EditEmployee
                        handleChangePage={this.handleChangePage}
                        selectedEmployeeId={this.state.selectedEmployeeId}
                    />
                }
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}
