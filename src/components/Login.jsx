import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import LoginHeader from "../components/LoginHeader.jsx";
const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      name: "",
      email: "",
      password: ""
    };
  }

  // componentWillMount() {
  //   const authToken = localStorage.getItem(AUTH_TOKEN);
  //   if (authToken) {
  //     this.props.history.push(`/lobby`);
  //   }
  // }

  render() {
    const { login, name, email, password } = this.state;

    return (
      <div>
        <LoginHeader />
        <div className="LoginWrapper">
          <h2>{login ? "LOGIN" : "CREATE A NEW ACCOUNT"}</h2>
          <div className="Login">
            {!login && (
              <div className="Field">
                <p>Username</p>
                <input
                  className="Username"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                  type="text"
                  placeholder="Your name"
                />
              </div>
            )}
            <div className="Field">
              <p>Email</p>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Your email"
              />
            </div>
            <div className="Field">
              <p>Password</p>
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Enter a secure password"
              />
            </div>
          </div>
          <div className="GetIN">
            <Mutation
              mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
              variables={{ email, password, name }}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <div onClick={mutation}>
                  {login ? "Join The Fun" : "create account"}
                </div>
              )}
            </Mutation>
          </div>
        </div>
        <h2
          className="DoYouHasAccount"
          onClick={() => this.setState({ login: !login })}
        >
          {login ? "< I don't have an account" : "already have an account"}
        </h2>
      </div>
    );
  }
  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
    this.props.history.push(`/lobby`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
