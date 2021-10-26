import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { Detail, Form, List, Login, Register, Firestore } from '../../pages';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                id: 1,
                name: "Admin",
                address: "Jakarta",
                religion: "Islam"
            }, {
                id: 2,
                name: "User",
                address: "Bogor",
                religion: "Kristen"
            }],
            userEdit: {}
        }
    }

    componentDidMount() {
        // fetch(url)
        //     .then()
        //     .catch(err => console.log(err))
    }

    renderPage = () => {
        // const { currentPage } = this.props
        // const { statusLogin } = this.props
        const { users, userEdit } = this.state

        // if (currentPage === "form")
        //     return <Form selectedUser={userEdit} resetUserEdit={this.clearUserEdit} saveUser={this.updateUsers} />

        // if (currentPage === "login")
        //     return <Login />

        // return <List userList={users} updateUser={this.setUserEdit} />
        return <Switch>
            <Route path="/" exact children={(props) => <List {...props} userList={users} updateUser={this.setUserEdit} />} />
            <Route path="/list" exact children={(props) => <List {...props} userList={users} updateUser={this.setUserEdit} />} />
            <Route path="/form">
                <Form selectedUser={userEdit} resetUserEdit={this.clearUserEdit} saveUser={this.updateUsers} />
            </Route>
            {/* <Route path="/detail/:id" children={<Detail statusLogin={statusLogin} />} /> */}
            <Route path="/detail/:id" children={<Detail />} />
            <Route path="/register" children={(props) => <Register {...props} />} />
            <Route path="/edit/:idUser" children={(props) => <Register {...props} />} />
            <Route path="/login" component={Login} />
            <Route path="/firestore" component={Firestore} />
            <Route children={<h1>Not Found</h1>} />
        </Switch>
    }


    updateUsers = newUser => {
        if (newUser.id === "") {
            const oldUsers = this.state.users
            oldUsers.push({
                id: oldUsers.length ? Math.max(...oldUsers.map(user => user.id)) + 1 : 1,
                name: newUser.name,
                address: newUser.address,
                religion: newUser.religion,
            })
            return this.setState({
                userList: oldUsers
            })
        }

        const oldUsers = this.state.users
        const idxUser = oldUsers.map(user => user.id).indexOf(newUser.id)
        oldUsers.splice(idxUser, 1, newUser)
        this.setState({
            userList: oldUsers
        })
    }

    setUserEdit = (userEdit, cb) => this.setState({ userEdit }, cb)

    clearUserEdit = () => this.setState({ userEdit: {} })

    render() {
        return (
            this.renderPage()
        );
    }
}

export default Body;