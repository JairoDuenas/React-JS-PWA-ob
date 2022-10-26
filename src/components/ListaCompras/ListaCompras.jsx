import React, { useState } from 'react';

export default function ListaCompras() {
  const [newItem, setNewItem] = useState('');
  const [item, setItem] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setNewItem(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    setItem([...item, newItem])
  }

  return (
    <div className='header'>
      <h1>Proyecto PWA - Lista de la compra</h1>
      <input type='text' value={newItem} onChange={onChange} /> {/* // e => setNewItem(e.target.value) */}
      <button type='button' onClick={onClick} >Añadir</button>
      <ul>
        {item.map((item, key) => <li key={key}> {item} </li>)}
      </ul>
    </div>
  )
}
