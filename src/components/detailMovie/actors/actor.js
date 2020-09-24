import React from 'react';
import {Card,CardActionArea, Typography} from '@material-ui/core';
import './index.scss';
import { NavLink } from 'react-router-dom';
const Actor = ({actor}) => {
    let url = (actor.profile_path === null) ? 'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    const asd = () => {
        console.log(actor.id)
    }
    return (
        <NavLink to={`/actor/${actor.id}`}>
            <div className='actor'>
                <Card onClick={asd}>
                    <CardActionArea>
                        <img src={url} alt='a'className='media'/>
                        <Typography  variant="subtitle1" >{actor.character}</Typography>
                            <Typography  variant="subtitle1" >{actor.name}</Typography>
                        </CardActionArea>
                    </Card>
            </div>
        </NavLink>
    )
}

export default Actor;