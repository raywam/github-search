import './styles.scss';

import React from 'react';

import SearchIcon from '../../assets/icons/Search-Icon.svg';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
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
          <input className="Search-Input" type="text" value={this.state.value} onChange={this.handleChange}></input>
          <button>
            <img src={SearchIcon} alt="Icone de Pequisa" />
          </button>
        </div>
      </form>
    )
  }
}

export default InputSearch;