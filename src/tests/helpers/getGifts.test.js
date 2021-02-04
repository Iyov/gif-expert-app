import { getGifts } from "../../helpers/getGifts";

describe('Pruebas con getGifts Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifts('Dragon Ball');

        expect( gifs.length ).toBe( 10 );
    });

    test('Debe de traer 0 elementos', async() => {
        
        const gifs = await getGifts('');
        console.log(gifs);

        expect( gifs.length ).toBe( 0 );
    });
    
});
