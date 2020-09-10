import './styles.scss';

import React from 'react';

import OrganizationIcon from '../../assets/icons/organization-icon.svg';
import LocationIcon from '../../assets/icons/location-icon.svg';
import StarIcon from '../../assets/icons/star-icon.svg';
import RepositorieIcon from '../../assets/icons/repositorie-icon.svg';
import FollowersIcon from '../../assets/icons/followers-icon.svg';

function CardUser(props) {
  return (
    <div className="Card-user">
      <img className="user-avatar" src={props.userData.avatar_url} alt="Foto do Perfil" />
      <br />
      <a className="user-name" target="_blank" rel="noopener noreferrer" href={props.userData.html_url}>{props.userData.name}</a>
      <div className="user-login">
        {props.userData.login || '-'}
      </div>

      <div className="Details">
        <div className="Git-details">
          <img src={OrganizationIcon} className="Git-details-icon" alt="Icone de Organização" />
          <span className="Git-details-value">{props.userData.company || '-'}</span>
        </div>
        <div className="Git-details">
          <img src={LocationIcon} className="Git-details-icon" alt="Icone de Localização" />
          <span className="Git-details-value">{props.userData.location || '-'}</span>
        </div>
        <div className="Git-details">
          <img src={StarIcon} className="Git-details-icon" alt="Icone de Estrela" />
          <span className="Git-details-value">{props.userData.public_gists || '-'}</span>
        </div>
        <div className="Git-details">
          <img src={RepositorieIcon} className="Git-details-icon" alt="Icone de Repository" />
          <span className="Git-details-value">{props.userData.public_repos || '-'}</span>
        </div>
        <div className="Git-details">
          <img src={FollowersIcon} className="Git-details-icon" alt="Icone de Followers" />
          <span className="Git-details-value">{props.userData.followers || '-'}</span>
        </div>
      </div>
    </div>
  )
}

export default CardUser;