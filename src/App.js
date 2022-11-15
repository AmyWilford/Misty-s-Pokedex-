import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./App.css";

// import components
import Header from "./components/Header";
import Pokemon from "./pages/Pokemon";
import PokemonDetails from "./pages/PokemonDetails";
import Footer from "./components/Footer";

function App() {
  const match = useRouteMatch();

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Switch>
        <Route exact path={`${match.url}pokemon/:id`}>
          <PokemonDetails />
        </Route>
        <Route exact path="/Mistys-Pokedex">
          <Pokemon />
        </Route>
      </Switch>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
