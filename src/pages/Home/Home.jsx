import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function Home() {
  const router = useHistory();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  console.log(router);
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'dc183253ff8c219f3285c63f85b710d5',
          language: 'en-US',
          page: page,
        },
      })
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => router.push(`/?page=${page}`));
  }, [page]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const newPage = page + 1;
          setPage(newPage);
        }}
      >
        {page}
      </button>
      {data?.map((item) => (
        <div key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
            width="200"
          />
          <h5>{item.original_title}</h5>
        </div>
      ))}
    </div>
  );
}

export default Home;
