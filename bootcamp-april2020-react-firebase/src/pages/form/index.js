import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.selectedUser.id ? props.selectedUser.id : "",
            name: props.selectedUser.name ? props.selectedUser.name : "",
            address: props.selectedUser.address ? props.selectedUser.address : "",
            religion: props.selectedUser.religion ? props.selectedUser.religion : ""
        }
    }

    onSaveHandler = () => {
        const { id, name, address, religion } = this.state
        this.props.saveUser({ id, name, address, religion })
    }

    setValue = e => this.setState({ [e.target.name]: e.target.value })

    componentWillUnmount() {
        this.props.resetUserEdit()
    }

    render() {
        const { id, name, address } = this.state
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="hidden" value={id} />
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.setValue} />
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <input
                                type="text"
                                name="address"
                                value={address}
                                onChange={this.setValue} />
                        </td>
                    </tr>
                    <tr>
                        <td>Religion</td>
                        <td>
                            <select name="religion" value={this.state.religion} onChange={this.setValue}>
                                <option value="">-- Please Select --</option>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button onClick={this.onSaveHandler}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Form;