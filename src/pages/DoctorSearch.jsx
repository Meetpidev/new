import React, { useState, useEffect } from "react";
import doctors from "./dummy_doctor.json";
import "bootstrap/dist/css/bootstrap.min.css";

const DoctorSearch = () => {
  const [filters, setFilters] = useState({
    location: "",
    qualification: "",
    specialty: "",
  });
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Initially empty
  const [options, setOptions] = useState({
    locations: [],
    qualifications: [],
    specialties: [],
  });

  useEffect(() => {
    const locations = [...new Set(doctors.map((doc) => doc.Location))];
    const qualifications = [...new Set(doctors.map((doc) => doc.Qualification))];
    const specialties = [...new Set(doctors.map((doc) => doc.Specialty))];
    setOptions({ locations, qualifications, specialties });
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const searchDoctors = () => {
    let results = doctors.filter((doc) =>
      (filters.location === "" || doc.Location.includes(filters.location)) &&
      (filters.qualification === "" || doc.Qualification.includes(filters.qualification)) &&
      (filters.specialty === "" || doc.Specialty.includes(filters.specialty))
    );
    setFilteredDoctors(results);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 my-4">Search Doctors</h1>
      <div className="card p-4">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Location</label>
            <select name="location" className="form-select" onChange={handleChange}>
              <option value="">-- Select Location --</option>
              {options.locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Qualification</label>
            <select name="qualification" className="form-select" onChange={handleChange}>
              <option value="">-- Select Qualification --</option>
              {options.qualifications.map((qual, index) => (
                <option key={index} value={qual}>{qual}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Specialty</label>
            <select name="specialty" className="form-select" onChange={handleChange}>
              <option value="">-- Select Specialty --</option>
              {options.specialties.map((spec, index) => (
                <option key={index} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={searchDoctors}>Search</button>
      </div>

      {/* Display results only after searching */}
      {filteredDoctors.length > 0 && (
        <>
          <h2 className="mt-5">Results:</h2>
          <ul className="list-group">
            {filteredDoctors.map((doc, index) => (
              <li key={index} className="list-group-item">
                {doc.Name} - {doc.Specialty}, {doc.Qualification}, {doc.Location}, {doc.Experience} years of experience
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DoctorSearch;
