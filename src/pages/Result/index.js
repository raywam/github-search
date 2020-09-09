import './styles.scss';

import axios from 'axios';
import React, { Component } from 'react';

import CardRepository from '../../components/CardRepository';
import CardUser from '../../components/CardUser';
import InputSearch from '../../components/InputSearch';
import LogoApp from '../../components/LogoApp';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, repos: null, showUser: false };

    this.getUser = this.getUser.bind(this);

    if (this.props.location && this.props.location.search) {
      this.getLocationSearch(this.props.location.search);
    }
  }

  getUser(username) {
    Promise.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos`)
    ]).then(([userResponse, reposResponse]) => {
      this.setState({
        user: userResponse.data,
        repos: this.orderByStargazers(reposResponse.data),
        showUser: true
      });
    }).catch(error => this.setState({ user: '', repos: [], showUser: false }));
  }

  orderByStargazers(repos) {
    return repos.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1)
  }

  getLocationSearch(locationSearch) {
    if (locationSearch) {
      const username = locationSearch.split('=')[1];

      if (username) {
        this.getUser(username);
        return username;
      }
    }

    return '';
  }

  render() {
    return (
      <div className="Results-page">
        <div className="grid-item">
          <LogoApp width="200px" textAlign="left" fontSize="40px"></LogoApp>
        </div>
        <div>
          <InputSearch sendData={this.getUser}></InputSearch>
        </div>
        {
          this.state.user
            ? <div className="grid-item">
              <CardUser userData={this.state.user}></CardUser>
            </div>
            : <span></span>
        }
        {
          this.state.showUser && this.state.repos.length > 0
            ? <div className="grid-item">
              <CardRepository reposData={this.state.repos}></CardRepository>
            </div>
            : <span className="Not-found-message">{'User not found :('}</span>
        }
      </div>
    )
  }
}