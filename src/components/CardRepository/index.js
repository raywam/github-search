import './styles.scss';

import React from 'react';

import starIcon from '../../assets/icons/star-icon.svg';

function CardRepository(props) {
  return (
    <div>
      {props.reposData.map(repo => (
        <div className="Card-repository" key={repo.id}>
          <a className="repo-name" target="_blank" rel="noopener noreferrer" href={repo.svn_url}>{repo.name}</a>
          <div className="repo-description">
            {repo.description}
          </div>
          <div className="star">
            <img src={starIcon} className="star-icon" alt="Icone de Estrela" />
            <div className="star-count">
              {repo.stargazers_count}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardRepository;