import React from 'react'; //, { useState, useEffect }
import { useFetchGifts } from '../hooks/useFetchGifts';
//import { GifGridItem } from './GifGridItem';
//import { getGifts } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {
    
    //const [images, setImages] = useState([]);
    const { data, loading } = useFetchGifts( category );

    console.log(data, loading)

    return (
        <>
            <h3>{ category }</h3>

            { loading ? 'Cargando...' : 'Data cargada' }

            {/*<div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                    
                }
            </div>*/}
        </>
    )
}
