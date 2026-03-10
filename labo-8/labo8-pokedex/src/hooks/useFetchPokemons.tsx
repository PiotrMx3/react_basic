import {useEffect, useState} from "react";

interface IPokemonList {
  results: IPokemonItem[];
}

interface IPokemonItem {
  name: string;
  url: string;
}

const useFetchPokemonList = (url: string) => {
  const [data, setData] = useState<IPokemonItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancel = false;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Fetch Failed");
        const data: IPokemonList = await response.json();
        if (!cancel) {
          setData(data.results);
        }
      } catch (error) {
        if (!cancel) {
          if (error instanceof Error) console.error(error.message);
          setData([]);
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
  }, [url]);

  return {data, isLoading};
};

export default useFetchPokemonList;
