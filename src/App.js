import React, { Component } from 'react';
import CreateUserForm from './components/createUserForm.js';
import UsersList from './components/usersList.js';
import './css/index.css';
import firebaseDB from './js/firebase.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getUsers: [],
        }
    }

    componentDidMount = () => {
        firebaseDB.database().ref().child('user').on('value', (snap) => {
            const previousUserData = [];
            snap.forEach((item) => {
                previousUserData.push({
                    id: item.key,
                    email: item.val().email,
                    username: item.val().username,
                });
            })
            this.setState({
                ...this.state.getUsers,
                getUsers: previousUserData
            });
        });
    }

    editUserSubmit = (editedUserData, userId) => {
        firebaseDB.database().ref().child('user/' + userId).set(editedUserData)

        console.log('dwhich user is being edited' + JSON.stringify(editedUserData.firstName));
        console.log('dwhich user id' + JSON.stringify(userId));
    };

    deleteUser = (deletedUser) => {
        firebaseDB.database().ref().child('user/' + deletedUser.id).remove();
    }

    addNewUser = (newUserData) => {
        firebaseDB.database().ref().child('user').push(newUserData);
    }

    render() {
        return (
            <div className='wrapper'>
                <CreateUserForm addNewUser={this.addNewUser} />
                <div>
                    <div className='div-table'>
                        <div className='div-table-row'>
                            <div className='div-table-col'>name</div>
                            <div className='div-table-col'>email</div>
                            <div className='div-table-col'>action</div>
                        </div>
                    </div>
                    {this.state.getUsers.map((item) => {
                        return (
                            <div key={item.id}>
                                <UsersList user={item} deleteUser={this.deleteUser} editUserSubmit={this.editUserSubmit} />
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        );
    }
}

export default App;
