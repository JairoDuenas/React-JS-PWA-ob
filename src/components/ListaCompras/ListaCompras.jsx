import React, { useState } from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

const ListaCompras = (props) => {

  const {newServiceWorkerDetected, onLoadNewServiceWorkerAccept} = props;

  const [newItem, setNewItem] = useState('');
  const [item, setItem] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  const addNewItem = (e) => {
    e.preventDefault();
    setItem([...item, newItem]);
    setNewItem("");
  };

  return (
    <div className='header'>
      <h1>Proyecto PWA - Lista de la compra</h1>
      {newServiceWorkerDetected && <div style={{ background: 'grey', width: '100px' }}>
        <h3>¡Nueva actualización!</h3>
        <button onClick={onLoadNewServiceWorkerAccept} >¡Actualizar¿</button>
      </div>}
      <input
        type='text'
        value={newItem}
        onChange={onChange}
        
      /> {/* // e => setNewItem(e.target.value) */}
      <button type='button' onClick={addNewItem} >Añadir</button>
      <ul>
        {item.map((item, key) => <li key={key}> {item} </li>)}
      </ul>
    </div>
  );
};

export default withServiceWorkerUpdater(ListaCompras);
