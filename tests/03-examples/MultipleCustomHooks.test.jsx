import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch, useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    });
    
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Pokemon Encounters'));

        const nextButton = screen.getByRole('button',{name: 'Next pokemon'});

        expect(nextButton.disabled).toBeTruthy();
     });

    test('debe de mostrar una info de pokemon', () => {

        useFetch.mockReturnValue({
            data: {name: 'Maren',location_area_encounters: 'Algorta'},
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        
        expect(screen.getByText('Algorta')).toBeTruthy();
        expect(screen.getByText('Maren')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name: 'Next pokemon'});
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data: {name: 'Maren',location_area_encounters: 'Algorta'},
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button',{name: 'Next pokemon'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })

 });