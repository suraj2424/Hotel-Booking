import React from "react";

function Navbar() {
  return (
    <div class="mynav">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
        &#9778;Hotel Booking&#9778;
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" >
            <a class="nav-item nav-link" href="/register">
              <b>Register</b>
            </a>
            <a class="nav-item nav-link" href="/login">
              <b>Login</b>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
