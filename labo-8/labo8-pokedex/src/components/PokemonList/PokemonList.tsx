import {useState} from "react";
import useFetchPokemonList from "../../hooks/useFetchPokemons";
import {Link} from "react-router-dom";

const PokemonList = () => {
  const {data, isLoading} = useFetchPokemonList(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=1",
  );
  const [search, setSearch] = useState("");

  const filtredData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="app-list-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {filtredData.map((e) => {
        const urlSplit = e.url.split("/");
        const id = urlSplit[urlSplit.length - 2];
        return (
          <Link
            to={`/pokemon/${id}`}
            key={e.name}
            className="app-list-item"
            style={{display: "block", textDecoration: "none", color: "inherit"}}
          >
            {e.name}
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
