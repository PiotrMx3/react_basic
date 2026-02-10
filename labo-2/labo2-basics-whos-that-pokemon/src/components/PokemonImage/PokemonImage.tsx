interface PokemonImageProps {
  id: number;
  visible: boolean;
  size?: string;
}

const PokemonImage = ({id, visible, size = "200px"}: PokemonImageProps) => {
  return (
    <>
      <img
        style={{
          filter: visible ? "" : "brightness(0)",
          width: size,
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt="pokemon"
      />
    </>
  );
};

export default PokemonImage;
