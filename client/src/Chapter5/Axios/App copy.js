import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

const getList = () => axios.get("/");
const getOne = (id) => axios.get(`/${id}`);
const deleteOne = (id) => axios.delete(`/${id}`);
const createOne = (data) => axios.post("/", data);
const updateOne = (data) => axios.put("/", data);

const App = () => {
  const [list, setList] = useState([]);
  const [one, setOne] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await getList();
        setList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchList();
  }, []);

  const fetchOne = useCallback(
    (id) => {
      console.log("hfdafsd");
      if (id) {
        setLoading(true);
        getOne(id).then((response) => {
          console.log(response);
          setOne(response.data);
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          setLoading(false);
        });
      }
    },
    [],
  );


  return (
    <div>
      {loading ? (<div>loading.....</div>) : (
        <div>selectedId:{one ? one.id : ""}, title:{one ? one.title : ""}</div>
      )}

      <p />
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            {/* <td>body</td> */}
            <td>userId</td>
          </tr>
        </thead>
        <tbody>
          {list.map((d) => (
            <tr key={d.id}>
              <td><button type="button" onClick={() => fetchOne(d.id)}>{d.id}</button></td>
              <td>{d.title}</td>
              {/* <td>{d.body}</td> */}
              <td>{d.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
