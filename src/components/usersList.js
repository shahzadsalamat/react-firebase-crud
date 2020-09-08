import React, { Component } from 'react';
import EditUser from './editUser.js';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    handleDeleteUser = (deletedUser) => {
        this.props.deleteUser(deletedUser);
    };

    handleEditUser = () => {
        this.setState({
            editMode: true
        });
    };

    handleEditMode = (value) => {
        this.setState({
            editMode: value
        });
    };

    editUserSubmit = (editedUserData) => {
        this.props.editUserSubmit(editedUserData);
        this.setState({
            editMode: false
        });
    };

    render() {
        return (
            this.state.editMode ? (
                <div>
                    <EditUser handleEditMode={this.handleEditMode} user={this.props.user} editUserSubmit={this.editUserSubmit} />
                </div>
            )
                :
                (
                    <div key={this.props.user.id}>
                        <div className='div-table-row'>
                            <div className='div-table-col'>{this.props.user.username}</div>
                            <div className='div-table-col'>{this.props.user.email}</div>

                            <div className='div-table-col'>
                                <input
                                    className='button'
                                    type='button'
                                    value='Delete'
                                    onClick={this.handleDeleteUser.bind(this, this.props.user)}
                                >
                                </input>
                                <input
                                    className='button'
                                    type='button'
                                    value='Edit'
                                    onClick={this.handleEditUser.bind(this, this.props.user)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                )
        );
    }
}

export default UsersList;