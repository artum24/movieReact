import React from 'react';

import NavbarFormRedux from './navbarForm';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './index.scss';

const useStyles = makeStyles({
    list: {
      width: 375,
    },
    fullList: {
      width: 'auto',
    },
  });

export const TemporaryDrawer = ({genres,setSearchSet,isFetching,setSearchPanel}) =>{
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

  const toggleDrawer = (open) => () => {
    setState({ ...state, 'right': open });
  };
  const submitGanra = (value) => {
        let genre = genres.filter(i => (i.name === value.genres)?i.id:null)
        setSearchPanel('')
        setSearchSet(genre[0].id,value.sort,value.year)
        setState(true)
    }
  return (
    <>
      <div className='mobileIcon'>
          <MenuIcon onClick={toggleDrawer(true)} className='button' style={{color: '#3b3b3b'}}>left</MenuIcon>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer( false)}>
              <div
              className={clsx(classes.list)}
              role="presentation"
              onKeyDown={toggleDrawer(false)}
              >
              <CloseIcon onClick={toggleDrawer(false)}/>
              <NavbarFormRedux genres={genres} onSubmit={submitGanra} isFetching={isFetching}/>
              </div>
            </Drawer>
      </div>
      <div className='navbar'>
        <NavbarFormRedux genres={genres} onSubmit={submitGanra} isFetching={isFetching}/>
      </div>
    </>

  );
}