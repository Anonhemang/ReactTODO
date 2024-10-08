import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddCont() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [important, setImportant] = useState("No");

  const addList = async () => {
    if (title && description) {
      await axios.post("http://localhost/ReactTODO/api.php", {
        title,
        description,
        status,
        important,
      });
      setTitle("");
      setDescription("");
      setStatus("Incomplete");
      setImportant("No");
      alert("Your List Is Created!");
    } else {
      alert("Please fill all fields!");
    }
  };
  return (
    <div className="container mt-5">
      <h1>Create New TODO List:</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="form-control p-2"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="form-control mt-2"
        value={description}
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      {description.split(" ").length} Words, {description.length} Char
      <br />
      <input type="hidden" value={status} />
      <input type="hidden" value={important} />
      <button className="mt-2 btn btn-success" onClick={addList}>
        Add
      </button>
      <Link to="/Incompleted" className="btn btn-danger mt-2 float-end me-2">
        View Incomplete Task
      </Link>
      <Link to="/Completed" className="btn btn-success mt-2 float-end me-2">
        View Completed Task
      </Link>
      <Link to="/Index" className="mt-2 me-2 float-end btn btn-warning">
        View All Lists
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}
