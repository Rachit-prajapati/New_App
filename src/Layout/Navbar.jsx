import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import '../../public/css/style.css'

const Navbar = () => {
    let[q,setQ]=useState()
    let [language,setLanguage]=useState();
    let[search,setSearch]=useState("");
    let navigate=useNavigate();
    let [searchParams]=useSearchParams();
    function postData(e){
      e.preventDefault();
      navigate(`/?q=${search}&language=${language}`);
    } 
    useEffect(()=>{
    setQ(searchParams.get("q")??"All");
    setLanguage(searchParams.get("language")??"hi");
    },[searchParams])
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top border-bottom text-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            LATEST NEWS
          </NavLink>
          <button
            className="navbar-toggler bg-light"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="text-light nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to={`/?q=Politics&language=${language}`}>
                  Politics
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-light" to={`/?q=Crime&language=${language}`}>
                  Crime
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-light" to={`/?q=Cricket&language=${language}`}>
                  Cricket
                </NavLink>
              </li>
                 <li className="nav-item">
                <NavLink className="nav-link text-light" to={`/?q=Science&language=${language}`}>
                  Science
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="active nav-link text-light" to={`/?q=Technology&language=${language}`}>
                  Technology
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-light" to={`/?q=Sport&language=${language}`}>
                  Sport
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to={`/?q=Entertainment&language=${language}`}>
                      Entertainment
                    </NavLink>
                  </li>
                     <li>
                    <NavLink className="dropdown-item" to={`/?q=Economics&language}`}>
                      Economics
                    </NavLink>
                  </li>
                     <li>
                    <NavLink className="dropdown-item" to={`/?q=World&language=${language}`}>
                      World
                    </NavLink>
                  </li>
                     <li>
                    <NavLink className="dropdown-item" to={`/?q=India&language=${language}`}>
                      India
                    </NavLink>
                  </li>
                    <li>
                    <NavLink className="dropdown-item" to={`/?q=Jokes&language=${language}`}>
                      Jokes
                    </NavLink>
                  </li>
                </ul>
              </li>
                <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Langause
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to={`/?q=${q}&language=hi`}>
                      Hindi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={`/?q=${q}&language=en`}>
                      English
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={`/?q=${q}&language=fr`}>
                      French
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={`/?q=${q}&language=aw`}>
                      Aruba
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={`/?q=${q}&language=de`}>
                      Germany
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" onSubmit={postData}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className="btn btn-outline-warning" type="submit" >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
