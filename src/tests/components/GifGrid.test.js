import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Prueba';
    
    test('Debe de retornar el componente correctamente', () => {
        
        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifts', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/test1.jpg',
            title: 'Prueba 1'
        },{
            id: '123',
            url: 'https://localhost/test2.jpg',
            title: 'Prueba 2'
        }];

        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
    
});
