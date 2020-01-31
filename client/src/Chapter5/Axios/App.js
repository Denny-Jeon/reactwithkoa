import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PostForm from "./PostForm";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

const getList = (filtering) => axios.get(`${filtering}`);
const getOne = (id) => axios.get(`/${id}`);
const create = (data) => axios.post("/", data);
const update = (data) => axios.put(`/${data.id}`, data);
const remove = (id) => axios.delete(`/${id}`);


const fetchList = async (setList, filtering = "") => {
  try {
    const response = await getList(filtering);
    // setList(response.data.slice(90, 110));
    setList(response.data);
  } catch (err) {
    console.log(err);
  }
};

const App = () => {
  const [list, setList] = useState([]);
  const [one, setOne] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((req) => {
      req.headers.authorization = "bearer token";
      console.log(req);

      return req;
    }, (error) => {
      console.log(error);
      return Promise.reject(error);
    });
    const responseInterceptor = axios.interceptors.response.use((res) => {
      console.log(res);
      if (res.data && Array.isArray(res.data)) {
        res.data = res.data.map((d) => ({
          id: d.id,
          title: d.title,
          userId: d.userId,
        }));
      }

      return res;
    }, (error) => {
      console.log(error);
      return Promise.reject(error);
    });
    return async () => {
      if (requestInterceptor) await axios.interceptors.request.eject(requestInterceptor);
      if (responseInterceptor) await axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  useEffect(() => {
    fetchList(setList);
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

  const createOne = useCallback(
    async (data) => {
      if (data) {
        setLoading(true);
        try {
          await create(data);
          fetchList(setList);
        } catch (err) {
          console.log(err);
        }
        setLoading(false);
      }
    },
    [],
  );


  const updateOne = useCallback(
    async (data) => {
      if (data) {
        setLoading(true);
        try {
          await update(data);
          fetchList(setList);
          setOne(null);
        } catch (err) {
          console.log(err);
        }
        setLoading(false);
      }
    },
    [],
  );

  const deleteOne = useCallback(
    async (id) => {
      if (id) {
        setLoading(true);
        try {
          await remove(id);
          fetchList(setList);
          setOne(null);
        } catch (err) {
          console.log(err);
        }
        setLoading(false);
      }
    },
    [],
  );

  const search = useCallback(
    () => {
      if (filter && filter.length > 0) {
        setLoading(true);
        fetchList(setList, `?userId=${filter}`);
        setLoading(false);
      }
    },
    [filter],
  );

  const handleChange = (e) => {
    setFilter(e.target.value);
  };


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
      userId: <input type="text" name="userId" onChange={handleChange} /><button type="button" onClick={search}>검색</button>
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
              <td><button type="button" onClick={() => deleteOne(d.id)}>삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p />
      <PostForm
        defaultValues={one ? {
          title: one.title,
          body: one.body,
          userId: one.userId,
          id: one.id,
        } : {
          title: "",
          body: "",
          userId: 1,
          id: null,
        }}
        create={createOne}

        update={updateOne}
      />
    </div>
  );
};

export default App;
