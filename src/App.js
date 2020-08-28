import React, { Component } from 'react';
import CreateUserForm from './components/createUserForm.js';
import UsersList from './components/usersList.js';
import './css/index.css';
import firebaseDB from './js/firebase.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getUsers: {
                email: '',
                username: ''
            }
        }

    }

    componentDidMount = () => {
        
        const previousUserData = [];
        firebaseDB.database().ref().child('user').on('value', (snap) => {
            
            snap.forEach((item) => {
                
                previousUserData.push({
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

    addNewUser = (newUserData) => {
        firebaseDB.database().ref().child('user').push(newUserData);
    }

    render() {

        return (
            <div className='wrapper'>
                <CreateUserForm addNewUser={this.addNewUser} />
                <UsersList users={this.state.getUsers}/>
            </div>
        );
    }
}

export default App;
