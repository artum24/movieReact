import React from 'react';

import {connect} from 'react-redux';
import {setTab} from '../../redux/movie-reducer';
import { AppStateType } from '../../redux/store';

import {Grid} from '@material-ui/core';

type MapStateToPropsType = {
  tab: string,
}

type MapDispatchToPropsType = {
  setTab: (tab:string) => void
}

type TabssType = MapStateToPropsType & MapDispatchToPropsType

const Tabss:React.FC<TabssType> = ({setTab,tab}) => {
  const tabs = [
    {label:'Популярные', value:'popular'},
    {label:'Сейчас смотрят', value:'now_playing'},
    {label:'Рейтинговое', value:'top_rated'},
  ]

  const handleChange = (value:string) => {
    setTab(value);
  };

  return (
    <Grid container>
      <Grid item xs={8} >
        <ul className='flex ml-8 mt-2'>
          {tabs.map(item => {
            let clas = (item.value === tab)? 'mr-3 text-indigo-700 text-base':'mr-3 text-base';
            return <li key={item.label} className={clas} onClick={() => handleChange(item.value)} style={{cursor:'pointer'}}>{item.label}</li>
          })}
        </ul>
      </Grid>
    </Grid>
  );
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
  tab: state.movie.tab
})

export default connect(mapStateToProps,{setTab})(Tabss);