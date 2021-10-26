import React, { Component } from 'react';
import { Link } from "react-router-dom"


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    editUser = user => this.props.updateUser(user, () => this.props.history.push("/form"))
    onClickHandler = e => {
        console.log(e);
        console.log(e.target.parentElement.getAttribute("data-id"));
        // document.querySelector("button").closest("div")
    }

    renderUserList = () => {
        const { userList } = this.props
        return (
            userList.map((user, idx) => {
                return (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{user.name}</td>
                        <td>
                            <div data-id={user.id}>
                                <Link to={"/edit/" + user.id + "/ini2"}>
                                    <button>{user.address}</button>
                                </Link>
                            </div>
                        </td>
                        <td>{user.religion}</td>
                        <td>
                            <button onClick={() => this.editUser(user)}>Edit</button>
                            <Link to={"/detail/" + user.id}>
                                <button>Go to Form</button>
                            </Link>
                        </td>
                    </tr >
                )
            })
        )
    }

    componentDidMount() {
        // get detail login
    }

    render() {
        return (
            <table border="1" cellPadding="10px" >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Religion</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* running by trigger */}
                    {/* () => this.renderUserList("asdasdasda") => with param */}
                    {/* this.renderUserList => without param */}

                    {/* running by render */}
                    {this.renderUserList()}
                </tbody>
            </table>
        );
    }
}

export default List;