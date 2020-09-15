import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import { TextInput, Button, EditIcon } from "evergreen-ui"


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
          
          <TextInput
            name="username"
            placeholder= "Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <EditIcon color="selected" marginRight={16} />
          
          <TextInput
            name="password"
            placeholder="Password"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <Button marginRight={255} appearance="primary" intent="none">Login</Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
