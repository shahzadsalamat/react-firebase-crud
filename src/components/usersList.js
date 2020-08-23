import React, { Component } from 'react';

class UsersList extends Component {

    render() {

        return (
            <div className='div-table'>
                <div className='div-table-row'>
                    <div className='div-table-col'>name</div>
                    <div className='div-table-col'>email</div>
                    <div className='div-table-col'>action</div>
                </div>
                <div className='div-table-row'>
                    <div className='div-table-col'>name</div>
                    <div className='div-table-col'>email</div>
                    <div className='div-table-col'>action</div>
                </div>
            </div>
        );
    }
}

export default UsersList;