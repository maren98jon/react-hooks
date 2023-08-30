
import { useCounter,useFetch } from '../hooks';
import { LoadingPokemon, Pokemon } from './components';

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const {name, location_area_encounters} = !!data && data;


    return (
        <>
            <h1>Pokemon Encounters</h1>
            <hr />

            {/* {
                isLoading 
                ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{location_area_encounters}</p>
                        <footer className='blockquote-footer'>{name}</footer>
                    </blockquote>
                )
            } */}
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
