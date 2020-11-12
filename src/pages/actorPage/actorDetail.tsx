import React, { useState } from 'react';
import ItemMovie from './itemMovie';
import Gallery from './Gallery';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from '@material-ui/core';
import { ActorType, MovieType,ActorImagesType } from '../../redux/types';

type ActorDetailType = {
    actor: ActorType,
    movie: Array<MovieType>,
    images: Array<ActorImagesType>
}

const ActorDetail:React.FC<ActorDetailType> = ({actor,movie,images}) => {
    const [active,setActive] = useState(false)
    let bio = (actor.biography.length > 500 ) ? actor.biography.slice(0,500)+'...' : actor.biography;

    let imgArr = [];
    for (let i = 0; i < images.length; i++) {
        imgArr.push({url:`https://image.tmdb.org/t/p/w500${images[i].file_path}`, alt:'asas'})
    }
    return (
        <div className='mt-10'>
            <div className='w-4/5 flex ml-auto mr-auto grid md:flex'>
                <div className="sm:w-3/5 max-w-lg">
                    {(imgArr.length < 3) ?<img src={imgArr[0].url} alt='sasa' className='w-auto max-w-48'/> : <Gallery images={imgArr}/>}
                </div>
                <div className='ml-0 md:ml-8'>
                    <h4 className='mt-8 w-full'>{actor.name}</h4>
                    <p className='mt-4'><span className='titleSet'>Дата рождения:</span>{actor.birthday}</p>
                    <p className='mt-2'><span className='titleSet'>Место рождения:</span>{actor.place_of_birth}</p>
                    <div className='mt-2 flex flex-wrap mb-8 '><span className='titleSet'>Знают как:</span>
                        {actor.also_known_as.map(know => {
                            return (
                                <p key={know} className='mr-1'> {know}{', '}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='w-4/5 ml-auto mr-auto mt-0 md:mt-8'>
                <div>
                    {(active) ? actor.biography : bio}
                    <Button onClick={() => setActive(!active)}>{(active) ? 'спрятать': 'дальше'}</Button>
                </div>
            </div>
            <p className='w-100 flex justify-center mb-8'>АКТЕР В</p>
            <ScrollPanel style={{width:'100%', height:'300px'}} >
                <div className='w-4/5 flex flex-wrap justify-between ml-auto mr-auto'>
                    {movie.map(item => <ItemMovie key={item.id} movie={item}/>)}
                </div>
            </ScrollPanel>
        </div>
    )
}

export default ActorDetail;
