import React from 'react';
import {connect} from 'react-redux';
import {setTab} from '../../redux/movie-reducer';
import './index.scss';
const Tabss = ({setTab,tab}) => {
  const tabs = [
    {label:'Популярные', value:'popular'},
    {label:'Сейчас смотрят', value:'now_playing'},
    {label:'Рейтинговое', value:'top_rated'},
  ]

  const handleChange = (value) => {
    console.log(value)
    setTab(value);
  };

  return (
      <div className='headerTabs'>
        <ul className='mainTabs'>
            {tabs.map(item => {
              let clas = (item.value === tab)? 'mainTabsItem active':'mainTabsItem';
              return <li key={item.label} className={clas} onClick={() => handleChange(item.value)}>{item.label}</li>
            })}
        </ul>
      </div>
  );
}
let mapStateToProps = (state) => ({
  tab: state.movie.tab
})
export default connect(mapStateToProps,{setTab})(Tabss);