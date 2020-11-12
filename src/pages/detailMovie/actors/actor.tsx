import React from 'react';
import { NavLink } from 'react-router-dom';
import { ActorType } from '../../../redux/types';

type ActorrType = {
    actor: ActorType
}

const Actor:React.FC<ActorrType> = ({actor}) => {
    let url = (actor.profile_path === null) ? 'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <NavLink to={`/actor/${actor.id}`} className='mt-8 bg-white rounded overflow-hidden ml-8 shadow-md ml-0 w-48'>
            <img src={url} alt='a'/>
            <p>{actor.character}</p>
            <p>{actor.name}</p>
        </NavLink>
    )
}

export default Actor;