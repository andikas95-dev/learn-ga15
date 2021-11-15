import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUser,
  createUser,
  editUser,
  deleteUser,
} from '../../redux/action/userAction';
import '../../App.css';

function Users() {
  const [nama, setNama] = React.useState();
  const [tinggal, setTinggal] = React.useState();
  const [id, setId] = React.useState();
  const dispatch = useDispatch();

  const { isLoading: loadingUser, data: userData } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const resetForm = () => {
    setId('');
    setNama('');
    setTinggal('');
  };

  const handleSubmit = () => {
    const data = {
      nama,
      tinggal,
    };
    dispatch(createUser(data));
    resetForm();
  };

  const handleEdit = (data) => {
    setId(data.id);
    setNama(data.nama);
    setTinggal(data.tinggal);
  };

  const handleEditSubmit = () => {
    const data = {
      nama,
      tinggal,
    };
    dispatch(editUser(id, data));
    resetForm();
  };

  return (
    <div className="App">
      <header className="App-header">
        {loadingUser
          ? 'Loading'
          : userData?.map((item) => (
              <h5 style={{ margin: 0 }}>
                <span
                  style={{ marginRight: '10px' }}
                  key={item.id}
                >{`${item.nama} : ${item.tinggal}`}</span>
                <button type="button" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(deleteUser(item.id))}
                >
                  Delete
                </button>
                {id && id === item.id && (
                  <button type="button" onClick={() => resetForm()}>
                    Cancel
                  </button>
                )}
              </h5>
            ))}

        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama"
        />
        <input
          type="text"
          value={tinggal}
          onChange={(e) => setTinggal(e.target.value)}
          placeholder="Tinggal"
        />
        <button
          type="button"
          onClick={() => (id ? handleEditSubmit() : handleSubmit())}
        >
          {id ? 'Update' : 'Submit'}
        </button>
      </header>
    </div>
  );
}

export default Users;
