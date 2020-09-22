import React from 'react';
import {reduxForm, Field} from 'redux-form';
import renderTextField from '../common/Forms/searchPanelForm';
import {Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchPanel = ({setSearchPanel,searchMoviesThunk}) => {
    const Submit = (values) => {
        console.log(values)
        setSearchPanel(values.searchPanel)
        searchMoviesThunk(values.searchPanel)
    }
    return(
        <div className='searchPanel'>
            <SearchPanelRedux onSubmit={Submit}/>
        </div>
    )
}

const SearchPanelForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field 
                name='searchPanel' 
                component={renderTextField} 
                type='text'
                placeholder='Пошук фільму'/> 
            <Button type='submit' color='primary'><SearchIcon/></Button>
        </form>
    )
}
const SearchPanelRedux = reduxForm({form:'search'})(SearchPanelForm)

export default SearchPanel;
