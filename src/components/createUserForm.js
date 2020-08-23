import React, { Component } from 'react';

class CreateUserForm extends Component {

    render() {

        return (
            <div>
                <form>
                    <input
                        className='form-input'
                        type='text'
                        value=''
                        placeholder='enter your firstName'
                    ></input>
                    <input
                        className='form-input'
                        type='email'
                        value=''
                        placeholder='enter your email'
                    ></input>
                    <input
                        className='form-button bg-green'
                        type='button'
                        value='Add New User'
                    ></input>

                </form>
            </div>
        );
    }
}

export default CreateUserForm;