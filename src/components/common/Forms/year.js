import React from 'react';

import {FormControl, InputLabel,Select} from '@material-ui/core';

const Year = ({input,label,meta,children,...custom}) => {
    const { touched, error } = meta;
    
    return (
        <FormControl error={touched && error} className='year'>
            <InputLabel htmlFor="native-simple">Год: </InputLabel>
            <Select native {...input} {...custom}>
                {children}
            </Select>
      </FormControl>
    )
}

export default Year;