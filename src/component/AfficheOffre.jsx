import React, { useState, useEffect } from "react";
function Alloffre({ search }) {
  const [offres, setOffres] = useState([]);

  // Récupérer les données de l'API
  useEffect(() => {
    fetch("http://localhost:3300/api/v1/job")
      .then((response) => response.json())
      .then((data) => setOffres(data))
      .catch((error) => console.error("Erreur lors de la récupération des offres :", error));
  }, []);

  return (
    <div className="d-flex gap-3 justify-content-center p-3 flex-wrap">
      {offres
        .filter((e) => e.company.toLowerCase().includes(search.toLowerCase())) 
        .map((e, i) => (
          <div className="card shadow p-3" style={{ width: "18rem" }} key={i}>
            <h5 className="card-title">{e.company}</h5>
            <h5 className="card-text">Position: {e.position}</h5>
            <h5 className="card-text">Status: {e.status}</h5>
            <h5 className="card-text">Location: {e.workLocation}</h5>
          </div>
        ))}
    </div>
  );
}

export default Alloffre;
