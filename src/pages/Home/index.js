import './styles.scss';

import React from 'react';
import InputSearch from '../../components/InputSearch';
import LogoApp from '../../components/LogoApp';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <LogoApp></LogoApp>
        <InputSearch width="55%" username={''}></InputSearch>
      </div>
    )
  }
}

export default Home;