import './styles.scss';

import React from 'react';

import SearchIcon from '../../assets/icons/Search-Icon.svg';

function InputSearch() {
  return (
    <div class="Search-Input-Component">
      <input class="Search-Input"></input>
      <button>
        <img src={SearchIcon} alt="Icone de Pequisa" />
      </button>
    </div>
  )
}

export default InputSearch;