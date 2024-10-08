import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  const { nlist } = location.state;
  const [title, setTitle] = useState(nlist.title);
  const [description, setDescription] = useState(nlist.description);
  const [status, setStatus] = useState(nlist.status);

  // Update nlist
  const EditUser = async () => {
    if (description.length > 1000) {
      alert("Maximam Characters Limit 1000");
    } else {
      await axios.put("http://localhost/ReactTODO/api.php", {
        id: nlist.id,
        title,
        description,
        status,
      });
      navigate("/Index");
    }
  };

  return (
    <>
      <h2 className="container mt-5"> Edit list</h2>
      <div className="container d-block mt-3 m-auto">
        <input
          type="text"
          value={title}
          placeholder="Name"
          className="form-control w-75"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="email"
          value={description}
          placeholder="Email"
          className="form-control mt-2 w-75"
          onChange={(e) => setDescription(e.target.value)}
          rows={8}
        ></textarea>
        <p className="ms-1">
          {description.split(" ").length} Words, {description.length} Char
        </p>
        <select
          className="form-select mt-2 w-75"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <button className="btn btn-primary mt-3" onClick={EditUser}>
          Update
        </button>
        <br />
      </div>
    </>
  );
}
