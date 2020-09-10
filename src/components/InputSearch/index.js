import './styles.scss';

import React from 'react';

import SearchIcon from '../../assets/icons/Search-Icon.svg';
import { Redirect, Link } from 'react-router-dom';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null, redirect: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    if (this.state.value) {
      if (this.props.sendData) {
        this.props.sendData(this.state.value);
      }

      this.setState({ redirect: true });
    }
    event.preventDefault();
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to={{ pathname: '/results', search: `?user=${this.state.value}` }} />
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderRedirect()}
        <div className="Search-Input-Component">
          <input className="Search-Input" type="text" maxLength="50" value={this.state.value !== null ? this.state.value : this.props.username} onChange={this.handleChange.bind(this)}></input>
          <button>
            <img src={SearchIcon} alt="Icone de Pequisa" />
          </button>
        </div>
        {this.state.username}
      </form>
    )
  }
}

export default InputSearch;