/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/action/userAction';

function Home() {
  const dispatch = useDispatch();
  const { isLoading, data: userData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <React.Fragment>
          {userData.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
