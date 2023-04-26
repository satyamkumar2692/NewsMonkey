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
        <a className="nav-link" href="/">General</a>
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
     
      
    
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-sm" style={{marginTop:5}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {props.country2}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/us" >US</a></li>
    <li><a class="dropdown-item" href="/ca">Canada</a></li>
    <li><a class="dropdown-item" href="/ru">Russia</a></li>
  </ul>
</div>

      


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