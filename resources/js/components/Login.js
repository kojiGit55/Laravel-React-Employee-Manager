import React, { Component } from 'react';
import Input from './Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            formErrorMessageMap: new Map()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClickLogin() {
        const apiClient = axios.create();

        apiClient.post('/api/login', {
            name: this.state.userName,
            password: this.state.password
        }).then(res => {
            this.props.login(res.data.access_token);
        }).catch(err => {
            alert('ユーザ名またはパスワードが間違っています。');
            this.props.logout();
        });
    }

    render() {
      return (
          <div style={{ textAlign: 'center' }}>
              <Typography color="default" variant="h3" style={{margin: 50}}>LOGIN</Typography>
              <Input
                  variant="outlined"
                  labelText="ユーザ名"
                  name="userName"
                  inputValue={this.state.userName}
                  handleChange={this.handleChange}
                  errorMessage={this.state.formErrorMessageMap.get("userName")}
              />
              <Input
                  variant="outlined"
                  labelText="パスワード"
                  name="password"
                  inputValue={this.state.password}
                  handleChange={this.handleChange}
                  errorMessage={this.state.formErrorMessageMap.get("password")}
              />

              <Button variant="contained" color="default" style={{width: "80%"}} onClick={this.handleClickLogin}>ログイン</Button>
          </div>
      );
    }
};
