import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

const getList = () => axios.get("/");
const getOne = (id) => axios.get(`/${id}`);

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
    async (id) => {
      if (id) {
        setLoading(true);
        try {
          const response = await getOne(id);
          setOne(response.data);
        } catch (err) {
          console.log(err);
        }
        setLoading(false);
      }
    },
    [],
  );


  return (
    <div>
      {loading ? (<div>loading.....</div>) : (
        <div>
         selected Id:{one ? one.id : ""} <br />
         title:{one ? one.title : ""}<br />
         body:{one ? one.body : ""}<br />
         userId:{one ? one.userId : ""}<br />
        </div>
      )}
      <p />
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>userId</td>
          </tr>
        </thead>
        <tbody>
          {list.map((d) => (
            <tr key={d.id}>
              <td><button type="button" onClick={() => fetchOne(d.id)}>{d.id}</button></td>
              <td>{d.title}</td>
              <td>{d.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
