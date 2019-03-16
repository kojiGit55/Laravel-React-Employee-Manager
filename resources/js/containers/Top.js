import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from '../components/Login';
import apiClient from "../utils/apiClient";

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
        this.login = this.login.bind(this);
        this.checkLoggedIn = this.checkLoggedIn.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.checkLoggedIn();
    }

    setIsLoggedIn(isLoggedIn) {
        this.setState({
            isLoggedIn: isLoggedIn
        })
    }

    login(token) {
        window.localStorage.setItem('accessToken', token);
        this.setIsLoggedIn(true);
    }

    checkLoggedIn() {
        apiClient.get('/api/me')
            .then(res => {
                this.setIsLoggedIn(true);
            }).catch(err => {
            alert('ログインに失敗しました。');
        });
    }

    logout() {
        this.setIsLoggedIn(false);
        window.localStorage.removeItem('accessToken');
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        <Home
                            logout={this.logout}
                        /> :
                        <Login
                            login={this.login}
                            logout={this.logout}
                        />
                }
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}
