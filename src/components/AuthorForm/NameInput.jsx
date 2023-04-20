import React from 'react';

const NameInput = ({ name, setName, lastName, setLastName }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Nombre:</label>
      <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor="lastName">Apellido:</label>
      <input type="text" className="form-control" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
    </div>
  );
};

export default NameInput;
