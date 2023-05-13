import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  const [name, setName] = useState("");
  const [country, setcountry] = useState("India");

  function handleClick(event) {
    setName(event.target.value);
    props.onClick(name);

    event.preventDefault();
  }

  function handleCountry(event) {
    const c = event.target.value;
    const n = event.target.name;

    setcountry(n);
    props.onCountry(c);

    setName("");
    props.onClick("");
    event.preventDefault();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
        <div className='container-fluid'>

          <a className="navbar-brand mx-2" href="/">NewsMonkey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/" > General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" > Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" > Entertainment </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" > Health </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" >Science </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" > Sports </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" > Technology</Link>
              </li>

              <li className=" nav-item dropdown">
                <button className="btn btn-secondary nav-link dropdown-toggle btn-sm" style={{ marginTop: 0, backgroundColor: "grey", color: "white" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {country}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><button onClick={handleCountry} id='1' value="us" name='US' class="dropdown-item">US</button></li>
                  <li><button onClick={handleCountry} id='2' value="ca" name='Canada' class="dropdown-item">Canada</button></li>
                  <li><button onClick={handleCountry} id='3' value="ru" name='Russia' class="dropdown-item">Russia</button></li>
                  <li><button onClick={handleCountry} id='4' value="in" name='India' class="dropdown-item">India</button></li>
                </ul>
              </li>
            </ul>

            <form style={{ marginLeft: 10, width: "25%", marginRight: 15, paddingTop: 10 }} className=" d-flex input-group mb-3" onSubmit={handleClick}>
              <input
                style={{ maxWidth: 200 }}
                class="form-control me-2"
                value={name}
                onChange={handleClick}
                type="text"
                placeholder="Search..."
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
            </form>

          </div>

          <div className="form-check form-switch text-light ">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle2} id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ marginRight: 10 }} htmlFor="flexSwitchCheckDefault">Easy Mode</label>
          </div>
          <div className="form-check form-switch text-light ">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ marginRight: 10 }} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>

        </div>

      </nav>
    </div >
  )

}

export default NavBar;