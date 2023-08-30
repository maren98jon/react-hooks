import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en <LoginPage/>', () => {

    const user = {
        id: 1,
        name: 'Maren'
    }
    
    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

     });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

    }) ;
    
    test('debe de mostrar el componente con el usuario', () => { 

        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{user: null,setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@gmail.com", "id": 123, "name": "Juan"});

     });

 });