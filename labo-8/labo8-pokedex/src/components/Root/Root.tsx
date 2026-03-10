import {NavLink, Outlet} from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <nav className="app-nav">
          <ul>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? "app-nav-link active" : "app-nav-link"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? "app-nav-link active" : "app-nav-link"
                }
                to={"/pokemon"}
              >
                Pokemon
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">Super Mega Footer</footer>
    </div>
  );
};

export default Root;
