import React from 'react';

import NavbarFormRedux from './navbarForm';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './index.scss';
import { GenresType } from '../../redux/types';

const useStyles = makeStyles({
    list: {
      width: 375,
    },
    fullList: {
      width: 'auto',
    },
  });

type TemporaryDrawerType = {
  genres: Array<GenresType>,
  isFetching: boolean
  setSearchPanel: (str:string) => void,
  setSearchSet: (genre:number,sort:string,year:number) => void,
}

export const TemporaryDrawer: React.FC<TemporaryDrawerType> = ({isFetching,genres,setSearchSet,setSearchPanel}) =>{
    const classes = useStyles();
    const [state, setState] = React.useState(false);

  const submitGanra = (value:any) => {
    setState(false)

    let genre = genres.filter(i => (i.name === value.genres)?i.id:null)
    setSearchPanel('')
    setSearchSet(genre[0].id,value.sort,value.year)
  }
  return (
    <>
      <div className='mobileIcon'>
          <MenuIcon onClick={() => setState(true)} className='button' style={{color: '#3b3b3b'}}>left</MenuIcon>
            <Drawer anchor={'right'} open={state} onClose={() => setState(false)}>
              <div
              className={clsx(classes.list)}
              role="presentation"
              onKeyDown={() => setState(false)}
              >
              <div className='mt-2 ml-2'>
                <CloseIcon onClick={() => setState(false)}/>
              </div>
              <div className='ml-20 mt-20'>
                <NavbarFormRedux genres={genres} onSubmit={submitGanra} isFetching={isFetching}/>
              </div>
              </div>
            </Drawer>
      </div>
      <div className='navbar ml-20'>
        <NavbarFormRedux genres={genres} onSubmit={submitGanra} isFetching={isFetching}/>
      </div>
    </>

  );
}