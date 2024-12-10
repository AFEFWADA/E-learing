import React, { useState, useEffect } from "react";
import axios from "axios"; // You can use axios or fetch

function AllCv({ search }) {
  const [cv, setCv] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch CVs from the API when the component mounts
  useEffect(() => {
    const fetchCvs = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT"); // Replace with your API endpoint
        setCv(response.data); // Assuming the response contains the array of CVs
        setLoading(false);
      } catch (err) {
        setError("Error fetching CVs");
        setLoading(false);
      }
    };

    fetchCvs();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Normalize the search input for case-insensitive matching
  const normalizedSearch = search?.toLowerCase() || "";

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (
    <div className="d-flex gap-3 justify-content-center p-3 flex-wrap">

      {Array.isArray(cv) && cv.length > 0 ? (
        cv
          .filter((e) => {
            return (
              e.company?.toLowerCase().includes(normalizedSearch) || 
              e.name?.toLowerCase().includes(normalizedSearch) ||
              e.email?.toLowerCase().includes(normalizedSearch) // Adjust search filters as needed
            );
          })
          .map((e, i) => (
            <div className="card shadow p-3" style={{ width: "18rem" }} key={i}>
              <h5 className="card-title">Name: {e.name}</h5>
              <h5 className="card-text">Email: {e.email}</h5>
              <h5 className="card-text">Phone: {e.phone}</h5>
              <h5 className="card-text">GitHub: {e.gitHub}</h5>
              <h5 className="card-text">LinkedIn: {e.linkedin}</h5>
              <h5 className="card-text">File: {e.file}</h5>
            </div>
          ))
      ) : (
        <div>No CVs found.</div>
      )}
    </div>
  );
}

export default AllCv;
