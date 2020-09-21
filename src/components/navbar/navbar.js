import React from 'react';

import NavbarFormRedux from './navbarForm';

import './index.scss';

const Navbar = ({genres,setSearchSet,isFetching,setSearchPanel}) => {

    const submitGanra = (value) => {
        let genre = genres.filter(i => (i.name === value.genres)?i.id:null)
        setSearchPanel('')
        setSearchSet(genre[0].id,value.sort,value.year)
    }

    return (
        <div className='navbar'>
            <NavbarFormRedux genres={genres} onSubmit={submitGanra} isFetching={isFetching}/>
        </div>
    )
}

export default Navbar;