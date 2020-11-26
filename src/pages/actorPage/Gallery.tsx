import React, { useState } from 'react';

import { Galleria } from 'primereact/galleria';

type ImgType = {
    alt: string,
    url: string
}

type GalleryType = {
    images: Array<ImgType>
}

const Gallery:React.FC<GalleryType> = ({images}) =>  {
    const [activeIndex, setActiveIndex] = useState(2)
    
    let responsiveOptions = [
        {
            breakpoint: '1824px',
            numVisible: 3
        },
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

    const itemTemplate = (item:any) =>  {
        return <img src={item.url} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item:any) => {
        return <img src={item.url} alt={item.alt} style={{ display: 'block', width: '60%' }} />;
    }

    return (
        <Galleria className="w-auto min-w-full" value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
        item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
    );
}

export default Gallery;