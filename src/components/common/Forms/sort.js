import React from 'react';
import {FormControl,FormControlLabel,Radio,RadioGroup,FormLabel} from '@material-ui/core';

const RadioButton = ({ input, ...rest }) => (
    <FormControl>
    <FormLabel component="legend">Сортировать: </FormLabel>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="popularity.desc" control={<Radio color="primary" />} label="По популярности" />
        <FormControlLabel value="vote_avуrage.desc" control={<Radio color="primary" />} label="По просмотрам" />
      </RadioGroup>
    </FormControl>
  )

export default RadioButton;