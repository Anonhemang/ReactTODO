import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ImportantAll() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  const getList = async () => {
    try {
      const response = await axios.get("http://localhost/ReactTODO/api.php");
      const dataArray = Array.isArray(response.data) ? response.data : [];
      setList(dataArray);
      console.log(dataArray);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  const deleteList = async (id) => {
    if (window.confirm("Delete This List Item?")) {
      await axios.delete(`http://localhost/ReactTODO/api.php?id=${id}`);
      getList();
    }
  };
 
  const editPage = (nlist) => {
    navigate(`/Edit/${nlist.id}`, { state: { nlist } });
  };

  const viewPage = (nlist) => {
    navigate(`/View/${nlist.id}`, { state: { nlist } });
  };
  return (
    <div className="mt-5 mb-5">
      <Link to="/" className="btn btn-dark mt-2 ms-5">
        Create New List
      </Link>
      <Link to="/Index" className="btn btn-warning mt-2 ms-5">
        View All Task
      </Link>
      <Link to="/Completed" className="btn btn-success mt-2 ms-5">
        View Complete Task
      </Link>
      <Link to="/Incompleted" className="btn btn-danger mt-2 ms-5">
        Show Incomplete Task
      </Link>
      <Link to="/Important" className="btn btn-dark mt-2 ms-5">
        Show Pending Important Task
      </Link>
      <center>
        <h1 className="heading mt-3">ToDo List (All Important Tasks)</h1>
      </center>
      <table className="tab ">
        <thead>
          <tr>
            <th>Title</th>
            {/* <th>Description</th> */}
            {/* <th>Status</th> */}
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {list.map((nlist) =>
            nlist.important === "Yes" ? (
              <tr className="" key={nlist.id}>
                <td onClick={() => viewPage(nlist)} className="w-75">
                  {nlist.title}
                </td>
                {/* <td className="w-50">{nlist.description}</td> */}
                {/* <td>{nlist.status}</td> */}

                <td className="">
                  <button
                    className="btn btn-warning ms-2 mt-1"
                    onClick={() => viewPage(nlist)}
                  >
                    <i class="bi bi-eye text-dark"></i>
                  </button>
                  <button
                    className="btn btn-primary ms-2 mt-1"
                    onClick={() => editPage(nlist)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-danger ms-2 mt-1"
                    onClick={() => {
                      deleteList(nlist.id);
                    }}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
