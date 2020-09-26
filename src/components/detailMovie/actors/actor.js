import React from 'react';
import {Card,CardActionArea} from '@material-ui/core';
import './index.scss';
import { NavLink } from 'react-router-dom';
const Actor = ({actor}) => {
    let url = (actor.profile_path === null) ? 'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <NavLink to={`/actor/${actor.id}`}>
            <div className='actor'>
                <Card>
                    <CardActionArea>
                        <img src={url} alt='a'className='media'/>
                        <p>{actor.character}</p>
                            <p>{actor.name}</p>
                        </CardActionArea>
                    </Card>
            </div>
        </NavLink>
    )
}

export default Actor;