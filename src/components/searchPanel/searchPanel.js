import React from 'react';
import {reduxForm, Field} from 'redux-form';
import renderTextField from '../common/Forms/searchPanelForm';
import {Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// import './index.scss';
const SearchPanel = ({setSearchPanel,searchMoviesThunk}) => {
    const Submit = (values) => {
        setSearchPanel(values.searchPanel)
        searchMoviesThunk(values.searchPanel)
    }
    return(
        <SearchPanelRedux onSubmit={Submit}/>
    )
}

const SearchPanelForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className='flex ml-8 sm:w-48 md:w-1/3'>
            <Field 
                name='searchPanel' 
                className='w-48'
                component={renderTextField} 
                type='text'
                placeholder='Пошук фільму'/> 
            <Button type='submit' color='primary'><SearchIcon/></Button>
        </form>
    )
}
const SearchPanelRedux = reduxForm({form:'search'})(SearchPanelForm)

export default SearchPanel;
