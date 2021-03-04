import React from "react";
import { NavLink, Link } from "react-router-dom";
import { apiAuth } from "../../utils/api";
import { useAuth } from "../../utils/context";
import { Container } from "./Container";

export function Navbar() {
  const { auth, setAuth } = useAuth();

  function _logout() {
    apiAuth.logout();
    setAuth(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Link className="navbar-brand" to="/">
          Express React Passport
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/profile">
                (Protected Route)
              </NavLink>
            </li>
            {auth ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ left: "auto", right: 0 }}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={_logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
