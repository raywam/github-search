import './styles.scss';

import React from 'react';


function CardUser(props) {
  return (
    <div className="Card-user">
      <img className="user-avatar" src={props.userData.avatar_url} alt="Foto do Perfil" />
      <div className="user-name">
        {props.userData.name}
      </div>
      <div className="user-login">
        {props.userData.login}
      </div>

      <div className="Details">
        <div className="Git-details">
          {props.userData.company}
        </div>
        <div className="Git-details">
          {props.userData.location}
        </div>
        <div className="Git-details">
          {props.userData.public_gists}
        </div>
        <div className="Git-details">
          {props.userData.public_repos}
        </div>
        <div className="Git-details">
          {props.userData.followers}
        </div>
      </div>
    </div>
  )
}

export default CardUser;