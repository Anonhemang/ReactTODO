import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function View() {
  const location = useLocation();
  const navigate = useNavigate();

  const { nlist } = location.state;
  const [title, setTitle] = useState(nlist.title);
  const [description, setDescription] = useState(nlist.description);
  const [status, setStatus] = useState(nlist.status);

  // Update nlist

  return (
    <>
      <h2 className="container mt-5"> View list</h2>
      <div className="container d-block mt-3 m-auto">
        <input
          type="text"
          value={title}
          placeholder="Name"
          className="form-control w-100"
          readOnly
        />
        <textarea
          type="email"
          value={description}
          placeholder="Email"
          className="form-control mt-2 w-100"
          rows={8}
          readOnly
        ></textarea>
        <input className="form-control mt-2" value={status} readOnly />
        <br />
        <button className="btn btn-danger">
          <Link to="/Index" className="text-dark text-decoration-none">
            Go Back
          </Link>
        </button>
      </div>
    </>
  );
}
