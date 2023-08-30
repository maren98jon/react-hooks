
import { useCounter,useFetch } from '../hooks';
import { LoadingPokemon, Pokemon } from '../03-examples/components';

export const Layout = () => {

    const {counter, increment, decrement, reset} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const {name, location_area_encounters} = !!data && data;


    return (
        <>
            <h1>Pokemon Encounters</h1>
            <hr />

            
            {
                isLoading 
                ? (
                    <LoadingPokemon />
                ) : (
                    <Pokemon name={name} location={location_area_encounters} />
                )
            }

            <button 
                className='btn btn-primary'
                disabled={isLoading}
                onClick={()=>increment(1)}
            >
                Next pokemon
            </button>


        </>
    )
}
