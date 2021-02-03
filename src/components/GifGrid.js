import React from 'react'; //, { useState, useEffect }
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGifts( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                    
                }
            </div>
        </>
    )
}
