import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-md-start py-4 mt-auto w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md">
            <p className="mb-0">
              Stay Connected:
              <a href="mailto:vivianaseibold2027@u.northwestern.edu"> Email Us</a> |
              <a href="https://instagram.com/thef1files" target="_blank" rel="noreferrer"> Instagram</a>
            </p>
          </div>
          <div className="col-md-auto mt-3 mt-md-0">
            <a href="#top" className="btn btn-outline-dark">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
