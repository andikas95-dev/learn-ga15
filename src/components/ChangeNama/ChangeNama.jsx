import React, { useContext } from 'react';
import { AppContext } from '../../App';

function ChangeNama() {
  const { setNama } = useContext(AppContext);
  return <input type="text" onChange={(e) => setNama(e.target.value)} />;
}

export default ChangeNama;
