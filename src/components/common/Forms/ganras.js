import React from 'react';

import {FormControl, InputLabel,Select} from '@material-ui/core';

const GanrasForm = ({input,label,meta,children,...custom}) => {
    const { touched, error } = meta;
    
    return (
        <FormControl error={touched && error}>
            <InputLabel htmlFor="native-simple">Жанр</InputLabel>
            <Select native {...input} {...custom}>
                {children}
            </Select>
      </FormControl>
    )
}

export default GanrasForm;