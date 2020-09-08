import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.user = this.props.user
        this.state = {
            editUserData: {
                username: this.user.username,
                email: this.user.email
            }
        }
    }

    handleCancelEdit = () => {
        this.props.handleEditMode(false)
    };

    handleEditUserSubmit = () => {
        const editedUser = this.state.editUserData;
        this.props.editUserSubmit(editedUser);
        console.log('edituser' + JSON.stringify(editedUser));
    };

    handleEditUserChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            editUserData: {
                ...this.state.editUserData,
                [name]: value,
            }
        });
    }

    render() {
        return (
            <div>
                <form style={{ backgroundcolor: "white" }}>
                    <input
                        className='form-input'
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.editUserData.username}
                        onChange={this.handleEditUserChange}
                    />
                    <input
                        className='form-input'
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.editUserData.email}
                        onChange={this.handleEditUserChange}
                    />
                    <input
                        className='form-button bg-blue color-white'
                        type='button'
                        value='submit'
                        onClick={this.handleEditUserSubmit.bind(this)}
                    />
                    <input
                        className='form-button bg-blue color-white'
                        type='button'
                        value='cancel'
                        onClick={this.handleCancelEdit}
                    />
                </form>
            </div>
        )
    }
}

export default EditUser;