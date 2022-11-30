import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// Import Components
import Loading from "../components/Loading";

// Styled Components
const StyledImage = styled.img`
  max-width: 300px;
  width: 40%;
`;

const PokemonDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          const { data } = response;
          setPokemon(data);
          setLoading(false);
        })
        .catch((error) => {
          const { status, data } = error.response;
          setLoading(false);
          setError(`${status} ${data}`);
        });
    }, 1500);
  }, [id]);
  return (
    <div>
      {loading && <Loading />}
      {!loading && error && (
        <div className="text-center">
          <div className="row justify-center-start">
            <Link to="/" className="btn btn-danger">
              Return to Pokédex
            </Link>
          </div>
          <p className="load text-center">{error}</p>
        </div>
      )}
      {!loading && !error && pokemon && (
        <div className="bg-white m-2 p-4">
          <Link className="btn btn-danger py-2 mb-3" to="/">
            back to pokédex
          </Link>
          <h4 className="display-5">{pokemon.name}</h4>
          <div>
            <StyledImage src={pokemon.sprites.front_default} />
          </div>

          <h2 className="lead pt-3">
            <u>Pokémon Stats:</u>
          </h2>
          <table className="text-center table bg-light">
            <thead>
              <tr>
                <th>skill</th>
                <th>base-stat</th>
                <th>effort</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map((stats, index) => (
                <tr key={index}>
                  <td>{stats.stat.name}</td>
                  <td>{stats.base_stat}</td>
                  <td>{stats.effort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
