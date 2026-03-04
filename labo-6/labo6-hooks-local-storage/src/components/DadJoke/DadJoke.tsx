import {useEffect, useState} from "react";

interface IJoke {
  id: string;
  joke: string;
  status: number;
}

const DadJoke = () => {
  const [joke, setJoke] = useState("");
  const [trigger, setTrigger] = useState<boolean>(true);
  const [local, setLocal] = useState(() => localStorage.getItem("joke") ?? "");

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });

      const joke: IJoke = await response.json();

      if (!ignore) {
        setJoke(joke.joke);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [trigger]);

  const handleLocalStorage = (joke: string) => {
    setLocal(joke);
    localStorage.setItem("joke", joke);
  };

  return (
    <>
      <h1>Random joke: </h1>
      <p>{joke}</p>
      <button onClick={() => setTrigger((prev) => !prev)} type="button">
        new joke
      </button>
      <button onClick={() => handleLocalStorage(joke)} type="button">
        Set as favorite
      </button>

      <br />
      <br />

      {local && (
        <>
          <h2>Favorite joke:</h2>
          <p>{local}</p>
        </>
      )}
    </>
  );
};

export default DadJoke;
