import React, { Component } from 'react';

class CreateUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: ''
            }
        }
        this.intialState = this.state
    }

    handleUserFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value,
            }
        });
    }

    handleCreateUserSubmit = (newUserData) => {
        this.props.addNewUser(newUserData);
        this.setState(this.intialState);
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='enter your Name'
                        value={this.state.user.username}
                        onChange={this.handleUserFormChange}
                    ></input>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        value={this.state.user.email}
                        placeholder='enter your email'
                        onChange={this.handleUserFormChange}
                    ></input>
                    <input
                        className='form-button bg-green'
                        type='button'
                        value='Add New User'
                        onClick={this.handleCreateUserSubmit.bind(this, this.state.user)}
                    ></input>

                </form>
            </div>
        );
    }
}

export default CreateUserForm;