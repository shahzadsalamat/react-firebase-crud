import React, {Component} from 'react';
import CreateUserForm from './components/createUserForm.js';
import UsersList from './components/usersList.js';
import './css/index.css';


class App extends Component {

  render() {

      return (
          <div className='wrapper'>
              <CreateUserForm />
              <UsersList />
          </div>
      );
  }
}

export default App;
