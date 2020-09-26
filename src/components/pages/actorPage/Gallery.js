import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';

const Gallery = ({images}) =>  {
    const [activeIndex, setActiveIndex] = useState(2)
    let responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 2
        }
    ]; 
    const itemTemplate = (item) =>  {
        return <img src={item.url} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.url} alt={item.alt} style={{ display: 'block', width: '60%' }} />;
    }

    return (
        <div className="cardd">
            <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
            item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
        </div>
    );
}

export default Gallery;