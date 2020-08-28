import React, { Component } from 'react';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                 <div className='div-table'>
                <div className='div-table-row'>
                    <div className='div-table-col'>name</div>
                    <div className='div-table-col'>email</div>
                    <div className='div-table-col'>action</div>
                </div>
                
               
            </div>
                {
               Object.values(this.props.users).map( (item)=> {
                    return (
                    <div className='div-table-row'>
                        <div className='div-table-col'>{item.username}</div>
                        <div className='div-table-col'>{item.email}</div>
                        <div className='div-table-col'>edit | delete</div>
                    </div>
                    )
                  })
                }
            </div>
           
        );
    }
}

export default UsersList;