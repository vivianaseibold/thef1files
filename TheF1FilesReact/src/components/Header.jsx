import React from "react";

export default function Header() {
  return (
    <header className="bg-red w-100">
      <div className="accessibility-controls container-fluid py-2 d-flex justify-content-end">
        <button id="font-decrease" aria-label="Decrease font size" className="btn btn-sm btn-light me-1">A−</button>
        <button id="font-increase" aria-label="Increase font size" className="btn btn-sm btn-light me-3">A+</button>
        <label htmlFor="font-selector" className="visually-hidden">Choose font</label>
        <select id="font-selector" className="form-select form-select-sm w-auto">
          <option value="Arial, sans-serif">Sans‑serif</option>
          <option value="Georgia, serif">Serif</option>
          <option value="'Helvetica Neue', Helvetica, Arial, sans-serif">Helvetica Neue</option>
          <option value="Verdana, Geneva, sans-serif">Verdana</option>
          <option value="'Courier New', monospace">Monospace</option>
        </select>
      </div>
      <nav className="navbar navbar-dark bg-red container-fluid">
        <a className="navbar-brand" href="index.html">
          <img
            src="assets/images/The (1).png"
            alt="The F1 Files logo"
            width="300"
            className="d-inline-block align-text-top"
          />
          <span className="visually-hidden">The F1 Files</span>
        </a>
        <ul className="nav nav-tabs nav-fill ms-auto w-50">
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger fs-5 active" href="Teams.html" aria-current="page">Teams</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="Drivers.html">Drivers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="Circuits.html">Circuits</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
