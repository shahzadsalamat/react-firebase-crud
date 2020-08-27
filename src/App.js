import React, {Component} from 'react';
import CreateUserForm from './components/createUserForm.js';
import UsersList from './components/usersList.js';
import './css/index.css';
import firebaseDB from './js/firebase.js';


class App extends Component {

    addNewUser = (newUserData) => {
   firebaseDB.database().ref().child('user').push(newUserData);
}

  render() {

      return (
          <div className='wrapper'>
              <CreateUserForm addNewUser={this.addNewUser} />
              <UsersList />
          </div>
      );
  }
}

export default App;
