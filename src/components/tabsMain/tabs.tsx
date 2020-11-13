import React from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import {setTab} from '../../redux/movie-reducer';
import { AppStateType } from '../../redux/store';

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
      // <div className='w-1/3 ml-8 '>
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
      // </div>
  );
}
let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
  tab: state.movie.tab
})
export default connect(mapStateToProps,{setTab})(Tabss);