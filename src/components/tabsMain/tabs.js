import React from 'react';
import {connect} from 'react-redux';
import {setTab} from '../../redux/movie-reducer';
const Tabss = ({setTab,tab}) => {
  const tabs = [
    {label:'Популярные', value:'popular'},
    {label:'Сейчас смотрят', value:'now_playing'},
    {label:'Рейтинговое', value:'top_rated'},
  ]

  const handleChange = (value) => {
    setTab(value);
  };

  return (
      <div className='w-1/3 ml-8 '>
        <ul className='flex'>
            {tabs.map(item => {
              let clas = (item.value === tab)? 'mr-3 text-indigo-700 text-base':'mr-3 text-base';
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