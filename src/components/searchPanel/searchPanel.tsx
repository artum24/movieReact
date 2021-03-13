import React from 'react';
import {reduxForm, Field,InjectedFormProps} from 'redux-form';
import renderTextField from '../common/Forms/searchPanelForm';
import {setSearchPanel,searchMoviesThunk} from '../../redux/movie-reducer';

import {Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';

const SearchPanel: React.FC = () => {
    const dispatch = useDispatch();
    const Submit = (values:any) => {
        dispatch(setSearchPanel(values.searchPanel));
        dispatch(searchMoviesThunk(values.searchPanel,1));
    }
    return(
        <SearchPanelRedux onSubmit={Submit}/>
    )
}

const SearchPanelForm:React.FC<InjectedFormProps<{}>> = ({handleSubmit}) => {

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
const SearchPanelRedux = reduxForm<{}>({form:'search'})(SearchPanelForm)

export default SearchPanel;
