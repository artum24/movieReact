import React from 'react';
import {Tabs, Tab } from '@material-ui/core';
const TabsItem = ({handleChange,value}) => {

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            centered
        >
            <Tab label='Актеры'></Tab>
            <Tab label='Трейлеры'></Tab>
            <Tab label='Похожие'></Tab>

            {/* похожие */}
        </Tabs>
    )
}

export default TabsItem;