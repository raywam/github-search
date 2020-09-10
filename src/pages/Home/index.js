import './styles.scss';

import React from 'react';
import { Redirect } from 'react-router-dom'
import InputSearch from '../../components/InputSearch';
import LogoApp from '../../components/LogoApp';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, username: '' };

    this.getUser = this.getUser.bind(this);
  }

  getUser(username) {
    this.setState({
      redirect: true,
      username: username
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: '/results', search: `?user=${this.state.username}` }} />
    }
  }

  render() {
    return (
      <div className="Home">
        <div>
          <LogoApp></LogoApp>
          {this.renderRedirect()}
          <InputSearch sendData={this.getUser}></InputSearch>
        </div>
      </div>
    )
  }
}

export default Home;