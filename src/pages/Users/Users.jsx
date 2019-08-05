import React, { Component } from 'react'
import './Users.css';

import api from "../../services/api";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const response = await api.get('/users');

    const users = await response.data;

    this.setState({ users });
  }

  render() {
    return (
      <div>
        {
          this.state.users.map( item => {
            return (
              <div className="col-12" >
                {item.name} - {item.email}
              </div>
            );
          })
        }
      </div>
    );
  }
}