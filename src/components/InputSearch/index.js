import './styles.scss';

import React from 'react';

import SearchIcon from '../../assets/icons/Search-Icon.svg';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.sendData(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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