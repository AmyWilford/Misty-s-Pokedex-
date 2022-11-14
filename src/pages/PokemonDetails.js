import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Import Components
import Loading from '../components/Loading';

// Styled Components
const StyledImage = styled.img `
    height: 350px;
    `;


const PokemonDetails = () => {
        const { id } = useParams();
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(undefined);
        const [pokemon, setPokemon] = useState(undefined);

        useEffect(()=> {
            setTimeout(()=>{
                axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((response)=> {
                    const {data} = response;
                    setPokemon(data);
                    setLoading(false);
                })
                .catch((error)=>{
                    const {status, data } = error.response;
                    setLoading(false);
                    setError(`${status} ${data}`);
                })
                
            }, 1500);
        },[id]);
// Note for Jaya: I populated this array (which we normally left empty in class) with id because it seemed to be the only way to get rid of a warning I was getting that said the hook was missing the dependency of id. I dug around on google and this was recommended as a solve.
        return(
            <div>
                {loading && (
                    <Loading />
                )}
                {!loading && error && (
                    <div className = "text-center">
                    <p className='load text-center'>{error}</p>
                        <Link to="/" className="btn btn-danger">Return to Pokédex</Link>
                    </div>
                )}
                {!loading && !error && pokemon && (
                    <div className="bg-white m-5 p-5">
                        <h1>{pokemon.name}</h1>
                            <div>
                                <StyledImage src={pokemon.sprites.front_default}/>
                            </div>
                        <h2 className="lead pt-5"><u>Pokémon Stats:</u></h2>
                        <table className="text-center table bg-light">
                        <thead>
                            <tr>
                                <th>skill</th>
                                <th>base-stat</th>
                                <th>effort</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats.map((stats, index) =>(
                                <tr key={index}>
                                    <td>{stats.stat.name}</td>
                                    <td>{stats.base_stat}</td>
                                    <td>{stats.effort}</td>                            
                                </tr>
                            ))}
                            </tbody>
                        </table>
                            <Link className="btn btn-danger p-3 mt-5" to="/">back to pokédex </Link>                    
                    </div>
                )}
            </div>
        );
}

export default PokemonDetails;