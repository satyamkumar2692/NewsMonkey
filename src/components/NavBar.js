import React from 'react'

 const NavBar=(props)=> {
 
    return (
      <div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
  <a className="navbar-brand mx-2" href="/">NewsMonkey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
        <a className="nav-link" href="/">General🇮🇳</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/business">Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/entertainment">Entertainment</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/health">Health</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="science/">Science</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sports">Sports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/technology">Technology</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/us">🇺🇸</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ca">🇨🇦</a>
      </li>
    

      


    </ul>

      
       <div className="form-check form-switch text-light ">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle2}id="flexSwitchCheckDefault"  />
              <label className="form-check-label" style={{marginRight:10}} htmlFor="flexSwitchCheckDefault">Easy Mode</label>
            </div>
       <div className="form-check form-switch text-light ">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle}id="flexSwitchCheckDefault"  />
              <label className="form-check-label" style={{marginRight:10}} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
  </div>
</nav>
      </div>
    )
  
}

export default NavBar;