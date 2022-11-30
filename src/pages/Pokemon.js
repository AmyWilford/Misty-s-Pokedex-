import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import components
import Loading from "../components/Loading";

// import images
import pokeball from "../assets/pokeball-blue.png";

// styled-components
const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledPokemon = styled.div`
  border: 7px solid #3c5aa6;
  background-color: #2a75bb;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 10px;
  font-size: 25px;
  height: 200px;
  width: 200px;
  border-radius: 5px;
  padding: 10px;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  height: 50px;
  margin: 20px;
`;

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => {
          const { data } = response;
          setPokemon(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);

          const { status, data } = error.response;
          setError(`${status} ${data}`);

          setLoading(false);
        });
    }, 1500);
  }, []);
  return (
    <div>
      {loading && <Loading />}

      {!loading && error && <p className="load text-center">{error}</p>}
      {!loading && !error && pokemon.length > 0 && (
        <div className="container text-center justify-content-center">
          <StyledGrid>
            {pokemon.map((poke, index) => (
              <div key={index}>
                <Link className="text-white" to={`pokemon/${index + 1}`}>
                  <StyledPokemon>
                    <StyledImage src={pokeball} />
                    <p>{poke.name}</p>
                  </StyledPokemon>
                </Link>
              </div>
            ))}
          </StyledGrid>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
