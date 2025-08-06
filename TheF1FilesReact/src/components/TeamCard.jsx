//firstly importing useState which tracks whether the popup is being used or not
import React, { useState } from "react";

//define TeamCard Components and passes in Data from teams.js
//false means the popup is mot open, which should be the default state!
export default function TeamCard({
  logo,
  name,
  home,
  since,
  drivers,
  teamPrincipal,
  bannerImage, 
  carImage,
  about,    
  funFacts,
  background    
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="col text-center"
        onClick={() => setShowDetails(true)}
        role="button"
        style={{ cursor: "pointer" }}
      >
        <div className="bg-light p-4 rounded shadow-sm h-100 text-center">
          <img
            src={logo}
            alt={`${name} logo`}
            className="img-fluid mx-auto"
            style={{ maxWidth: "100px" }}
          />
          <h3 className="mt-2">{name}</h3>
          <p><strong>Home:</strong> {home}</p>
          <p><strong>F1 Since:</strong> {since}</p>
          <p><strong>Drivers:</strong> {drivers}</p>
        </div>
      </div>

      {showDetails && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
          onClick={() => setShowDetails(false)}
          style={{
            zIndex: 9999,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }}
        >
          <div
            className="bg-white p-4 rounded shadow"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "95%",
              maxWidth: "800px",         // Make it wider
              maxHeight: "90vh",         // Max height based on viewport
              overflowY: "auto"          // Enable vertical scrolling *inside* the modal
            }}
          >
            <img
              src={bannerImage}
              alt={`${name} banner`}
              className="img-fluid rounded mb-3"
            />
            <h2>{name}</h2>
            <p><strong>Headquarters:</strong> {home}</p>
            <p><strong>F1 Debut:</strong> {since}</p>
            <p><strong>Driver Lineup:</strong> {drivers}</p>
            <p><strong>Team Principal:</strong> {teamPrincipal}</p>

            <img
              src={carImage}
              alt={`${name} car`}
              className="img-fluid rounded my-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />

            <p><strong>About:</strong> {about}</p>

            {funFacts && (
              <>
                <h5>Fun Facts</h5>
                <ul>
                  {funFacts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </>
            )}

            <button className="btn btn-danger mt-3" onClick={() => setShowDetails(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}