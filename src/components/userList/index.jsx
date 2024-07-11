// 3. **Lifecycle Methods**

import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ users, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;

