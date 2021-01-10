import React from 'react'
import Button from "@material-ui/core/Button"
import {Link} from 'react-router-dom'
export default function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Button variant="contained" color="secondary"> TODO </Button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link" aria-current="page" >Home</Link>
        <Link to="/add" className="nav-link" aria-current="page" >Add Todo</Link>
      </div>
    </div>
  </div>
</nav>
      
    </div>
  )
}
