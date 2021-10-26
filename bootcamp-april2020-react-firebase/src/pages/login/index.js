import React, { Component } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { doLogin as DoLogin } from "../../actions";
import { FirebaseContext } from "../../config/firebase";

class LoginFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  onClickHandler = () => {
    // if (this.state.email === "admin") {
    //     // cek ke api
    //     return this.props.doLogin(this.state.email)
    // }

    // alert("Invalid email")
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.props.firebase
        .loginFirebaseUser({ email, password })
        .then((res) => this.props.doLogin(this.state.email))
        .catch((err) => alert(err.message));
    } else alert("Field ada yang kosong");
  };

  onRegisterHandler = () => {
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.props.firebase
        .createFirebaseUser({ email, password })
        .then((res) => console.log("res:", res))
        .catch((err) => alert(err.message));
    } else alert("Field ada yang kosong");
  };

  checkFirebase = () => {
    return (a) => {
      console.log(a);
      return <h1>firebase connected</h1>;
    };
  };

  render() {
    console.log(this.props);
    if (this.props.isLogedIn) return <Redirect to="/list" />;

    return (
      <>
        <Card>
          <Card.Body>
            <Form>
              {/* <FirebaseContext.Consumer>
                    {this.checkFirebase()}
                </FirebaseContext.Consumer> */}
              <h1>Ini login</h1>
              <div>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.setValue}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.setValue}
                />
              </div>
              <Button onClick={this.onClickHandler}>Log In</Button>
              <Button onClick={this.onRegisterHandler}>Register</Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <LoginFirebase {...this.props} firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogedIn: state.Auth.statusLogin,
});

const mapDispatchToProps = (dispatch) => ({
  doLogin: (user) => dispatch(DoLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
