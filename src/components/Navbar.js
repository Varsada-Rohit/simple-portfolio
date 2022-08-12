import React from "react";
import "../App.css";

function Navbar() {
  // return (
  //   <nav class="navbar navbar-expand-lg bg-white py-2 ">
  //     <div class="container">
  //       <a class="navbar-brand" href="#">
  //         RV
  //       </a>
  //       <button
  //         class="navbar-toggler"
  //         type="button"
  //         data-toggle="collapse"
  //         data-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span class="navbar-toggler-icon"></span>
  //       </button>
  //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
  //         {/* <form class="d-flex" role="search">
  //           <input
  //             class="form-control me-2"
  //             type="search"
  //             placeholder="Search"
  //             aria-label="Search"
  //           />
  //           <button class="btn btn-outline-success" type="submit">
  //             Search
  //           </button>
  //         </form> */}
  //         <ul class="navbar-nav  mb-2 mb-lg-0">
  //           <li class="nav-item mx-4">
  //             <a class="nav-link active" aria-current="page" href="#work">
  //               Work
  //             </a>
  //           </li>
  //           <li class="nav-item mx-4">
  //             <a class="nav-link active" aria-current="page" href="#about">
  //               About
  //             </a>
  //           </li>
  //           <li class="nav-item mx-4">
  //             <a class="nav-link active" aria-current="page" href="#resume">
  //               Resume
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          RV
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item mx-4">
              <a class="nav-link active" aria-current="page" href="#work">
                Work
              </a>
            </li>

            <li class="nav-item mx-4">
              <a class="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>

            <li class="nav-item mx-4">
              <a class="nav-link active" aria-current="page" href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
