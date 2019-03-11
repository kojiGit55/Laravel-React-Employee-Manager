import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import Header from "../components/Header";
import axios from "axios";
import SnackBarMessage from "../components/SnackBarMessage";

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'list',
            selectedEmployeeId: '',
            departmentList: [],
            positionList: [],
            snackBarMessage: '',
        };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.setSelectedEmployeeId = this.setSelectedEmployeeId.bind(this);
        this.setSnackBarMessage = this.setSnackBarMessage.bind(this);
    }

    componentDidMount() {
        axios.get('/api/departments').then(res => {
            this.setState({
                departmentList: res.data
            });
        });

        axios.get('/api/positions').then(res => {
            this.setState({
                positionList: res.data
            });
        });
    }

    handleChangePage(page) {
        this.setState({ page: page });
    }

    setSelectedEmployeeId(id) {
        this.setState({
            selectedEmployeeId: id
        });
    }

    setSnackBarMessage(message) {
        this.setState({
            snackBarMessage: message
        })
    }

    render() {
        return (
            <div className="container">
                <Header/>
                {
                    this.state.page === 'list' &&
                    <EmployeeList
                        handleChangePage={this.handleChangePage}
                        setSelectedEmployeeId={this.setSelectedEmployeeId}
                        departmentList={this.state.departmentList}
                        positionList={this.state.positionList}
                    />
                }
                {
                    this.state.page === 'add' &&
                    <AddEmployee
                        handleChangePage={this.handleChangePage}
                        departmentList={this.state.departmentList}
                        positionList={this.state.positionList}
                        setSnackBarMessage={this.setSnackBarMessage}
                    />
                }
                {
                    this.state.page === 'edit' &&
                    <EditEmployee
                        handleChangePage={this.handleChangePage}
                        selectedEmployeeId={this.state.selectedEmployeeId}
                        departmentList={this.state.departmentList}
                        positionList={this.state.positionList}
                    />
                }
                <SnackBarMessage
                    open={this.state.snackBarMessage !== ''}
                    message={this.state.snackBarMessage}
                    setSnackBarMessage={this.setSnackBarMessage}
                />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}
