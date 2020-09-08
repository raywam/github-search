import './styles.scss';

import React from 'react';
import InputSearch from '../../components/InputSearch';
import LogoApp from '../../components/LogoApp';


function Home() {
  return (
    <div className="Home">
      <div>
        <LogoApp></LogoApp>
        <InputSearch></InputSearch>
      </div>
    </div>
  )
}

export default Home;