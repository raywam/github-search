import './styles.scss';

import React from 'react';

import SearchIcon from '../../assets/icons/Search-Icon.svg';
import { Redirect } from 'react-router-dom';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', redirect: false };

    this.inputStyle = {
      width: props.width
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
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
      <form className="form-search" style={this.inputStyle} onSubmit={this.handleSubmit.bind(this)}>
        {this.renderRedirect()}
        <div className="Search-Input-Component">
          <input className="Search-Input" type="text" maxLength="50" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
          <button>
            <img src={SearchIcon} alt="Icone de Pequisa" />
          </button>
        </div>
      </form>
    )
  }
}

export default InputSearch;