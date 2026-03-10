import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

const PageNotFound = () => <h1>ERROR 404</h1>;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "pokemon",
          element: <PokemonList />,
        },
        {
          path: "pokemon/:id",
          element: <PokemonDetail />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
