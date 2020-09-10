import './styles.scss';

import React from 'react';
import InputSearch from '../../components/InputSearch';
import LogoApp from '../../components/LogoApp';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div>
          <LogoApp></LogoApp>
          <InputSearch></InputSearch>
        </div>
      </div>
    )
  }
}

export default Home;