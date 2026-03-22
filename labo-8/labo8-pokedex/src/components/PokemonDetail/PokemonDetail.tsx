import {Link, useParams} from "react-router-dom";
import useFetchPokemonDetail from "../../hooks/useFetchPokemonDeatil";

const PokemonDetail = () => {
  const {id} = useParams();
  const {data, isLoading} = useFetchPokemonDetail(id ?? "");

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {data === null ? (
        <>
          <div className="pokemon-detail">
            <p>Pokemon niet gevonden!</p>
          </div>
          <div>
            <Link
              style={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
              to={"/pokemon"}
            >
              Back
            </Link>
          </div>
        </>
      ) : (
        <div className="pokemon-detail">
          <div className="pokemon-data-container">
            <p>Name: {data.name}</p>
            <p>Weight: {data.weight}</p>
            <p>Height: {data.height}</p>
            <img src={`${data.sprites.front_default}`} alt={data.name} />
          </div>
          <div>
            <Link
              style={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
              to={"/pokemon"}
            >
              Back
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
