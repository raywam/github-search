import './styles.scss';

import React from 'react';

import starIcon from '../../assets/icons/star-icon.svg';

function CardRepository(props) {
  return (
    <div>
      {props.reposData.map((repo, index) => (
        <div className="Card-repository" key={index}>
          <div className="repo-name">
            {repo.name}
          </div>
          <div className="repo-description">
            {repo.description}
          </div>
          <div className="star">
            <img src={starIcon} className="star-icon" alt="Icone de Estrela" />
            <div className="star-count">
              {repo.forks_count}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardRepository;