import React from 'react';
import {Field, reduxForm,InjectedFormProps} from 'redux-form';
import GanrasForm from '../common/Forms/ganras';
import {validateNavbar} from '../../utils/validator';
import { Button  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RadioButton from '../common/Forms/sort';
import Year from '../common/Forms/year';
import { GenresType } from '../../redux/types';

type NavbarFormType = {
    genres: Array<GenresType>,
    isFetching: boolean
}

const NavbarForm: React.FC<NavbarFormType & InjectedFormProps<{},NavbarFormType>>  = ({isFetching,handleSubmit,genres}) => {

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='ganra'>
                <Field name='genres' component={GanrasForm} label='ganra'>
                    <option value=''></option>
                    {(genres !== undefined) ? (genres.map((ganra)=> (
                        <option value={ganra.name} key={ganra.id}>
                            {ganra.name}
                        </option>
                    ))) : ('')
                    }
                </Field>
            </div>
            <div className='sort'>
                <Field name='sort' component={RadioButton}/>
            </div>
            <div className='year'>
                <Field name='year' component={Year}>
                    <option value=''></option>
                    <option value='2015'>2015</option>
                    <option value='2016'>2016</option>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                </Field>
            </div>
            <Button disabled={isFetching} variant="contained" color="primary" endIcon={<SearchIcon/>} type='submit' className='submitBtn'>Пошук</Button>
        </form>
    )
}

const NavbarFormRedux = reduxForm<{}, NavbarFormType>({form:'navbar', validate:validateNavbar})(NavbarForm)

export default NavbarFormRedux;