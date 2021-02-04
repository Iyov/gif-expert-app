import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas a componente <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }  /> );
    
    test('Debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un párrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });
    
    test('Debe de tener una imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log( img.prop('src'), img.prop('alt') );

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('Debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const clase = div.prop('className');
        //console.log( clase.includes('animate__fadeIn') );
        
        expect( clase.includes('animate__fadeIn') ).toBe( true );
    });
    
    

});
