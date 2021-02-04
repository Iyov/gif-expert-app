import { useFetchGifts } from "../../hooks/useFetchGifts";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifts', () => {
    
    test('Debe de retornar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifts( 'One Punch' ) )        
        const { data, loading } = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });
    
});
