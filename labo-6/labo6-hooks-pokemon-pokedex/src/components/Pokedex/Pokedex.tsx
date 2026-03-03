import {useEffect, useState} from "react";
import {CirclesWithBar} from "react-loader-spinner";
interface IRespone {
  results: IPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}

const Pokedex = ({limit}: {limit: number}) => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState("");

  const filteredPokemonList = pokemonList.filter((e) =>
    e.name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setIsLoading(true);
      const respone = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
      );

      const data: IRespone = await respone.json();

      if (!ignore) {
        setPokemonList(data.results);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [limit]);

  if (isLoading) {
    return (
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  return (
    <>
      {}
      <h1>pokedex</h1>
      <input
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        name="filter"
        id="filter"
      />
      {filteredPokemonList.map((e) => (
        <p key={e.url}>{e.name}</p>
      ))}
    </>
  );
};

export default Pokedex;
