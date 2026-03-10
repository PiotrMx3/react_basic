import {useEffect, useState} from "react";

interface IPokemonDetail {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
}

const useFetchPokemonDetail = (urlId: string) => {
  const [data, setData] = useState<IPokemonDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancel = false;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${urlId}/`,
        );
        if (!response.ok) throw new Error("Fetch Failed");
        const data: IPokemonDetail = await response.json();
        if (!cancel) {
          setData(data);
        }
      } catch (error) {
        if (!cancel) {
          if (error instanceof Error) console.error(error.message);
          setData(null);
        }
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      cancel = true;
    };
  }, [urlId]);

  return {data, isLoading};
};

export default useFetchPokemonDetail;
